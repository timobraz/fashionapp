import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ProfileIcon(props) {
  return (
    <TouchableOpacity style={styles.main}>
      <Text style={styles.text}>{props.first.charAt(0).toUpperCase() + props.last.charAt(0).toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    backgroundColor: "#658CE7",
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: "white",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "900",
    color: "#fff",
  },
});
