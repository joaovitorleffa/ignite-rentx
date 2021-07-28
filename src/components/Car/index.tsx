import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import { TextMediumSecondary } from "../Text/TextMediumSecondary";
import GasolineSvg from "../../assets/gasoline.svg";

import { Container, Details, About, Rent, ImageCar } from "./styles";

interface Car {
  brand: string;
  name: string;
  thumbnail: string;
  rent: {
    period: string;
    price: number;
  };
}

interface CarProps {
  data: Car;
}

export function Car({ data }: CarProps) {
  const theme = useTheme();
  return (
    <Container>
      <Details>
        <TextMediumSecondary
          size={RFValue(10)}
          textTransform="uppercase"
          color={theme.colors.text_detail}
        >
          {data.brand}
        </TextMediumSecondary>
        <TextMediumSecondary color={theme.colors.title}>
          {data.name}
        </TextMediumSecondary>

        <About>
          <Rent>
            <TextMediumSecondary
              size={RFValue(10)}
              textTransform="uppercase"
              color={theme.colors.text_detail}
            >
              {data.rent.period}
            </TextMediumSecondary>
            <TextMediumSecondary color={theme.colors.main}>
              {data.rent.price}
            </TextMediumSecondary>
          </Rent>
          <GasolineSvg />
        </About>
      </Details>
      <ImageCar
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
