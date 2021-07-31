import React from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { TextMedium } from "../../components/Text/TextMedium";
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
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  RentalQuota,
  RentalPrice,
} from "./styles";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRentalBuy() {
    navigation.navigate("SchedulingComplete");
  }

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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              color={theme.colors.heading}
              size={RFValue(20)}
              name="calendar"
            />
          </CalendarIcon>
          <DateInfo>
            <TextMediumSecondary
              textTransform="uppercase"
              size={RFValue(10)}
              color={theme.colors.text_detail}
            >
              De
            </TextMediumSecondary>
            <TextMedium color={theme.colors.title}>18/06/2021</TextMedium>
          </DateInfo>
          <Feather
            color={theme.colors.heading}
            size={RFValue(10)}
            name="chevron-right"
          />
          <DateInfo>
            <TextMediumSecondary
              textTransform="uppercase"
              size={RFValue(10)}
              color={theme.colors.text_detail}
            >
              Até
            </TextMediumSecondary>
            <TextMedium color={theme.colors.title}>18/06/2021</TextMedium>
          </DateInfo>
        </RentalPeriod>
        <RentalQuota>
          <TextMediumSecondary
            textTransform="uppercase"
            size={RFValue(10)}
            color={theme.colors.text_detail}
          >
            Total
          </TextMediumSecondary>
          <RentalPrice>
            <TextMedium color={theme.colors.title}>
              R$ 580 x3 diárias
            </TextMedium>
            <TextMediumSecondary
              size={RFValue(24)}
              color={theme.colors.success}
            >
              R$2.900
            </TextMediumSecondary>
          </RentalPrice>
        </RentalQuota>
      </Content>

      <Footer>
        <Button
          title="Alugar Agora"
          color={theme.colors.success}
          onPress={handleConfirmRentalBuy}
        />
      </Footer>
    </Container>
  );
}
