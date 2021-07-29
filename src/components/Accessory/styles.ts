import { Dimensions } from "react-native";
import styled from "styled-components/native";

const width = Dimensions.get("window").width / 3 - 24;

export const Container = styled.View`
  width: ${width}px;
  height: ${width / 1.1}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  margin-bottom: 8px;
`;
