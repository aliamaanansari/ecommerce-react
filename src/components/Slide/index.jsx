import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import { slideItem } from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Arrow,
  Container,
  Heading,
  Image,
  ImgSliding,
  ParaText,
  ShopNowBtn,
  Sliding,
  TextSliding,
  Wrap,
} from "./styles";

export const Slide = () => {
  const [slider, setSlider] = useState(0);
  const arrowClick = (direction) => {
    if (direction === "left") {
      setSlider(slider > 0 ? slider - 1 : 2);
    } else {
      setSlider(slider < 2 ? slider + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => arrowClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrap slider={slider}>
        {slideItem.map((item) => (
          <Sliding bg={item.bg} key={item.id}>
            <ImgSliding>
              <Image src={item.img}></Image>
            </ImgSliding>
            <TextSliding>
              <Heading>{item.heading}</Heading>
              <ParaText>{item.para}</ParaText>
              <Link to="product-list">
                <ShopNowBtn>SHOP NOW</ShopNowBtn>
              </Link>
            </TextSliding>
          </Sliding>
        ))}
      </Wrap>
      <Arrow direction="right" onClick={() => arrowClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};
