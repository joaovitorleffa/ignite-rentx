import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextBold } from "../../components/Text/TextBold";
import { PasswordInput } from "../../components/PasswordInput";
import { TextRegular } from "../../components/Text/TextRegular";

import {
  Container,
  Header,
  TextContainer,
  Form,
  PasswordInputContainer,
  Footer,
  ButtonContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/core";

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Preencha o e-mail")
          .email("E-mail inválido"),
        password: Yup.string().required("Preencha a senha"),
      });

      await schema.validate({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Ops", error.message);
      }
      Alert.alert("Ops", "Usuário ou senha inválidos!");
    }
  }

  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <TextBold size={RFValue(40)}>Estamos{`\n`}quase lá.</TextBold>
            <TextContainer>
              <TextRegular lineHeight={25}>
                Faça seu login para começar{`\n`}uma experiência incrível.
              </TextRegular>
            </TextContainer>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <PasswordInputContainer>
              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                autoCapitalize="none"
              />
            </PasswordInputContainer>
          </Form>

          <Footer>
            <Button title="Login" onPress={handleSignIn} isLoading={false} />
            <ButtonContainer>
              <Button
                light
                color={theme.colors.background_secondary}
                title="Criar conta gratuita"
                onPress={handleNewAccount}
              />
            </ButtonContainer>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
