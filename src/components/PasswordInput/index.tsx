import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  ChangePasswordVisibilityButton,
  Container,
  IconContainer,
  InputText,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const theme = useTheme();

  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleChangePasswordVisibility() {
    setIsVisible((prev) => !prev);
  }

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={RFValue(24)}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        secureTextEntry={!isVisible}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
      <ChangePasswordVisibilityButton onPress={handleChangePasswordVisibility}>
        <IconContainer isFocused={isFocused} noHaveMargin>
          <Feather
            name={isVisible ? "eye" : "eye-off"}
            size={RFValue(24)}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </ChangePasswordVisibilityButton>
    </Container>
  );
}
