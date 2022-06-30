import { StyleSheet, Text, View } from "react-native";
import Card from "./ui/card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        imageURL={require("./assets/images/ModelS.jpeg")}
        subtitle="Starting at $69,420"
        title="ModelS"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
