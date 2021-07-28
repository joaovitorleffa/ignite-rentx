import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container, Icon } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Icon name="chevron-left" color={color ?? theme.colors.text} />
    </Container>
  );
}
