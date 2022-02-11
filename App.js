import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import RootNavigation from "./Navigation";

export default function App() {
  return <RootNavigation />;
}
