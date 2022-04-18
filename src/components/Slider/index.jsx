import React, { useContext } from "react";
import { MainContext } from "../../Context";
import {
  Category,
  CheckBox,
  CheckBoxItem,
  Clear,
  Filter,
  FilterSidebar,
  Price,
  PriceSlide,
  PriceSlider,
  PriceSliderText,
  Radio,
  Radiobtn,
  RadioContainer,
  RatingContainer,
  SideBar,
  SlideContainer,
  SortContainer,
  SortHighToLow,
  Sorting,
  SortLowToHigh,
  Title,
} from "./styles";

const Sidebar = () => {
  const { state, dispatch } = useContext(MainContext);
  return (
    <>
      <FilterSidebar>
        <SideBar>
          <Filter>
            <Title>Filter</Title>
            <Clear
              span
              onClick={(e) => dispatch({ type: "CLEAR_ALL_FILTERS" })}
              className="text-sm clear-all"
            >
              Clear
            </Clear>
          </Filter>
          <PriceSlider>
            <Title>Price</Title>
            <SlideContainer>
              <PriceSliderText>
                <Price>50</Price>
                <Price>200</Price>
                <Price>500</Price>
              </PriceSliderText>
              <PriceSlide></PriceSlide>
            </SlideContainer>
          </PriceSlider>

          <Sorting>
            <Title>Sort</Title>
            <SortContainer>
              <SortLowToHigh
                value={state.sortBy}
                checked={state.sortBy && state.sortBy === "low-to-high"}
                name="sortBy"
                onClick={() =>
                  dispatch({ type: "SET_SORT_TYPE", payload: "low-to-high" })
                }
              />
              Price Low-to-High
            </SortContainer>
            <SortContainer>
              <SortHighToLow
                value={state.sortBy}
                name="sortBy"
                checked={state.sortBy && state.sortBy === "high-to-low"}
                type="radio"
                onClick={() =>
                  dispatch({ type: "SET_SORT_TYPE", payload: "high-to-low" })
                }
              />
              Price High-to-Low
            </SortContainer>
          </Sorting>

          <Category>
            <Title>Category</Title>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes(
                  "Gold Fish"
                )}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Gold Fish" })
                }
              />
              Gold Fish
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes(
                  "Betta Fish"
                )}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Betta Fish" })
                }
              />
              Betta Fish
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes(
                  "Tetra Fish"
                )}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Tetra Fish" })
                }
              />
              Tetra Fish
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes(
                  "Guppy Fish"
                )}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Guppy Fish" })
                }
              />
              Guppy Fish
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes(
                  "Molly Fish"
                )}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Molly Fish" })
                }
              />
              Molly Fish
            </CheckBoxItem>
          </Category>
          <RatingContainer>
            <Radiobtn>
              <Title>Rating</Title>
              <RadioContainer>
                <Radio
                  value={state.rating}
                  checked={state.rating && state.rating === 4}
                  type="radio"
                  onClick={(e) => dispatch({ type: "SET_RATING", payload: 4 })}
                />{" "}
                4 Star and above
              </RadioContainer>
              <RadioContainer>
                <Radio
                  value={state.rating}
                  checked={state.rating && state.rating === 3}
                  type="radio"
                  onClick={(e) => dispatch({ type: "SET_RATING", payload: 3 })}
                />{" "}
                3 Star and above
              </RadioContainer>
              <RadioContainer>
                <Radio
                  value={state.rating}
                  checked={state.rating && state.rating === 2}
                  type="radio"
                  onClick={(e) => dispatch({ type: "SET_RATING", payload: 2 })}
                />{" "}
                2 Star and above
              </RadioContainer>
              <RadioContainer>
                <Radio
                  value={state.rating}
                  checked={state.rating && state.rating === 1}
                  type="radio"
                  onClick={(e) => dispatch({ type: "SET_RATING", payload: 1 })}
                />{" "}
                1 Star and above
              </RadioContainer>
            </Radiobtn>
          </RatingContainer>
        </SideBar>
      </FilterSidebar>
    </>
  );
};

export default Sidebar;
