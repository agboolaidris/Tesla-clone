import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import Card from "./ui/card";
import cars from "./fixtures/cars";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            imageURL={item.imageURL}
            subtitle={item.subtitle}
          />
        )}
        snapToAlignment="start"
        decelerationRate="normal"
        snapToInterval={Dimensions.get("screen").height}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
