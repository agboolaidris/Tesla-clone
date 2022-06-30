import { View, Text, ImageBackground, ImageSourcePropType } from "react-native";
import React from "react";
import { styles } from "./card-style";
import Button from "../button";
interface PROPS {
  imageURL: ImageSourcePropType;
  title: string;
  subtitle: string;
}
const Card = ({ imageURL, title, subtitle }: PROPS) => {
  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        resizeMode="cover"
        source={imageURL}
        style={styles.background}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button text="CUSTOMER ORDER" />
        <Button
          text="EXITING INVENTORY"
          type="light"
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
};

export default Card;
