export interface User {
  login: string;
  avatar_url: string;
}

export type UserAlias = Array<User>;

export interface UserContextInterface {
  value: string;
  users: Array<User>;
  usersList: Array<User>;
  storedUsers: Array<User>;
  isLogined: boolean;
  username: string;
  password: string;
  setValue: (arg: string) => void;
  setUsers: (arg: Array<User>) => void;
  setUsersList: (arg: Array<User>) => void;
  setStoredUsers: (arg: Array<User>) => void;
  setIsLogined: (arg: boolean) => void;
  setUsername: (arg: string) => void;
  setPassword: (arg: string) => void;
}
