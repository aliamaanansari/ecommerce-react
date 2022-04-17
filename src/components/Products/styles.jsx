import styled from "styled-components";
import { mobile } from "../../responsive";
import { colors } from "../../themes";

export const Heading = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease;
`;
export const Container = styled.div`
  flex: 1;
  margin: 0rem 0.2rem;
  min-width: 14rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({ minWidth: "12rem", height: "15rem" })}

  &:hover ${Heading} {
    opacity: 1;
  }
`;
export const Image = styled.img`
  border-radius: 5rem;
  height: 70%;
  width: 100%;
  object-fit: cover;
`;

export const Icon = styled.div`
  margin: 0.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: all 1.5s ease;

  &:hover {
    background-color: ${colors.primaryColor};
    transform: scale(1.1);
    color: white;
  }
`;
