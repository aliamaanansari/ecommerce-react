import React, { useContext } from "react";

import { Search, ShoppingCartOutlined, Favorite } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

import {
  Center,
  Container,
  Input,
  Item,
  Lang,
  Left,
  Loginbtn,
  Logo,
  NavComponent,
  Right,
  SearchContainer,
  StyledLink,
} from "./styles";
import { MainContext } from "../../Context";

export const Nav = () => {
  const { state } = useContext(MainContext);
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Container>
      <NavComponent>
        <StyledLink to="/">
          <Center>
            <Logo>AquaCart.</Logo>
          </Center>
        </StyledLink>
        <Right>
          <Loginbtn onClick={handleLogout}>Logout</Loginbtn>

          <Item>
            <StyledLink to="/cart">
              <Badge badgeContent={state?.cart?.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </StyledLink>
          </Item>
          <Link to="/wishlist">
            <Badge badgeContent={state?.wishlist?.length} color="primary">
              <Favorite />
            </Badge>
          </Link>
        </Right>
      </NavComponent>
    </Container>
  );
};
