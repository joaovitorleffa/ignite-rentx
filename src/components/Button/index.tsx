import React from "react";
import { useTheme } from "styled-components";
import { TextMedium } from "../Text/TextMedium";

import { Container } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}
export function Button({ title, color, ...rest }: ButtonProps) {
  const theme = useTheme();
  return (
    <Container color={color}>
      <TextMedium color={theme.colors.shape}>{title}</TextMedium>
    </Container>
  );
}
