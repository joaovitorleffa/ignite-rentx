import React from "react";
import LottieView from "lottie-react-native";

import LoadingAnimatedJson from "../../assets/loading_animated.json";

import { Container } from "./styles";

export function LoadingAnimated() {
  return (
    <Container>
      <LottieView
        source={LoadingAnimatedJson}
        autoPlay
        resizeMode="contain"
        style={{ height: 120 }}
      />
    </Container>
  );
}
