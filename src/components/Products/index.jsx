import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Heading, Icon, Image } from "./styles";
import { MainContext } from "../../Context";

export const Products = () => {
  const { state, dispatch } = useContext(MainContext);
  return (
    <>
      {state.categories.map((item) => {
        return (
          <Container key={item._id}>
            <Image src={item.image}></Image>
            <Link
              to="/product-list"
              className="links"
              onClick={(e) =>
                dispatch({ type: "SET_CATEGORY", payload: item.categoryName })
              }
            >
              <Heading>
                <Icon>
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </Icon>
                <Icon>
                  <SearchOutlined></SearchOutlined>
                </Icon>
                <Icon>
                  <FavoriteBorderOutlined></FavoriteBorderOutlined>
                </Icon>
              </Heading>
            </Link>
          </Container>
        );
      })}
    </>
  );
};
