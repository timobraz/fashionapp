import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Feed from "./pages/Feed";
import ExploreStack from "./pages/ExploreStack";
import AccountStack from "./pages/AccountStack";
import Register from "./pages/Register";
const Tab = createBottomTabNavigator();

export default function NormalTab() {
  return (
    <Tab.Navigator
      initialRouteName="ExploreStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "ExploreStack") {
            iconName = "search";
          }
          if (route.name === "AccountStack") {
            iconName = "user";
          }
          if (route.name === "FeedStack") {
            iconName = "buffer";
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarInactiveBackgroundColor: "#e8e4d8",
        tabBarActiveTintColor: "black",
        tabBarActiveBackgroundColor: "#C5BA9B",

        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="FeedStack" component={Feed} />
      <Tab.Screen name="ExploreStack" component={ExploreStack} />
      <Tab.Screen name="AccountStack" component={AccountStack} />
    </Tab.Navigator>
  );
}
