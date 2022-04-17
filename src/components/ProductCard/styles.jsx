import styled from "styled-components";
import { mobile } from "../../responsive";
import { colors } from "../../themes";

export const SideContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  border-radius: 10px;
  overflow-y: auto;
`;
export const Card = styled.div`
  width: 17rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.8rem;
`;
export const ProductImg = styled.div`
  width: 100%;
  background-color: white;
`;
export const Image = styled.img`
  width: 17rem;
  height: 20rem;
  object-fit: cover;
`;
export const ImgInfo = styled.div`
  color: black;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;
export const CategoryName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const WishListAndAddToCart = styled.div`
  display: flex;
`;

export const Wishlist = styled.button`
  width: 3rem;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;

  justify-content: center;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #7c827c;

  &:hover {
    color: ${colors.primaryColor};
  }
`;
export const Button = styled.button`
  width: 14rem;
  padding: 0.6rem 1.5rem;
  background-color: ${colors.primaryColor};
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 400;
  /* display: flex;
     */
  z-index: 99;

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;
