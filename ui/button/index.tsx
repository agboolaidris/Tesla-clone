import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./button-style";
interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ text, style }: Props) => {
  return (
    <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }}>
      <View style={[styles.buttonWrapper, style]}>
        <Text>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
