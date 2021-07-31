import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

interface LoadingProps {
  color?: string;
}
export function Loading({ color }: LoadingProps) {
  const theme = useTheme();
  return <ActivityIndicator color={color ?? theme.colors.main} />;
}
