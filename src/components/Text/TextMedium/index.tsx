import React from "react";
import { TextStyleProps } from "../../types/styles.types";

import { Text } from "./styles";

interface TextMediumProps extends TextStyleProps {
  children: React.ReactNode;
}

export function TextMedium({ children, ...rest }: TextMediumProps) {
  return <Text {...rest}>{children}</Text>;
}
