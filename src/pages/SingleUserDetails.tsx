import { useParams } from "react-router-dom";

export default function SingleUserDetails() {
  const { username } = useParams();

  return <div>{username}</div>;
}
