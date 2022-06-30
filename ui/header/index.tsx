import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../../assets/images/menu.png")}
        style={styles.menu}
      />
    </View>
  );
};

export default Header;
