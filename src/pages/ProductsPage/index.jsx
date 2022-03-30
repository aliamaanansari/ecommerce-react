import { useContext } from "react";
import UserContext from "./../context/index";

const ProductsPage = () => {
  const { setUsername, username } = useContext(UserContext);

  return (
    <div>
      <h1>ProductsPage</h1>
      <h1>{username}</h1>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default ProductsPage;
