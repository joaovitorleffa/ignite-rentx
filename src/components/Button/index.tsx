import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import { Loading } from "../Loading";
import { TextMedium } from "../Text/TextMedium";

import { Container } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  light?: boolean;
  enabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}
export function Button({
  title,
  color,
  light,
  isLoading = false,
  enabled = true,
  onPress,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      color={color}
      onPress={onPress}
      enabled={enabled}
      isLoading={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loading color={theme.colors.heading} />
      ) : (
        <TextMedium color={light ? theme.colors.title : theme.colors.shape}>
          {title}
        </TextMedium>
      )}
    </Container>
  );
}
