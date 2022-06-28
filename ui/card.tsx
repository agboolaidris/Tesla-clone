import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Card</Text>
        <Text style={styles.subTitle}>Card</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "red",
    height: "100%",
  },
  titleWrapper: {
    marginTop: 70,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    color: "grey",
  },
});
