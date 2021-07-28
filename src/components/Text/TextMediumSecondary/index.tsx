import React from "react";
import { TextStyleProps } from "../../types/styles.types";

import { Text } from "./styles";

interface TextMediumSecondaryProps extends TextStyleProps {
  children: React.ReactNode;
}
export function TextMediumSecondary({
  children,
  ...rest
}: TextMediumSecondaryProps) {
  return <Text {...rest}>{children}</Text>;
}
