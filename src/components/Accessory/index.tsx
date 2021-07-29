import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";

import { TextMedium } from "../Text/TextMedium";

import { Container } from "./styles";

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

const icon_size = RFValue(32);

export function Accessory({ name, icon: Icon }: AccessoryProps) {
  const theme = useTheme();

  return (
    <Container>
      <Icon width={icon_size} height={icon_size} />
      <TextMedium color={theme.colors.text} size={RFValue(13)}>
        {name}
      </TextMedium>
    </Container>
  );
}
