import { Favorite } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart, updateProductQty } from "../../CardService";
import { MainContext } from "../../Context";
import { addToWishlist } from "../../wishlistServices";
import {
  Button,
  Card,
  CategoryName,
  Image,
  ImgInfo,
  ImgTitle,
  ProductImg,
  SideContainer,
  Wishlist,
  WishListAndAddToCart,
} from "./styles";

const ProductCard = ({ item }) => {
  const { state, dispatch } = useContext(MainContext);
  let navigate = useNavigate();
  const [cartButtonText, setCartButtonText] = useState("ADD TO CART");
  const handleAddToCart = (e) => {
    const isItemPresent = state.cart.find(
      (itemInCart) => itemInCart._id === item._id
    );
    if (cartButtonText === "ADD TO CART") {
      if (!isItemPresent) {
        addToCart(item, dispatch);
        setCartButtonText("GO TO CART");
      } else {
        const isItemPresentInWishList = state?.wishlist?.find(
          (itemInWishlist) => itemInWishlist._id === item._id
        );
        if (!isItemPresentInWishList) {
          addToWishlist(item, dispatch);
          updateProductQty(item._id, dispatch, "increment");
        }
        setCartButtonText("GO TO CART");
      }
    } else {
      navigate("/cart");
    }
  };

  const handleAddToWishlist = (wishlist, item, dispatch) => {
    const isItemPresent = wishlist?.find(
      (itemInWishlist) => itemInWishlist._id === item._id
    );
    if (!isItemPresent) {
      addToWishlist(item, dispatch);
      removeFromCart(item._id, dispatch);
    }
  };

  const openSingleProductPage = (e) => {
    console.log(e.target.className);
    if (e.target.className !== { Button }) {
      navigate(`/product/${item._id}`);
    }
  };

  return (
    <SideContainer>
      <Card>
        <ProductImg key={item._id}>
          <Image src={item.image} onClick={openSingleProductPage} />
          <ImgInfo>
            <ImgTitle>{item?.title}</ImgTitle>
            <CategoryName>Rs.{item?.price}</CategoryName>
          </ImgInfo>
          <WishListAndAddToCart>
            <Wishlist
              onClick={() =>
                handleAddToWishlist(state.wishlist, item, dispatch)
              }
            >
              <Favorite></Favorite>
            </Wishlist>
            <Button onClick={handleAddToCart}>{cartButtonText}</Button>
          </WishListAndAddToCart>
        </ProductImg>
      </Card>
    </SideContainer>
  );
};

export default ProductCard;
