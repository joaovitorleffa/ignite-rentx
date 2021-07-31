import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CardDTO";

import {
  Container,
  Header,
  TitleContent,
  Content,
  Appointments,
  CarWrapper,
  CarFooter,
  CarFooterPeriod,
  Icon,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { BackButton } from "../../components/BackButton";
import { TextBold } from "../../components/Text/TextBold";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/core";
import { TextRegularSecondary } from "../../components/Text/TextRegularSecondary";
import { TextRegular } from "../../components/Text/TextRegular";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";
import { Car } from "../../components/Car";
import { Loading } from "../../components/Loading";

interface CarProps {
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
  car: CarDTO;
}

export function MyCars() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchAllCarsByUser() {
    try {
      const { data } = await api.get("/schedules_byuser?user_id=1");
      setCars(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao carregas os carros");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllCarsByUser();
  }, []);

  return (
    <Container>
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
        <TextRegularSecondary color={theme.colors.heading}>
          Conforto, segurança e praticidade.
        </TextRegularSecondary>
      </Header>
      <Content>
        <Appointments>
          <TextRegular>Agendamentos feitos</TextRegular>
          <TextMediumSecondary color={theme.colors.header}>
            {cars.length}
          </TextMediumSecondary>
        </Appointments>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car onPress={() => {}} data={item.car} />
                <CarFooter>
                  <TextMediumSecondary
                    color={theme.colors.text_detail}
                    size={RFValue(10)}
                    textTransform="uppercase"
                  >
                    Período
                  </TextMediumSecondary>
                  <CarFooterPeriod>
                    <TextRegular size={RFValue(13)}>
                      {item.startDate}
                    </TextRegular>
                    <Icon name="arrowright" />
                    <TextRegular size={RFValue(13)}>{item.endDate}</TextRegular>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        )}
      </Content>
    </Container>
  );
}
