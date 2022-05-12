import axios from "axios";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { handleSetToLogin } from "../features/usersSlice";
import { blurBackgroundOrNot, displayFormOrNot } from "../utils/styleControl";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (username === "tamelo" && password === "123456") {
      displayFormOrNot("form-box", "no");
      blurBackgroundOrNot("box", "no");

      setUsername("");
      setPassword("");

      dispatch(handleSetToLogin());
    }
  };

  const handleCancle = () => {
    displayFormOrNot("form-box", "no");
    blurBackgroundOrNot("box", "no");
  };

  return (
    <section className="form-box">
      <form className="form" method="POST">
        <span className="close-btn" onClick={handleCancle}>
          &#215;
        </span>
        <div className="text-box">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="text-box">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login" onClick={handleLogin}>
          Login
        </button>
      </form>
    </section>
  );
}
