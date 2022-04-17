import styled from "styled-components";
import { mobile } from "../../responsive";
import { colors } from "../../themes";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slider * -100}vw);
`;
export const Sliding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImgSliding = styled.div`
  height: 100%;
  flex: 1;
`;
export const Image = styled.img`
  margin: 4rem 6rem;
  height: 80%;
  width: 60%;
  border-radius: 2rem;
  overflow: hidden;
`;
export const TextSliding = styled.div`
  flex: 1;
`;

export const Heading = styled.h1`
  font-size: 4rem;
`;
export const ParaText = styled.p`
  margin: 2rem 0rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 2.5px;
  padding-right: 4rem;
`;
export const ShopNowBtn = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${colors.primaryColor};
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 18px;
  border: none;

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;

export const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;
