import React from "react";
import { TextStyleProps } from "../../types/styles.types";

import { Text } from "./styles";

interface TextRegularSecondaryProps extends TextStyleProps {
  children: React.ReactNode;
}

export function TextRegularSecondary({
  children,
  ...rest
}: TextRegularSecondaryProps) {
  return <Text {...rest}>{children}</Text>;
}
