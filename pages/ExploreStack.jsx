import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./Explore";
import Outfit from "./Outfit";
import { AntDesign, Feather, Octicons, Entypo } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function ExploreStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Exlore">
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          header: () => (
            <View style={styles.main1}>
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Octicons name="diff-added" size={35} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Outfit"
        component={Outfit}
        options={{
          header: () => (
            <View style={styles.main}>
              <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
                <Entypo name="back" size={35} color="black" />
              </TouchableOpacity>
              <View style={styles.right}>
                <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
                  <Feather name="flag" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                  <AntDesign name="tagso" size={35} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e8e4d8",
    paddingBottom: 7,
    paddingHorizontal: 20,
    borderBottomColor: "#C5BA9B",
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
  main1: {
    backgroundColor: "#e8e4d8",
    paddingBottom: 7,
    paddingHorizontal: 20,
    borderBottomColor: "#C5BA9B",
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 50,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 90,
  },
});
