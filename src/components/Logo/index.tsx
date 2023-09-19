import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Logo() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.logo}>
        WSP<Text style={styles.textLayer}>lus!</Text>
      </Text>
      <Text style={styles.description}>
        A gestão da sua organização na palma da sua mão.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    marginVertical: 32,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "100%",
    fontSize: 36,
    marginVertical: 8,
    color: "#c31c79",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Inter_700Bold",
  },

  textLayer: {
    color: "#fff",
    paddingLeft: 4,
  },

  description: {
    fontSize: 13,
    color: "#c8c8c8",
    margin: 0,
    fontFamily: "Inter_400Regular",
  },
});
