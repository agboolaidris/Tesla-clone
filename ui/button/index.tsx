import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./button-style";
interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  type?: "light" | "dark";
}

const Button = ({ text, style, type }: Props) => {
  const backgroundColor = type === "light" ? "white" : "black";
  const color = type === "light" ? "black" : "white";

  return (
    <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }}>
      <View style={[styles.buttonWrapper, style, { backgroundColor }]}>
        <Text style={{ color }}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
