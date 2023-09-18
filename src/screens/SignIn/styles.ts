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

  titleContainer: {
    width: "100%",
    marginTop: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    fontSize: 38,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#c31c79",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    textAlign: "center",
  },

  textLayer: {
    color: "#fff",
    paddingLeft: 4,
  },

  description: {
    fontSize: 13,
    color: "#c8c8c8",
    margin: 0,
  },
});
