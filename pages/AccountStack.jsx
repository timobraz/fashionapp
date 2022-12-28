import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Outfit from "./Outfit";
import Account from "./Account";

const Stack = createNativeStackNavigator();
export default function AccountStack() {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Outfit" component={Outfit} />
    </Stack.Navigator>
  );
}
