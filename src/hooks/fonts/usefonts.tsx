import React from "react";
import { useFonts } from "expo-font";

export function useFontsHook(): boolean[] {
  let [fontsLoaded] = useFonts({
    Inter_400Regular: require("../../../assets/fonts/Inter-Regular.ttf"),
    Inter_600SemiBold: require("../../../assets/fonts/Inter-SemiBold.ttf"),
    Inter_700Bold: require("../../../assets/fonts/Inter-Bold.ttf"),
  });

  return [fontsLoaded];
}
