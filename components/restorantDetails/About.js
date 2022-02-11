import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(".");

  const description = `${formattedCategories} ${
    price ? "." + price : ""
  } .  🎫  .${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={styles.img} />
);

const RestaurantName = ({ name }) => <Text style={styles.title}>{name}</Text>;

const RestaurantDescription = ({ description }) => (
  <Text style={styles.description}>{description}</Text>
);

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontSize: 15,
    fontWeight: "400",
  },
});
