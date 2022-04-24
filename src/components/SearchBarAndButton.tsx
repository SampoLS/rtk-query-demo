import { ChangeEvent, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  handleClearInputValue,
  handleFilterUserClick,
} from "../features/usersSlice";

import { State } from "../App";

const SearchBarAndButton = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const users = useSelector((state: State) => state.users.users);

  const handleFilterUsers = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (e.target.value === "") {
      dispatch(handleClearInputValue());

      const defaultOption = document.querySelector(
        ".all-users"
      ) as HTMLOptionElement;
      defaultOption.selected = true;
    }
  };

  const handleFilterClick = () => {
    dispatch(handleFilterUserClick({ users, input }));
  };

  return (
    <Fragment>
      <input type="search" value={input} onChange={handleFilterUsers} />
      <button className="filter-btn" onClick={handleFilterClick}>
        Filter User
      </button>
    </Fragment>
  );
};

export default SearchBarAndButton;
