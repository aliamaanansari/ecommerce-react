import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context";

const productId = "12323123";

const NotFoundPage = () => {
  // const contextValue = useContext(UserContext);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(`/product/${productId}`);
  };
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go back</Link>
      <button onClick={navigateToHome}>Go to products</button>
    </div>
  );
};

export default NotFoundPage;
