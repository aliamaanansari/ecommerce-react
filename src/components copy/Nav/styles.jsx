import { mobile } from "../../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../themes";

export const Container = styled.div`
  height: 4rem;
  ${mobile({ height: "1.5rem" })}
  background-color:;
`;
export const NavComponent = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.lightPrimary};
  ${mobile({ padding: "0.4rem 0rem" })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Lang = styled.span`
  font-size: 1rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 0.3rem;
`;
export const Loginbtn = styled.button`
  background-color: ${colors.primaryColor};
  color: white;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  padding: 0.6rem;
  ${mobile({ fontSize: "0.8rem" })}

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;
export const Input = styled.input`
  border: none;
  ${mobile({ width: "2rem" })}
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "1rem", marginLeft: "1.7rem" })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
export const Item = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin: 0rem 2rem;
  ${mobile({ fontSize: "0.5rem", marginLeft: "0.3rem" })}
`;

export const StyledLink = styled(Link)`
  //some CSS styles here
  text-decoration: none;
  color: black;
`;
