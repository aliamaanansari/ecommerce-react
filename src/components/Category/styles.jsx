import { mobile } from "../../responsive";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "0rem" })}
`;
