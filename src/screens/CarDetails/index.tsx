import React from "react";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import { CarDTO } from "../../dtos/CardDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { TextRegular } from "../../components/Text/TextRegular";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";

import {
  Container,
  Header,
  CardImages,
  Content,
  Details,
  Description,
  Rent,
  Accessories,
  Footer,
} from "./styles";

interface RouteProps {
  car: CarDTO;
}

export function CarDetails() {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { car } = route.params as RouteProps;

  function handleNavigateToScheduling() {
    navigation.navigate("Scheduling", { car });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CardImages>
        <ImageSlider images={car.photos} />
      </CardImages>

      <Content>
        <Details>
          <Description>
            <TextMediumSecondary
              size={RFValue(10)}
              textTransform="uppercase"
              color={theme.colors.text_detail}
            >
              {car.brand}
            </TextMediumSecondary>
            <TextMediumSecondary
              size={RFValue(25)}
              textTransform="capitalize"
              color={theme.colors.title}
            >
              {car.name}
            </TextMediumSecondary>
          </Description>
          <Rent>
            <TextMediumSecondary
              size={RFValue(10)}
              textTransform="uppercase"
              color={theme.colors.text_detail}
            >
              {car.rent.period}
            </TextMediumSecondary>
            <TextMediumSecondary size={RFValue(25)} color={theme.colors.main}>
              R$ {car.rent.price}
            </TextMediumSecondary>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((row) => (
            <Accessory
              key={row.type}
              name={row.name}
              icon={getAccessoryIcon(row.type)}
            />
          ))}
        </Accessories>
        <TextRegular color={theme.colors.text_detail} lineHeight={RFValue(25)}>
          {car.about}
        </TextRegular>
      </Content>

      <Footer>
        <Button
          title="Escolher período de aluguel"
          onPress={handleNavigateToScheduling}
        />
      </Footer>
    </Container>
  );
}
