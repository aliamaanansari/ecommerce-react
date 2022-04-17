import { useContext, useEffect, useRef } from "react";
import {
  ProductContainer,
  ProductDisplayContainer,
  ProductPageContainer,
  TopContainer,
} from "./styles";
import ProductCard from "../../components/ProductCard/index";
import Sidebar from "../../components/Slider/index";
import {
  getFilteredData,
  getRatingSortedData,
  getSortedData,
} from "../../filteredFunction";
import React from "react";
import { MainContext } from "../../Context";
import { Nav } from "../../components/Nav";


const ProductItems = () => {
  const topContainer = useRef();
  const { state, dispatch } = useContext(MainContext);
  const sortedData = getSortedData(state.products, state.sortBy);
  const ratingSortedData = getRatingSortedData(sortedData, state.rating);
  const filteredData = getFilteredData(ratingSortedData, state, dispatch);
  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <>
      <TopContainer ref={topContainer} />
      <Nav />
      <ProductPageContainer>
        <Sidebar />
        <ProductDisplayContainer>
          {filteredData.length === 0 ? (
            <>
              <h2 class="sub-heading">No products found!</h2>
            </>
          ) : (
            <>
              <ProductContainer>
                {filteredData.map((item) => (
                  <ProductCard item={item} />
                ))}
              </ProductContainer>
            </>
          )}
        </ProductDisplayContainer>
      </ProductPageContainer>

    </>
  );
};

export default ProductItems;
