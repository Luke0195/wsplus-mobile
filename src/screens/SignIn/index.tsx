import React from "react";
import { Logo } from "../../components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Logo />
        <Text style={styles.formLabelText}> Faça o seu Login </Text>
        <View style={styles.formField}>
          <Feather name="mail" color="#c8c8c8" size={18} />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={"#c8c8c8"}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.formField}>
          <Feather name="lock" color="#c8c8c8" size={18} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor={"#c8c8c8"}
            style={styles.inputStyle}
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.bntText}> Entrar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
