import axios from "axios";
import { removeFromCart } from "./CardService";

export const handleAddToWishlist = (wishlist, item, dispatch) => {
  console.log({ wishlist, item, dispatch });
  const isItemPresent = wishlist?.find(
    (itemInWishlist) => itemInWishlist._id === item._id
  );
  if (!isItemPresent) {
    addToWishlist(item, dispatch);
    removeFromCart(item._id, dispatch);
  }
};

export const addToWishlist = (item, dispatch) => {
  try {
    dispatch({ type: "SET_WISHLIST", payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlist = async (id, dispatch) => {
  try {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  } catch (error) {
    console.log("Error in wishlist service", error);
  }
};
