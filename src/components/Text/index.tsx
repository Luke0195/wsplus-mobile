import React from "react";
import { Text as ReactNativeText } from "react-native";
import { TextProps } from "./interfaces";

export function Text(props: TextProps) {
  return <ReactNativeText {...props} />;
}
