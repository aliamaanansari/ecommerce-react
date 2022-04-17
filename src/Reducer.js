export const types = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_PRICE_RANGE: "SET_PRICE_RANGE",
  SET_SORT_TYPE: "SET_SORT_TYPE",
  SET_CATEGORY: "SET_CATEGORY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
  SET_SUB_CATEGORY: "SET_SUB_CATEGORY",
  SET_RATING: "SET_RATING",
  SET_BRAND: "SET_BRAND",
  CLEAR_ALL_FILTERS: "CLEAR_ALL_FILTERS",
  MOVE_TO_CART_FROM_WISHLIST: "MOVE_TO_CART_FROM_WISHLIST",
  SET_CART: "SET_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SET_WISHLIST: "SET_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
  SET_TAG: "SET_TAG",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
};

const mainReducer = (currentState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return { ...currentState, products: action.payload };

    case types.SET_CATEGORIES:
      return { ...currentState, categories: action.payload };

    case types.SET_PRICE_RANGE:
      return { ...currentState, priceRange: action.payload };

    case types.SET_SORT_TYPE:
      return { ...currentState, sortBy: action.payload };

    case types.SET_CATEGORY:
      return currentState.sortByFilters.sortByCategory.includes(action.payload)
        ? {
            ...currentState,
            sortByFilters: {
              ...currentState.sortByFilters,
              sortByCategory: currentState.sortByFilters.sortByCategory.filter(
                (item) => item !== action.payload
              ),
            },
          }
        : {
            ...currentState,
            sortByFilters: {
              ...currentState.sortByFilters,
              sortByCategory: currentState.sortByFilters.sortByCategory.concat(
                action.payload
              ),
            },
          };
    case types.DECREMENT_QUANTITY: {
      const clonedData = { ...currentState };
      let cartData = [...clonedData?.cart];
      if (cartData?.length) {
        const productIndex = cartData?.findIndex(
          (item) => item?._id === action?.payload
        );
        if (productIndex > -1) {
          const currentQty = cartData[productIndex]?.quantity ?? 0;
          const newQty = currentQty > 1 ? currentQty - 1 : currentQty;
          console.log({ newQty });
          cartData[productIndex] = {
            ...cartData[productIndex],
            quantity: newQty,
          };
        }
      }
      clonedData.cart = [...cartData];
      return { ...clonedData };
    }
    case types.SET_SUB_CATEGORY:
      return { ...currentState, subCategory: action.payload };
    case types.SET_RATING:
      return { ...currentState, rating: action.payload };
    case types.SET_BRAND:
      return currentState.sortByFilters.sortByBrands.includes(action.payload)
        ? {
            ...currentState,
            sortByFilters: {
              ...currentState.sortByFilters,
              sortByBrands: currentState.sortByFilters.sortByBrands.filter(
                (item) => item !== action.payload
              ),
            },
          }
        : {
            ...currentState,
            sortByFilters: {
              ...currentState.sortByFilters,
              sortByBrands: currentState.sortByFilters.sortByBrands.concat(
                action.payload
              ),
            },
          };
    case types.CLEAR_ALL_FILTERS:
      return {
        ...currentState,
        sortBy: null,
        priceRange: 0,
        rating: 0,
        sortByFilters: {
          sortByCategory: [],
          sortByBrands: [],
        },
        subCategory: null,
        tag: null,
      };
    case types.SET_CART:
      return {
        ...currentState,
        cart: [{ ...action.payload, quantity: 1 }, ...currentState?.cart],
      };
    case types.REMOVE_FROM_CART:
      const cart = currentState?.cart?.filter(
        (item) => item._id !== action.payload
      );
      return { ...currentState, cart: cart };
    case types.SET_WISHLIST:
      return {
        ...currentState,
        wishlist: [...currentState.wishlist, action.payload],
      };
    case types.REMOVE_FROM_WISHLIST:
      const wishlist = currentState?.wishlist?.filter(
        (item) => item._id !== action.payload
      );
      return { ...currentState, wishlist: wishlist };
    case types.SET_TAG:
      return { ...currentState, tag: action.payload };
    case types.INCREMENT_QUANTITY: {
      const clonedState = { ...currentState };
      let cartData = [...clonedState?.cart];
      if (cartData?.length) {
        const prodIndex = cartData?.findIndex(
          (item) => item?._id === action?.payload
        );
        if (prodIndex > -1) {
          const currentQty = cartData[prodIndex]?.quantity ?? 0;
          const newQty = currentQty + 1;
          cartData[prodIndex] = {
            ...cartData[prodIndex],
            quantity: newQty,
          };
        }

        clonedState.cart = [...cartData];
      }
      return { ...clonedState };
    }

    case types.MOVE_TO_CART_FROM_WISHLIST: {
      const stateClone = { ...currentState };
      if (stateClone?.wishlist?.length) {
        const itemIndex = stateClone?.wishlist?.findIndex(
          (item) => item?._id === action?.payload
        );
        if (itemIndex > -1) {
          const product = stateClone?.wishlist[itemIndex];
          const newWishlist = stateClone?.wishlist?.filter(
            (wl) => wl?._id !== product?._id
          );
          stateClone.wishlist = [...newWishlist];
          const productInCartIndex = stateClone?.cart?.findIndex(
            (item) => item?._id === action?.payload
          );
          if (productInCartIndex > -1) {
            stateClone.cart[productInCartIndex] = {
              ...stateClone.cart[productInCartIndex],
              quantity: stateClone.cart[productInCartIndex].quantity + 1,
            };
          } else {
            stateClone.cart.push({ ...product, quantity: 1 });
          }
        }
      }
      return { ...stateClone };
    }
    default:
      return currentState;
  }
};
export default mainReducer;
