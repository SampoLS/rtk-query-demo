import { memo, MouseEvent } from "react";
import { Link } from "react-router-dom";

import { blurBackgroundOrNot, displayFormOrNot } from "../utils/styleControl";

interface Info {
  username: string;
  url: string;
  isLogined: boolean;
}

const UserCard = (props: Info) => {
  const { username, url, isLogined } = props;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isLogined) {
      displayFormOrNot("form-box", "no");
    } else {
      e.preventDefault();

      displayFormOrNot("form-box", "yes");
      blurBackgroundOrNot("box", "yes");
    }
  };

  return (
    <Link to={`/${username}`} onClick={handleClick}>
      <article className="box-users">
        <section className="box-info">
          <div className="box-img">
            <img src={url} alt={username} />
          </div>
          <div className="box-username">
            <h4>{username}</h4>
          </div>
        </section>
        <section className="box-quotes">
          <div>
            We are all in the gutter, but some of us are looking at the starts.
          </div>
        </section>
      </article>
    </Link>
  );
};

export default memo(UserCard);
