import React from "react";
import { TextStyleProps } from "../../types/styles.types";

import { Text } from "./styles";

interface TextBoldProps extends TextStyleProps {
  children: React.ReactNode;
}

export function TextBold({ children, ...rest }: TextBoldProps) {
  return <Text {...rest}>{children}</Text>;
}
