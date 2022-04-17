export const addToCart = (item, dispatch) => {
  try {
    dispatch({ type: "SET_CART", payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const updateProductQty = async (id, dispatch, actionType) => {
  try {
    dispatch({ type: actionType, payload: id });
  } catch (error) {
    console.log("Error in updateQtyFromCart service", error);
  }
};

export const removeFromCart = async (id, dispatch) => {
  try {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  } catch (error) {
    console.log("Error in cart service", error);
  }
};

export const findPriceOfAllItems = (cart) => {
  const totalPrice = cart.reduce((acc, curr) => {
    acc =
      acc +
      curr.price * (typeof curr?.quantity === "number" ? curr?.quantity : 1);
    return acc;
  }, 0);
  return totalPrice;
};

export const calculateFinalCartPrice = (
  totalPrice,
  totalDiscount,
  DeliveryCharges
) => {
  if (totalPrice < totalDiscount) {
    return totalPrice + DeliveryCharges;
  }
  return totalPrice - totalDiscount + DeliveryCharges;
};
