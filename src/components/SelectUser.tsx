import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { State } from "../App";
import {
  handleClearInputValue,
  handleSelectUser,
} from "../features/usersSlice";
import { User } from "./user.type";

export default function SelectUser() {
  const dispatch = useDispatch();

  const usersList = useSelector((state: State) => state.users.users);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const filterdUser = usersList.filter(
      (user: User) => e.target.value === user.login
    );

    dispatch(handleSelectUser(filterdUser));

    if (e.target.value === "all") {
      dispatch(handleClearInputValue());
    }
  };

  useEffect(() => {
    const length = usersList.length as number;

    if (length === 1) {
      const option = document.querySelector(".selected") as HTMLOptionElement;
      option.selected = true;
    } else {
      const defaultOption = document.querySelector(
        ".all-users"
      ) as HTMLOptionElement;
      defaultOption.selected = true;
    }
  }, [usersList.length]);

  return (
    <select onChange={handleSelect} className="select-box">
      <option value="all" className="all-users">
        All Users
      </option>
      {usersList.map((user: User) => {
        return (
          <option value={user.login} key={user.login} className="selected">
            {user.login}
          </option>
        );
      })}
    </select>
  );
}
