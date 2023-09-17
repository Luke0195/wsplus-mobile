import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Main } from "./src/components/App";
import React from "react";

export default function App() {
  //@ts-ignore
  let { fontsLoaded, fontError } = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {fontsLoaded && !fontError ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <Main />
      )}
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
});
