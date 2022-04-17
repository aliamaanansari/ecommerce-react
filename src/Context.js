import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import mainReducer from "./Reducer";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, {
    categories: [],
    products: [],
    sortByFilters: {
      sortByCategory: [],
      sortByBrands: [],
    },
    sortBy: null,
    priceRange: 0,
    tag: null,
    rating: 0,
    subCategory: null,
    cart: [],
    wishlist: [],
    showtoast: false,
  });

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
