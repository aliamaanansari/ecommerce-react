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
export const Button = styled.button`
  width: 14rem;
  padding: 0.6rem 1.5rem;
  background-color: ${colors.primaryColor};
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  overflow: hidden;
  font-weight: 400;
  /* display: flex;
     */
  z-index: 99;

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;
export const ShoppingButton = styled.button`
  padding: 1.5rem;
  font-size: 1rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
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
  justify-content: space-between;
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
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const ProductDetails = styled.div`
  flex: 2;
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Name = styled.span`
  ${mobile({ fontSize: "0.7rem" })}
`;
export const Id = styled.span`
  ${mobile({ fontSize: "0.7rem", marginTop: " 0.5rem" })}
`;
export const Color = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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
export const DeleteProduct = styled.button`
  padding: 0.4rem 0.5rem;
  border-radius: 50%;
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: transparent;
  &:hover {
    background-color: ${colors.primaryColor};
    color: white;
  }
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0rem;
  font-size: 1.5rem;
  ${mobile({ margin: "5px 15px", fontSize: "1rem" })}
`;

export const Category = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const Amount = styled.div`
  margin: 0.8rem;
  font-weight: 500;
`;

export const FinalAmount = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  ${mobile({ margin: "20px" })}
`;
