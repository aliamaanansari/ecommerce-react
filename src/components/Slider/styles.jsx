import styled from "styled-components";

export const FilterSidebar = styled.div`
  background-color: var(--white);
  min-height: calc(100vh - 6rem);
  height: auto;
  grid-area: sidebar;
  width: 25rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const SideBar = styled.div`
  color: black;
  width: 20vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  padding-top: 0.8rem;
`;
export const Filter = styled.div`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;
export const Title = styled.h1`
  font-size: 1.8rem;
`;
export const Clear = styled.h5`
  font-size: 1.3rem;
  font-weight: 300;
  cursor: pointer;
`;
export const PriceSlider = styled.div`
  margin: 1.5rem 0rem;
  padding: 0.8rem;
  border: 1px solid #888;
`;
export const SlideContainer = styled.div`
  color: #888;
`;
export const PriceSliderText = styled.div`
  display: flex;
  font-size: small;
`;
export const Price = styled.p`
  font-weight: bold;
  padding-top: 1rem;
  margin-right: 3rem;
`;
export const PriceSlide = styled.input.attrs({
  type: "range",
  min: "1",
  max: "100",
  value: "10",
})`
  width: 60%;
  border: 1px solid #888;
`;

export const Sorting = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 1.3rem;
`;
export const SortContainer = styled.div`
  margin-top: 1.3rem;
`;
export const SortLowToHigh = styled.input.attrs({ type: "radio" })`
  margin-right: 0.3rem;
`;
export const SortHighToLow = styled.input.attrs({ type: "radio" })`
  margin-right: 0.3rem;
`;
export const Category = styled.div``;
export const CheckBoxItem = styled.div`
  font-size: 1.3rem;
  padding-bottom: 1rem;
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 1rem;
  cursor: pointer;
  margin-right: 0.3rem;
`;

export const RatingContainer = styled.div``;
export const RadioContainer = styled.div`
  margin-top: 1.5rem;
  padding-bottom: 0.7rem;
  font-size: 1.3rem;
`;
export const Radiobtn = styled.div`
  margin-top: 1rem;
`;
export const Radio = styled.input.attrs({ type: "radio" })``;

export const SideContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #e9e9e9;
  border-radius: 10px;
  padding: 1rem;
  overflow-y: auto;
`;
