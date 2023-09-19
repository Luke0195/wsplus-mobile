import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#262626",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  form: {
    marginTop: 42,
    flexDirection: "column",
    alignItems: "center",
    width: 380,
  },

  formLabelText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 8,
  },

  formField: {
    width: 320,
    marginVertical: 16,
    borderColor: "#c8c8c8",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
  },

  inputStyle: {
    paddingLeft: 8,
  },

  btn: {
    marginVertical: 8,
    width: 320,
    height: 52,
    backgroundColor: "#c31c79",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  bntText: {
    color: "#fff",
    fontSize: 18,
  },
});
