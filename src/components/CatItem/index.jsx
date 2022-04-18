import { Link } from "react-router-dom";
import { Button, Container, Heading, Image, TextHead } from "./styles";

export const CatItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <TextHead>
        <Heading>{item.heading}</Heading>
        <Link to="/product-list">
          <Button>SHOP NOW</Button>
        </Link>
      </TextHead>
    </Container>
  );
};
