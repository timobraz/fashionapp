import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function BottomBar() {
  return (
    <View style={styles.main}>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 15,
    alignSelf: "stretch",
    backgroundColor: "#e8e4d8",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "stretch",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "black",
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: "50%",
    borderColor: "gray",
    borderWidth: 9,
  },
});
