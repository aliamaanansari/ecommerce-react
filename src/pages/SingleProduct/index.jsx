import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../../components/Nav/index";
import {
  AddToCart,
  AddToWishlist,
  Container,
  Image,
  Info,
  InfoContainer,
  Price,
  ProductImage,
  Title,
  Wrapper,
} from "./styles";

const SingleProduct = () => {
  const { productId } = useParams();
  const [productItem, setProductItem] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: "GET",
        });
        const data = await res.json();
        setProductItem(data.product);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [productId]);

  console.log(productItem);
  return (
    <Container>
      <Nav></Nav>

      <Wrapper>
        <ProductImage>
          <Image src={productItem.image}></Image>
        </ProductImage>

        <InfoContainer>
          <Title>{productItem.title}</Title>
          <Info>{productItem.categoryName}</Info>
          <Price>Rs.{productItem.price}</Price>
          <AddToWishlist>Add To Wishlist</AddToWishlist>
          <AddToCart>Add To Cart</AddToCart>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
