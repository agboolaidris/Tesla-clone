import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    top: 35,
    zIndex: 50,
    elevation: 50,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  menu: {
    width: 30,
    height: 40,
    resizeMode: "contain",
  },
});
