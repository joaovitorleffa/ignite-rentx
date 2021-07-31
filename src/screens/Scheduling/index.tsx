import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { BackButton } from "../../components/BackButton";
import { TextBold } from "../../components/Text/TextBold";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  DateInfo,
  RentalPeriod,
  DateValue,
  Wrapper,
  TitleContent,
  Content,
  Footer,
} from "./styles";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          color={theme.colors.background_secondary}
          onPress={() => {}}
        />
        <TitleContent>
          <TextBold
            color={theme.colors.heading}
            size={RFValue(30)}
            lineHeight={RFValue(34)}
          >
            Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
          </TextBold>
        </TitleContent>

        <RentalPeriod>
          <DateInfo>
            <TextMediumSecondary
              textTransform="uppercase"
              color={theme.colors.text}
              size={RFValue(10)}
            >
              De
            </TextMediumSecondary>

            <Wrapper>
              <DateValue>teste</DateValue>
            </Wrapper>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <TextMediumSecondary
              textTransform="uppercase"
              color={theme.colors.text}
              size={RFValue(10)}
            >
              Até
            </TextMediumSecondary>
            <Wrapper selected={true}>
              <DateValue>teste</DateValue>
            </Wrapper>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
        <Footer>
          <Button title="Confirmar" onPress={handleConfirmRental} />
        </Footer>
      </Content>
    </Container>
  );
}
