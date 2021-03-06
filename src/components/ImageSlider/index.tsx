import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { Bullet } from "../Bullet";

import { Container, ImageIndexes, CardImageWrapper, CardImage } from "./styles";

interface ImageSlideProps {
  images: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ images }: ImageSlideProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const onViewableItemsChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {images.map((item, index) => (
          <Bullet key={item} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={images}
        keyExtractor={(key) => key}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        renderItem={({ item }) => (
          <CardImageWrapper>
            <CardImage resizeMode="contain" source={{ uri: item }} />
          </CardImageWrapper>
        )}
      />
    </Container>
  );
}
