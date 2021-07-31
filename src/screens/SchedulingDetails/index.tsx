import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/core";

import { CarDTO } from "../../dtos/CardDTO";
import { formatDateToPtBR } from "../../utils/formatDate";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { TextMedium } from "../../components/Text/TextMedium";
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
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  RentalQuota,
  RentalPrice,
} from "./styles";
import { Alert } from "react-native";
import api from "../../services/api";

interface RouteProps {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { car, dates } = route.params as RouteProps;

  const rentTotal = dates.length * car.rent.price;

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const [isLoading, setIsLoading] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleConfirmRentalBuy() {
    try {
      setIsLoading(true);
      const schedulesByCar = await fetchAllSchedulesByCar();

      const unavailable_dates = {
        ...schedulesByCar.unavailable_dates,
        ...dates,
      };

      await createScheduleByUser();

      await updateSchedulesByCar(unavailable_dates);
    } catch (error) {
      console.log("confirm rental buy error", error);
      Alert.alert("Erro ao confirmar o aluguel do carro");
      setIsLoading(false);
    }

    navigation.navigate("SchedulingComplete");
  }

  async function fetchAllSchedulesByCar() {
    try {
      const { data } = await api.get(`/schedules_bycars/${car.id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async function createScheduleByUser() {
    try {
      await api.post("/schedules_byuser", {
        user_id: "1",
        car,
        startDate: formatDateToPtBR(dates[0]),
        endDate: formatDateToPtBR(dates[dates.length - 1]),
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function updateSchedulesByCar(unavailable_dates: string[]) {
    try {
      await api.patch(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    setRentalPeriod({
      start: formatDateToPtBR(dates[0]),
      end: formatDateToPtBR(dates[dates.length - 1]),
    });
  }, []);

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
            <TextMedium color={theme.colors.title}>
              {rentalPeriod.start}
            </TextMedium>
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
            <TextMedium color={theme.colors.title}>
              {rentalPeriod.end}
            </TextMedium>
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
              {`R$ ${car.rent.price} x${dates.length} diárias`}
            </TextMedium>
            <TextMediumSecondary
              size={RFValue(24)}
              color={theme.colors.success}
            >
              R$ {rentTotal}
            </TextMediumSecondary>
          </RentalPrice>
        </RentalQuota>
      </Content>

      <Footer>
        <Button
          title="Alugar Agora"
          enabled={!isLoading}
          isLoading={isLoading}
          color={theme.colors.success}
          onPress={handleConfirmRentalBuy}
        />
      </Footer>
    </Container>
  );
}
