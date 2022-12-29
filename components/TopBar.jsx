import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import { FontAwesome5, AntDesign, Octicons, Ionicons } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View style={styles.main}>
      <FontAwesome5 name="search" size={35} color="black" />
      {/* <ProfileIcon first="T" last="O"></ProfileIcon> */}
      <View style={styles.right}>
        <Octicons name="diff-added" size={35} color="black" />
        <AntDesign name="setting" size={35} color="black" />
      </View>
    </View>
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
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 90,
    // backgroundColor: "red",
  },
});
