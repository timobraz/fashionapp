import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import { AntDesign, Feather, Octicons, Entypo, Ionicons } from "@expo/vector-icons";
import UploadImage from "./UploadImage";
import Outfit from "./Outfit";
import Account from "./Account";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();
export default function AccountStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          header: () => (
            <View style={styles.main1}>
              <View style={styles.right}>
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Octicons name="diff-added" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                  <AntDesign name="setting" size={35} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Create"
        component={UploadImage}
        options={{
          header: () => (
            <View style={styles.main}>
              <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                <Entypo name="back" size={35} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          header: () => (
            <View style={styles.main}>
              <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                <Entypo name="back" size={35} color="black" />
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
              <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                <Ionicons name="md-close-outline" size={35} color="black" />
              </TouchableOpacity>
              <View style={styles.right}>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())}>
                  <Feather name="flag" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())}>
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

{
}
