import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Alert, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/core";

import { CarDTO } from "../../dtos/CardDTO";
import { formatDateToPtBR } from "../../utils/formatDate";

import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { TextBold } from "../../components/Text/TextBold";
import { Calendar, DayProps, MarkedDateProps } from "../../components/Calendar";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";
import { getIntervalBetweenDates } from "../../components/Calendar/generateInterval";

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

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

interface RouteProps {
  car: CarDTO;
}

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { car } = route.params as RouteProps;

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  function handleConfirmRental() {
    if (isEmptyRentalPeriod())
      return Alert.alert("Selecione a data para continuar");

    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  }

  function isEmptyRentalPeriod() {
    return !rentalPeriod.end || !rentalPeriod.start;
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleDayChange(date: DayProps) {
    let start = getStartDate(date);
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = getIntervalBetweenDates(start, end);
    setMarkedDates(interval);
    appendRentalPeriod(interval, start, end);
  }

  function getStartDate(date: DayProps) {
    return !lastSelectedDate.timestamp ? date : lastSelectedDate;
  }

  function appendRentalPeriod(
    interval: MarkedDateProps,
    start: DayProps,
    end: DayProps
  ) {
    const intervalKeys = getIntervalKeys(interval);
    const firstDate = intervalKeys[0];
    const endDate = intervalKeys[intervalKeys.length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: formatDateToPtBR(firstDate),
      endFormatted: formatDateToPtBR(endDate),
    });
  }

  function getIntervalKeys(interval: MarkedDateProps) {
    return Object.keys(interval);
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
          onPress={handleGoBack}
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

            <Wrapper selected={!!rentalPeriod.start}>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
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
            <Wrapper selected={!!rentalPeriod.end}>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </Wrapper>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleDayChange} />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          enabled={!!rentalPeriod.start || !!rentalPeriod.end}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
