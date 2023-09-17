import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SignIn } from "../../screens/SignIn";

export function Main() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
