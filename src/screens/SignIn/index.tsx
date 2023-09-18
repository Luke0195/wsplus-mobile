import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.logo}>
          WS<Text style={styles.textLayer}>Plus!</Text>
        </Text>
        <Text style={styles.description}>
          A gestão da sua organização na palma da sua mão.
        </Text>
      </View>
    </View>
  );
}
