import React from "react";

import LogoBackgroundSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Wrapper, Footer } from "./styles";
import { useWindowDimensions } from "react-native";
import { TextMediumSecondary } from "../../components/Text/TextMediumSecondary";

import { useTheme } from "styled-components";
import { TextRegular } from "../../components/Text/TextRegular";
import { RFValue } from "react-native-responsive-fontsize";
import { ConfirmButton } from "../../components/ConfirmButton";

export function SchedulingComplete() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
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
        <ConfirmButton title="Ok" onPress={() => {}} />
      </Footer>
    </Container>
  );
}
