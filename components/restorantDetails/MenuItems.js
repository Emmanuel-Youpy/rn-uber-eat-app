import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";



export default function MenuItems({ restaurantName, hideCheckbox, foods, marginLeft }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <View style={styles.container}>
      <ScrollView>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItem}>
              {hideCheckbox ? (<></>) : (<BouncyCheckbox
                iconStyle={{ boderColor: "lightgray", boderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />)}
              {<FoodInfo food={food} />}
              {<FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />}
            </View>
            <Divider width={0.5} orientation="vertical" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 190, justifyContent: "space-evenly" }}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image source={{ uri: props.food.image }} style={{
      width: 100,
      height: 100,
      borderRadius: 8,
      marginLeft: marginLeft,
    }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  img: {

  },
});
