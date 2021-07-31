import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/CardDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { TextMediumSecondary } from "../Text/TextMediumSecondary";

import { Container, Details, About, Rent, ImageCar } from "./styles";

interface CarProps extends RectButtonProps {
  data: CarDTO;
  onPress: () => void;
}

export function Car({ data, onPress, ...rest }: CarProps) {
  const theme = useTheme();

  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container onPress={onPress} {...rest}>
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
          {<MotorIcon />}
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
