import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { TextMedium } from "../Text/TextMedium";

import { Container } from "./styles";

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function ConfirmButton({ title, onPress, ...rest }: ConfirmButtonProps) {
  const theme = useTheme();
  return (
    <Container onPress={onPress} {...rest}>
      <TextMedium color={theme.colors.heading}>{title}</TextMedium>
    </Container>
  );
}
