import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CardImages } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CardImages>
        <ImageSlider
          images={["https://cdn.picpng.com/audi/audi-face-28582.png"]}
        />
      </CardImages>
    </Container>
  );
}
