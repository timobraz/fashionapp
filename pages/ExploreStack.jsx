import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./Explore";
import Outfit from "./Outfit";

const Stack = createNativeStackNavigator();
export default function ExploreStack() {
  return (
    <Stack.Navigator initialRouteName="Exlore">
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Outfit" component={Outfit} />
    </Stack.Navigator>
  );
}
