import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

const items = [
  {
    image: require("../assets/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop Start */}
        {items.map((item, index) => (
          <View key={index} style={styles.subcontainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.txt}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  txt: {
    fontSize: 13,
    fontWeight: "bold",
  },
  subcontainer: {
    alignItems: "center",
    marginRight: 30,
  },
});
