import React from "react";
import { useTheme } from "styled-components";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import DoneSvg from "../../assets/done.svg";
import LogoBackgroundSvg from "../../assets/logo_background_gray.svg";
import { TextRegular } from "../../components/Text/TextRegular";
import { ConfirmButton } from "../../components/ConfirmButton";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";

import { Container, Content, Wrapper, Footer } from "./styles";

export function SchedulingComplete() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  function handleNavigationToHomeScreen() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <LogoBackgroundSvg width={width} height={width} />

      <Content>
        <DoneSvg />
        <Wrapper>
          <TextMediumSecondary color={theme.colors.heading} size={RFValue(30)}>
            Carro Alugado!
          </TextMediumSecondary>
          <TextRegular
            color={theme.colors.text_detail}
            lineHeight={RFValue(25)}
            textAlign="center"
          >
            Agora você só precisa ir{"\n"}até a concessionária da RENTX{"\n"}
            pegar o seu automóvel.
          </TextRegular>
        </Wrapper>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" onPress={handleNavigationToHomeScreen} />
      </Footer>
    </Container>
  );
}
