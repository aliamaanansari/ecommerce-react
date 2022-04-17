import { useContext } from "react";

import { Badge } from "@material-ui/core";

import { Favorite, ShoppingCartOutlined } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";

import { MainContext } from "../../Context";
import {
  Center,
  Container,
  Item,
  Loginbtn,
  Logo,
  NavComponent,
  Right,
  StyledLink,
} from "./styles";

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
