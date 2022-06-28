import { StyleSheet, Text, View } from "react-native";
import Card from "./ui/card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
