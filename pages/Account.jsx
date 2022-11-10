import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import OutfitPreview from "../components/OutfitPreview";

export default function Account() {
  return (
    <View style={styles.main}>
      <View style={styles.wrapper}>
        <Text style={styles.name}>Timofey Obraztsov</Text>
        <Text style={styles.username}>@tim.obr</Text>
      </View>
      <View style={styles.pfp}>
        <Text style={styles.text}>TO</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.slot}>
          <Text style={styles.label}>Fits</Text>
          <Text style={styles.value}>3</Text>
        </View>
        <View style={styles.slot}>
          <Text style={styles.label}>Likes</Text>
          <Text style={styles.value}>50</Text>
        </View>
      </View>
      <Text style={styles.mostp}>Most Popular</Text>
      <View style={styles.outfits}>
        <OutfitPreview src="https://i.pinimg.com/564x/b1/55/a9/b155a9a6cdefe1a8722803c11612e3c0.jpg" date="11/9/2022" />
        <OutfitPreview src="https://i.pinimg.com/564x/14/6b/1a/146b1a115a770b6beccf853fd79233ae.jpg" date="11/6/2022" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 15,
    flex: 1,
    backgroundColor: "#D7CDB7",
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pfp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    backgroundColor: "#658CE7",
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "white",
    marginVertical: 20,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "900",
    color: "#fff",
  },
  name: {
    fontSize: 25,
    fontWeight: "800",
    color: "#303030",
  },
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#e8e4d8",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    marginTop: 7,
    fontSize: 21,
    fontWeight: "500",
  },
  bottom: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#e8e4d8",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  slot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  label: {
    fontSize: 25,
    fontWeight: "900",
  },
  value: {
    fontSize: 23,
    fontWeight: "600",
  },
  mostp: {
    fontSize: 25,
    fontWeight: "800",
    alignSelf: "flex-start",
    marginHorizontal: 7,
    marginTop: 10,
  },
  outfits: {
    padding: 7,
    flex: 1,
    backgroundColor: "#D7CDB7",
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
