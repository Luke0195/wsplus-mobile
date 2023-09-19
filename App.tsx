import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { useFontsHook } from "./src/hooks/fonts";
import { layoutView } from "./src/hooks/layout";
import * as SplashScreen from "expo-splash-screen";
import { Main } from "./src/components/App";
import React, { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFontsHook();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={styles.container}
      onLayout={async () => layoutView(fontsLoaded)}
    >
      <StatusBar style="light" />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },

  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
