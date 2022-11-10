import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function OutfitPreview(props) {
  console.log(props.src);
  return (
    <View style={styles.main}>
      <Image source={{ uri: props.src }} style={styles.pic}></Image>
      <View style={styles.wrapper}>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#979081",
    shadowColor: "#979081",
    shadowOpacity: 0.8,
    shadowOffset: { height: 3, width: 4 },
    shadowRadius: 1,
    borderRadius: 20,
    marginVertical: 5,
  },
  pic: {
    height: 165,
    width: 165,
    resizeMode: "cover",
    borderRadius: 20,
  },
  date: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    zIndex: 100,
  },
  wrapper: {
    margin: 5,
    position: "absolute",
    paddingVertical: 2,
    paddingHorizontal: 6,
    bottom: 0,
    backgroundColor: "#979081",
    borderRadius: 10,
  },
});
