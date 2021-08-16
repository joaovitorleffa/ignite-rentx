import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { BackButton } from "../../../components/BackButton";
import { TextBold } from "../../../components/Text/TextBold";
import { PasswordInput } from "../../../components/PasswordInput";
import { TextRegular } from "../../../components/Text/TextRegular";

import {
  Container,
  Header,
  Steps,
  TextContainer,
  HeadingContainer,
  Form,
  FormTitleContainer,
  InputContainer,
} from "./styles";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { user } = route.params as Params;

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Ops", "Preencha os campos");
    }
    if (password !== passwordConfirm) {
      return Alert.alert("Ops", "As senhas não coincidem");
    }

    navigation.navigate("Confirmation", {
      title: "Conta criada!",
      message: "",
      nextRoute: "SignIn",
    });
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Header>
            <BackButton onPress={handleGoBack} />
            <Steps>
              <Bullet active />
              <Bullet />
              <Bullet />
            </Steps>
          </Header>
          <HeadingContainer>
            <TextBold size={RFValue(40)}>Crie sua{`\n`}conta</TextBold>
            <TextContainer>
              <TextRegular lineHeight={25}>
                Faça seu cadastro de{`\n`}forma rápida e fácil.
              </TextRegular>
            </TextContainer>
          </HeadingContainer>

          <Form>
            <FormTitleContainer>
              <TextBold size={RFValue(20)}>1. Dados</TextBold>
            </FormTitleContainer>
            <InputContainer>
              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
              />
            </InputContainer>
            <InputContainer>
              <PasswordInput
                iconName="lock"
                placeholder="Confirme a senha"
                autoCapitalize="none"
                autoCorrect={false}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
              />
            </InputContainer>
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
