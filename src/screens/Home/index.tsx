import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import { TextRegular } from "../../components/Text/TextRegular";

import { Container, Header, CardList, HeaderContent, Total } from "./styles";

export function Home() {
  const navigation = useNavigation();

  const cars = [
    {
      thumbnail: "https://cdn.picpng.com/audi/audi-face-28582.png",
      brand: "audi",
      name: "RS 5 Coupé",
      rent: {
        period: "ao dia",
        price: 120,
      },
    },
    {
      thumbnail: "https://cdn.picpng.com/audi/audi-face-28582.png",
      brand: "audi",
      name: "RS 5 Coupé",
      rent: {
        period: "ao dia",
        price: 120,
      },
    },
  ];

  function handlePressCardCar() {
    navigation.navigate("Scheduling");
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
          <TextRegular>teste</TextRegular>
        </HeaderContent>
      </Header>

      <CardList
        data={cars}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Car onPress={handlePressCardCar} data={item} />
        )}
      />
    </Container>
  );
}
