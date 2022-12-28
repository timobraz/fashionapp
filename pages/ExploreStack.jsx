import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./Explore";
import Outfit from "./Outfit";
import { AntDesign, Feather, Octicons, Entypo } from "@expo/vector-icons";
import { useNavigation, StackActions } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function ExploreStack({}) {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Exlore">
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          header: () => (
            <View style={styles.main1}>
              <Octicons name="diff-added" size={35} color="black" />
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
              <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())}>
                <Entypo name="back" size={35} color="black" />
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
// options={({ route }) => ({ title: route.params.src })}
//  headerStyle: {
//           backgroundColor: "#e8e4d8",
//           borderBottomColor: "#949460",
//           borderBottomWidth: 2,
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//         },
//         headerTintColor: "black",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e8e4d8",
    paddingBottom: 7,
    paddingHorizontal: 20,
    borderBottomColor: "#949460",
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
    borderBottomColor: "#949460",
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
    // backgroundColor: "red",
  },
});
