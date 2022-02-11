import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restorantDetails/MenuItems.js";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      }, {
        title: "Tandoori Chicken",
        description:
          "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
      },
      {
        title: "Chilaquiles",
        description:
          "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
          "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
      },

    ]
  })
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image source={require('../check-mark-verifiedd.gif')}
          style={{ height: 200, width: 200, alignSelf: "center", marginBottom: 30 }} />
        {/* <Image source={require('../isokcheck.jpg')}
          style={{ height: 200, width: 200, alignSelf: "center", marginBottom: 30 }} /> */}

        {/* <LottieView
          style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
          source={require("../check-mark.json")}
          autoPlay
          spedd={0.5}
          loop={false}

        /> */}

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your order at {restaurantName}has been placed for ${total}</Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
            source={require("../92236-cooking.json")}
            autoPlay
            spedd={0.5}
            loop={false}

          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'white'
  },
});
