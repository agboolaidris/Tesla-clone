import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    height: Dimensions.get("screen").height,
    justifyContent: "space-between",
  },
  titleWrapper: {
    marginTop: 90,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    color: "#171a20",
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  buttonWrapper: {
    paddingHorizontal: 5,
    marginBottom: 70,
  },
});
