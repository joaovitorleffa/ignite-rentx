import React from "react";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/core";
import { StatusBar, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

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
  Details,
  Description,
  Rent,
  Accessories,
  Footer,
} from "./styles";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface RouteProps {
  car: CarDTO;
}

export function CarDetails() {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { car } = route.params as RouteProps;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const slideCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0]),
    };
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  function handleNavigateToScheduling() {
    navigation.navigate("Scheduling", { car });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>

        <Animated.View style={slideCarsStyleAnimation}>
          <CardImages>
            <ImageSlider images={car.photos} />
          </CardImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          padding: 24,
          paddingTop: getStatusBarHeight() + 200,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
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
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Escolher período de aluguel"
          onPress={handleNavigateToScheduling}
        />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
  back: {
    marginTop: 24,
  },
});
