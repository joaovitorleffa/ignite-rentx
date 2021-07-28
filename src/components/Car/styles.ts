import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(126)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const ImageCar = styled.Image`
  width: 160px;
  height: 92px;
`;
