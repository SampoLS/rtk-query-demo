import { memo } from "react";
import { blurBackgroundOrNot, displayFormOrNot } from "../utils/styleControl";

interface Props {
  isLogined: boolean;
}

const LoginAndRegisterButton = (props: Props) => {
  const { isLogined } = props;

  const handleLogin = () => {
    displayFormOrNot("form-box", "yes");
    blurBackgroundOrNot("box", "yes");
  };

  return (
    <section className="register">
      <button onClick={handleLogin}>{isLogined ? "Login out" : "Login"}</button>
      <button>Sign Up</button>
    </section>
  );
};

export default memo(LoginAndRegisterButton);
