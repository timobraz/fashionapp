import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View style={styles.main}>
      <ProfileIcon first="T" last="O"></ProfileIcon>
      <View style={styles.right}>
        <FontAwesome5 name="search" size={35} color="black" />
        <AntDesign name="setting" size={35} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignSelf: "stretch",
    backgroundColor: "#e8e4d8",
    paddingBottom: 10,
    paddingTop: 45,
    paddingHorizontal: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 80,
  },
});
