import React from "react";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CardImageWrapper,
  CardImage,
} from "./styles";

interface ImageSlideProps {
  images: string[];
}

export function ImageSlider({ images }: ImageSlideProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
        <ImageIndex active={false}></ImageIndex>
      </ImageIndexes>

      <CardImageWrapper>
        <CardImage resizeMode="contain" source={{ uri: images[0] }} />
      </CardImageWrapper>
    </Container>
  );
}
