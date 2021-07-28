import React from "react";
import { TextStyleProps } from "../../types/styles.types";

import { Text } from "./styles";

type TextRegularProps = TextStyleProps & {
  children: React.ReactNode;
};

export function TextRegular({ children, ...rest }: TextRegularProps) {
  return <Text {...rest}>{children}</Text>;
}
