import React, { useEffect, useState } from "react";
import { Alert, BackHandler, StatusBar, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CardDTO";

import LogoSvg from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import { Loading } from "../../components/Loading";
import { TextRegular } from "../../components/Text/TextRegular";

import { Container, Header, CardList, HeaderContent, Icon } from "./styles";
import { LoadingAnimated } from "../../components/LoadingAnimated";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, context: any) {
      positionX.value = context.positionX + event.translationX;
      positionY.value = context.positionY + event.translationY;
    },
    onEnd(event) {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

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

  function handleNavigateToCarDetails(item: CarDTO) {
    navigation.navigate("CarDetails", { car: item });
  }

  function handleNavigateToMyCars() {
    navigation.navigate("MyCars");
  }

  function handlePreventBackButton() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }

  useEffect(() => {
    fetchAllCars();
  }, []);

  useEffect(() => {
    handlePreventBackButton();
  }, []);

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
          {!isLoading && (
            <TextRegular>Total de {cars.length} carros</TextRegular>
          )}
        </HeaderContent>
      </Header>

      {isLoading ? (
        <LoadingAnimated />
      ) : (
        <CardList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car onPress={() => handleNavigateToCarDetails(item)} data={item} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarButtonStyle,

            {
              position: "absolute",
              right: 22,
              bottom: RFValue(13),
            },
          ]}
        >
          <ButtonAnimated
            onPress={handleNavigateToMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Icon name="ios-car-sport" />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),
    alignItems: "center",
    justifyContent: "center",
  },
});
