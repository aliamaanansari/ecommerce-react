import { Link } from "react-router-dom";

import { useContext } from "react";
import {
  calculateFinalCartPrice,
  findPriceOfAllItems,
  removeFromCart,
  updateProductQty,
} from "../../CardService";
import { Nav } from "../../components/Nav/index";
import { MainContext } from "../../Context";
import { handleAddToWishlist } from "../../wishlistServices";
import {
  Add,
  AddtoWishlist,
  Amount,
  AmountContainer,
  Bottom,
  ButtonContainer,
  Checkout,
  Container,
  FinalAmount,
  Heading,
  Hr,
  Name,
  Price,
  Product,
  ProductDetails,
  ProductImage,
  ProductInfo,
  Remove,
  RemoveFromCart,
  ShoppingButton,
  Summary,
  SummaryHeading,
  SummaryPrice,
  SummaryProduct,
  SummaryText,
  Text,
  Top,
  TopHeading,
  TopText,
  Wrapper,
} from "./styles";

const Cart = () => {
  const { state, dispatch } = useContext(MainContext);
  console.log({ state });
  const totalPrice = findPriceOfAllItems(state.cart);
  const finalCartPrice = calculateFinalCartPrice(totalPrice, 50, 100);
  return (
    <>
      <Container>
        <Nav></Nav>

        <Wrapper>
          <Heading>YOUR BAG</Heading>

          <Top>
            <Link to="/product-list">
              <ShoppingButton>CONTINUE SHOPPING</ShoppingButton>
            </Link>
            <TopHeading>
              <TopText>Shopping Bag({state.cart.length})</TopText>
              <Link to="/wishlist" style={{ textDecoration: "none" }}>
                <TopText>Your Wishlist({state.wishlist.length})</TopText>
              </Link>
            </TopHeading>
            <ShoppingButton type="filled">CHECKOUT NOW</ShoppingButton>
          </Top>

          {state.cart.length === 0 ? (
            <>
              <h3>Your cart is empty!</h3>
            </>
          ) : (
            <>
              {" "}
              {state.cart.map((item) => {
                return (
                  <Bottom>
                    <Text>
                      <Product>
                        <ProductDetails>
                          <ProductImage src={item.image}></ProductImage>
                          <ProductInfo>
                            <Name>
                              <b>Product: </b>
                              {item.title}
                            </Name>
                          </ProductInfo>
                        </ProductDetails>
                        <Price>
                          <AmountContainer>
                            <Remove
                              onClick={(e) =>
                                item.quantity > 1 &&
                                updateProductQty(
                                  item._id,
                                  dispatch,
                                  "DECREMENT_QUANTITY"
                                )
                              }
                            >
                              -
                            </Remove>
                            <Amount>{item.quantity}</Amount>
                            <Add
                              onClick={(e) => {
                                console.log("clicked abcbac");
                                updateProductQty(
                                  item._id,
                                  dispatch,
                                  "INCREMENT_QUANTITY"
                                );
                                e.stopPropogation();
                              }}
                            >
                              +
                            </Add>
                          </AmountContainer>
                          <FinalAmount>{item.price}</FinalAmount>
                        </Price>
                        <ButtonContainer>
                          <AddtoWishlist
                            onClick={(e) =>
                              handleAddToWishlist(
                                state.wishlist,
                                item,
                                dispatch
                              )
                            }
                          >
                            Add To Wishlist
                          </AddtoWishlist>
                          <RemoveFromCart
                            onClick={(e) => removeFromCart(item._id, dispatch)}
                          >
                            Remove From Cart
                          </RemoveFromCart>
                        </ButtonContainer>
                      </Product>
                      <Hr />
                    </Text>
                  </Bottom>
                );
              })}
            </>
          )}
          <Summary>
            <SummaryHeading>ORDER SUMMARY</SummaryHeading>
            <SummaryProduct>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>RS. {totalPrice}</SummaryPrice>
            </SummaryProduct>
            <SummaryProduct>
              <SummaryText>Shipping Fees</SummaryText>
              <SummaryPrice>100</SummaryPrice>
            </SummaryProduct>
            {totalPrice > 50 && (
              <SummaryProduct>
                <SummaryText>Discount</SummaryText>
                <SummaryPrice>RS. -50</SummaryPrice>
              </SummaryProduct>
            )}
            <SummaryProduct type="total">
              <SummaryText>Total Amount</SummaryText>
              <SummaryPrice>RS.{finalCartPrice}</SummaryPrice>
            </SummaryProduct>
            <Checkout>CHECKOUT NOW</Checkout>
          </Summary>
        </Wrapper>
      </Container>
    </>
  );
};

export default Cart;
