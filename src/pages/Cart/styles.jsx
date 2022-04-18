import { mobile } from "../../responsive";
import styled from "styled-components";
import { colors } from "../../themes";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 1.5rem;
  ${mobile({ padding: "0.5rem" })}
`;
export const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  ${mobile({ fontSize: "1rem" })}
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;
export const ShoppingButton = styled.button`
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 1rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? `${colors.primaryColor}` : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ padding: "0.5rem", marginLeft: "0.8rem", fontSize: "0.5rem" })}
`;

export const TopHeading = styled.div`
  ${mobile({ display: "none" })}
`;
export const TopText = styled.span`
  cursor: pointer;
  margin: 0rem 1.5rem;
  text-align: center;
`;
export const Bottom = styled.div`
  display: flex;
  flex: 1;
  ${mobile({ flexDirection: "column" })}
`;
export const Text = styled.div`
  flex: 3;
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Product = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
export const ProductDetails = styled.div`
  display: flex;
`;
export const ProductImage = styled.img`
  width: 15rem;
  height: 15rem;
  margin: 1.5rem;
  object-fit: cover;
  ${mobile({ width: "11rem", height: "5rem", marginTop: "1.5rem" })}
`;
export const ProductInfo = styled.div`
  padding: 1.5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Name = styled.span`
  ${mobile({ fontSize: "0.7rem" })}
`;
export const Color = styled.h5`
  ${mobile({ marginTop: " 0.5rem" })}
`;
export const Size = styled.span`
  ${mobile({ fontSize: "0.7rem", marginTop: " 0.5rem" })}
`;
export const Price = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  ${mobile({ margin: "5px 15px", fontSize: "1rem" })}
`;
export const Add = styled.div`
  cursor: pointer;
`;
export const Amount = styled.div`
  margin: 0.8rem;
  font-weight: 500;
`;
export const Remove = styled.div`
  cursor: pointer;
`;
export const FinalAmount = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  ${mobile({ margin: "20px" })}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
`;
export const AddtoWishlist = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${colors.primaryColor};
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  border: none;
  margin-bottom: 1rem;
`;
export const RemoveFromCart = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 2px solid black;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  border: none;
`;

export const Summary = styled.div`
  flex: 1;
  border: 1px solid ${colors.primaryColor};
  border-radius: 0.8rem;
  padding: 1.5rem;
`;
export const SummaryHeading = styled.h1`
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
`;
export const SummaryProduct = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  letter-spacing: 1.5px;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "22px"};
`;
export const SummaryText = styled.span``;
export const SummaryPrice = styled.span``;

export const Checkout = styled.button`
  padding: 0.8rem;
  width: 100%;
  background-color: ${colors.primaryColor};
  color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  border: none;
  ${mobile({ fontSize: "0.8rem" })}
`;
