import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { TextRegular } from "../../components/Text/TextRegular";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

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
import { Button } from "../../components/Button";

export function CarDetails() {
  const theme = useTheme();

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

      <Content>
        <Details>
          <Description>
            <TextMediumSecondary
              size={RFValue(10)}
              textTransform="uppercase"
              color={theme.colors.text_detail}
            >
              Lamborghini
            </TextMediumSecondary>
            <TextMediumSecondary
              size={RFValue(25)}
              textTransform="capitalize"
              color={theme.colors.title}
            >
              Huracan
            </TextMediumSecondary>
          </Description>
          <Rent>
            <TextMediumSecondary
              size={RFValue(10)}
              textTransform="uppercase"
              color={theme.colors.text_detail}
            >
              ao dia
            </TextMediumSecondary>
            <TextMediumSecondary size={RFValue(25)} color={theme.colors.main}>
              R$ 580
            </TextMediumSecondary>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380 km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>
        <TextRegular color={theme.colors.text_detail} lineHeight={RFValue(25)}>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </TextRegular>
      </Content>

      <Footer>
        <Button title="confirmar" onPress={() => {}} />
      </Footer>
    </Container>
  );
}
