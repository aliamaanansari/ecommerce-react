import styled from "styled-components";
import { mobile } from "../../responsive";

export const TopContainer = styled.div``;
export const ProductPageContainer = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-areas: "sidebar maincontent";
  overflow: hidden;
  height: 150vh;
  color: white;
`;
export const ProductDisplayContainer = styled.div`
  background-color: var(--border-color);
  height: auto;
  grid-area: maincontent;
  width: auto;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  border-radius: 5px;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  border: none;
  column-gap: 0.6rem;
  margin-bottom: 1rem;
`;
