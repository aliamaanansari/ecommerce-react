import styled from "styled-components";
import { mobile } from "../../responsive";
import { colors } from "../../themes";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
  ${mobile({
    padding: "1rem",
    flexDirection: "column",
    padding: "0.8rem 0rem",
  })}
`;
export const ProductImage = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  border-radius: 2rem;
  width: 70%;
  height: 34rem;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  margin: 0px 1.5rem;
`;
export const Title = styled.h1`
  font-weight: 400;
  letter-spacing: 1.5px;
  ${mobile({ fontSize: "1.5rem" })}
`;
export const Info = styled.p`
  width: 90%;
  margin: 1.5rem 0rem;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  ${mobile({ fontSize: "1rem", width: "100%", marginTop: "1rem" })}
`;
export const Price = styled.p`
  font-size: 2.5rem;
  ${mobile({ fontSize: "1.5rem" })}
`;
export const Filter = styled.div`
  display: flex;
  margin: 1.5rem 0rem;
`;
export const ColorFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0rem;
  ${mobile({ marginTop: "0.5rem" })}
`;
export const ColorTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin: 1rem 0rem;
  ${mobile({ fontSize: "1rem", margin: "0rem" })}
`;
export const Color = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0rem 0.5rem;
  cursor: pointer;
  ${mobile({ height: "1rem", width: "1rem" })}
`;
export const Size = styled.select`
  padding: 0.2rem 1rem;
  margin: 0rem 0.8rem;
`;
export const ProductSize = styled.option`
  font-size: 2rem;
  ${mobile({ fontSize: "1rem" })}
`;
export const AddContainer = styled.div`
  display: flex;
  margin: 2rem 0rem;
  ${mobile({ marginTop: "0.5rem" })}
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  ${mobile({ fontSize: "1rem" })}
`;
export const Sub = styled.span`
  margin-right: 1.5rem;
  ${mobile({ marginRight: "0.5rem" })}
`;
export const Amount = styled.span`
  margin-right: 1.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  border: 1px solid ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ marginRight: "0.5rem" })}
`;
export const Add = styled.span``;
export const AddToCart = styled.button`
  margin-left: 2rem;
  background-color: ${colors.primaryColor};
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  overflow: hidden;
  border: none;
  padding: 0.8rem;
  ${mobile({ fontSize: "0.8rem" })}

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;

export const AddToWishlist = styled.button`
  background-color: ${colors.primaryColor};
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 0.8rem;
  ${mobile({ fontSize: "0.8rem" })}

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;
