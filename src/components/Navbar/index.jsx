import { useContext } from "react";
import UserContext from "../../pages/context";

const Navbar = () => {
  const { username } = useContext(UserContext);

  return (
    <div style={{ height: 50, backgroundColor: "red" }}>
      Navbar - {username}
    </div>
  );
};

export default Navbar;
