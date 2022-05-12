import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "./components/Form";
import Loading from "./components/Loading";
import LoginAndRegisterButton from "./components/LoginAndRegisterButton";
import SearchBarAndButton from "./components/SearchBarAndButton";
import SelectUser from "./components/SelectUser";
import UserCard from "./components/UserCard";
import { fetchUsers } from "./features/usersSlice";
import { User } from "./components/user.type";

export interface State {
  users: {
    isLogined: boolean;
    users: Array<User>;
    copyUsers: Array<User>;
  };
}

export default function App() {
  const dispatch = useDispatch();

  const users = useSelector((state: State) => state.users.users);
  const isLogined = useSelector((state: State) => state.users.isLogined);

  useEffect(() => {
    if (users.length === 0) {
      setTimeout(() => {
        dispatch(fetchUsers());
      }, 1000);
    }
  }, [users.length, dispatch]);

  const renderUsers = users.map((user: User) => {
    return (
      <UserCard
        key={user.login}
        username={user.login}
        url={user.avatar_url}
        isLogined={isLogined}
      />
    );
  });

  return (
    <Fragment>
      <section className="input">
        <SearchBarAndButton />
        <SelectUser />
        <LoginAndRegisterButton isLogined={isLogined} />
      </section>
      <section className="box">
        {users.length > 0 ? renderUsers : <Loading />}
      </section>
      <section>
        <Form />
      </section>
    </Fragment>
  );
}
