import React from "react";
import { useTheme } from "styled-components";
import { useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import DoneSvg from "../../assets/done.svg";
import LogoBackgroundSvg from "../../assets/logo_background_gray.svg";
import { TextRegular } from "../../components/Text/TextRegular";
import { ConfirmButton } from "../../components/ConfirmButton";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";

import { Container, Content, Wrapper, Footer } from "./styles";

interface Params {
  title: string;
  message: string;
  nextRoute: string;
}

export function Confirmation() {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const { title, message, nextRoute } = route.params as Params;

  function handleNavigationToHomeScreen() {
    navigation.navigate(nextRoute);
  }

  return (
    <Container>
      <LogoBackgroundSvg width={width} height={width} />

      <Content>
        <DoneSvg />
        <Wrapper>
          <TextMediumSecondary color={theme.colors.heading} size={RFValue(30)}>
            {title}
          </TextMediumSecondary>
          <TextRegular
            color={theme.colors.text_detail}
            lineHeight={RFValue(25)}
            textAlign="center"
          >
            {message}
          </TextRegular>
        </Wrapper>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" onPress={handleNavigationToHomeScreen} />
      </Footer>
    </Container>
  );
}
