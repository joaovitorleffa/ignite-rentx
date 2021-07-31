import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import { TextMedium } from "../Text/TextMedium";

import { Container } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}
export function Button({ title, color, onPress, ...rest }: ButtonProps) {
  const theme = useTheme();
  return (
    <Container color={color} onPress={onPress} {...rest}>
      <TextMedium color={theme.colors.shape}>{title}</TextMedium>
    </Container>
  );
}
