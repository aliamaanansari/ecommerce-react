import styled from "styled-components";
import { mobile } from "../../responsive";
import { colors } from "../../themes";

export const Container = styled.div`
  background-color: #d6d6d6;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 30%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid ${colors.primaryColor};
  ${mobile({ width: "90%", height: "45%", padding: "0.5rem" })}
`;
export const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.input`
  font-size: 1.3rem;
  font-weight: 400;
  min-width: 40%;
  padding: 0.6rem;
  flex: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1.5rem 0.8rem 0rem 0rem;
  ${mobile({
    width: "10rem",
    padding: "0.7rem",
    fontSize: "0.8rem",
  })}
`;

export const Button = styled.button`
  width: 40%;
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  background-color: ${colors.primaryColor};
  border: none;
  color: white;
  border-radius: 0.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  overflow: hidden;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  ${mobile({ padding: "0.3rem", fontSize: "0.8rem", margin: "0.3rem" })}

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;

export const RememberContainer = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ fontSize: "0.6rem", margin: "0rem" })}
`;

export const CreateAc = styled.span`
  display: flex;
  align-items: flex-end;
  margin-top: 1.5rem;
  ${mobile({ fontSize: "0.6rem", margin: "0.3rem" })}
`;

export const LinkForget = styled.a`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  ${mobile({ fontSize: "0.6rem", margin: "0.6rem" })}
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1.3rem;
  height: 1.6rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  ${mobile({ width: "0.8rem", margin: "0.2rem" })}
`;
