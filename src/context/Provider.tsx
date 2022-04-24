import { createContext, useContext, useEffect, useState } from "react";
import { UserAlias, UserContextInterface } from "../components/user.type";

export const UserContext = createContext<UserContextInterface>({
  value: "",
  users: [],
  usersList: [],
  storedUsers: [],
  isLogined: false,
  username: "",
  password: "",
  setValue: () => {},
  setUsers: () => {},
  setUsersList: () => {},
  setStoredUsers: () => {},
  setIsLogined: () => {},
  setUsername: () => {},
  setPassword: () => {},
});

export const useUserContext = () => {
  return useContext(UserContext);
};

export default function Provider({ children }: { children: JSX.Element }) {
  const [value, setValue] = useState<string>("");

  const [users, setUsers] = useState<UserAlias>([]);
  const [usersList, setUsersList] = useState<UserAlias>([]);
  const [storedUsers, setStoredUsers] = useState<UserAlias>([]);

  const [isLogined, setIsLogined] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();

      setUsers(data);
      setUsersList(data);
      setStoredUsers(data);
    };

    fetchUsers();
  }, []);

  const store = {
    value,
    users,
    usersList,
    storedUsers,
    isLogined,
    username,
    password,
    setValue,
    setUsers,
    setUsersList,
    setStoredUsers,
    setIsLogined,
    setUsername,
    setPassword,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
}
