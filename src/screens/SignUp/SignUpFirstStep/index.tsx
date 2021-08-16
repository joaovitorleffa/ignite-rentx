import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";

import { Input } from "../../../components/Input";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { BackButton } from "../../../components/BackButton";
import { TextBold } from "../../../components/Text/TextBold";
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

export function SignUpFirstStep() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("Preencha a CNH"),
        email: Yup.string()
          .required("Preencha o e-mail")
          .email("E-mail inválido"),
        name: Yup.string().required("Preencha o nome"),
      });
      const data = { name, email, driverLicense };
      await schema.validate(data);
      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Ops", error.message);
      }
    }
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
              <Input
                iconName="user"
                placeholder="Nome"
                value={name}
                onChangeText={setName}
              />
            </InputContainer>
            <InputContainer>
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
            </InputContainer>
            <InputContainer>
              <Input
                iconName="credit-card"
                placeholder="CNH"
                keyboardType="numeric"
                value={driverLicense}
                onChangeText={setDriverLicense}
              />
            </InputContainer>
          </Form>

          <Button title="Próximo" onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
