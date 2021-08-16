import { Dimensions } from "react-native";
import styled from "styled-components/native";

const width = Dimensions.get("window").width;

export const Container = styled.View``;

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 24px;
`;

export const CardImageWrapper = styled.View`
  width: ${width}px;
  height: 132px;

  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.Image`
  width: 280px;
  height: 132px;
`;
