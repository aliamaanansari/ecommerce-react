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
  background-size: cover;
`;
export const Wrapper = styled.div`
  width: 40%;
  border-radius: 1rem;
  overflow: hidden;
  padding: 30px;
  background-color: white;
  border: 1px solid ${colors.primaryColor};
  ${mobile({ width: "75%" })}
`;
export const Heading = styled.h1`
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  min-width: 40%;
  padding: 8px 1px;
  border-radius: 0.5rem;
  overflow: hidden;
  flex: 1;
  margin: 20px 20px;
`;
export const Agree = styled.span`
  font-size: 18px;
  margin: 10px 20px;
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 5px 20px;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${colors.primaryColor};
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    background-color: ${colors.lightPrimary};
  }
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
