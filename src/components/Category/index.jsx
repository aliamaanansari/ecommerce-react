import React from "react";

import { catItem } from "../../data";
import { CatItem } from "../CatItem/";
import { Container } from "./styles";

export const Category = () => {
  return (
    <Container>
      {catItem.map((item) => (
        <CatItem item={item} key={item.id}></CatItem>
      ))}
    </Container>
  );
};
