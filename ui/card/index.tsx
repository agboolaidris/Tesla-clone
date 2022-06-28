import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./card-style";
import Button from "../button";

const Card = () => {
  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/ModelY.jpeg")}
        style={styles.background}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Card</Text>
        <Text style={styles.subTitle}>Card-----111</Text>
      </View>
      <View>
        <Button text="Order" />
        <Button
          text="Explore"
          style={{ marginTop: 10, backgroundColor: "blue" }}
        />
      </View>
    </View>
  );
};

export default Card;
