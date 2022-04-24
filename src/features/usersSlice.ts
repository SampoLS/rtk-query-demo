import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../components/user.type";

interface InitialState {
  isLogined: boolean;
  users: Array<User>;
  copyUsers: Array<User>;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://api.github.com/users");
  const users = await response.json();
  return users;
});

const initialState: InitialState = {
  isLogined: false,
  users: [],
  copyUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleFilterUserClick: (state, { payload }) => {
      const { users, input } = payload;
      const filterdUser = users.filter((user: User) =>
        user.login.includes(input.toLowerCase())
      );
      state.users = filterdUser;
    },

    handleClearInputValue: (state) => {
      state.users = state.copyUsers;
    },

    handleSelectUser: (state, { payload }) => {
      state.users = payload;
    },

    handleSetToLogin: (state) => {
      state.isLogined = true;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, () => {})
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.copyUsers = payload;
      });
  },
});

export default usersSlice.reducer;

export const {
  handleFilterUserClick,
  handleClearInputValue,
  handleSelectUser,
  handleSetToLogin,
} = usersSlice.actions;
