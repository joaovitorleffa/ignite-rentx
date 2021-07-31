import React, { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CardDTO";
import LogoSvg from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import { Loading } from "../../components/Loading";
import { TextRegular } from "../../components/Text/TextRegular";

import {
  Container,
  Header,
  CardList,
  HeaderContent,
  MyCarsButton,
  Icon,
} from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAllCars() {
    try {
      const { data } = await api.get("cars");
      setCars(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops, aconteceu um erro", "Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllCars();
  }, []);

  function handleNavigateToCarDetails(item: CarDTO) {
    navigation.navigate("CarDetails", { car: item });
  }

  function handleNavigateToMyCars() {
    navigation.navigate("MyCars");
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <LogoSvg width={RFValue(108)} height={RFValue(12)} />
          <TextRegular>Total de {cars.length} carros</TextRegular>
        </HeaderContent>
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <CardList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car onPress={() => handleNavigateToCarDetails(item)} data={item} />
          )}
        />
      )}

      <MyCarsButton onPress={handleNavigateToMyCars}>
        <Icon name="ios-car-sport" />
      </MyCarsButton>
    </Container>
  );
}
