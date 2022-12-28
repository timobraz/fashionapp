import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
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
        <View style={styles.slot}>
          <Text style={styles.label}>Followers</Text>
          <Text style={styles.value}>50</Text>
        </View>
      </View>
      <Text style={styles.mostp}>Recent</Text>
      <ScrollView contentContainerStyle={styles.outfits}>
        <OutfitPreview src="https://i.pinimg.com/564x/b1/55/a9/b155a9a6cdefe1a8722803c11612e3c0.jpg" date="11/9/2022" />
        <OutfitPreview src="https://i.pinimg.com/564x/14/6b/1a/146b1a115a770b6beccf853fd79233ae.jpg" date="11/6/2022" />
        <OutfitPreview src="https://i.pinimg.com/564x/b1/55/a9/b155a9a6cdefe1a8722803c11612e3c0.jpg" date="11/9/2022" />
        <OutfitPreview src="https://i.pinimg.com/564x/14/6b/1a/146b1a115a770b6beccf853fd79233ae.jpg" date="11/6/2022" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    backgroundColor: "#D7CDB7",
    flexDirection: "column",
    alignItems: "center",
  },
  pfp: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    aspectRatio: 1,
    backgroundColor: "#658CE7",
    borderRadius: "60%",
    borderWidth: 3,
    borderColor: "white",
    marginVertical: 5,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "900",
    color: "#fff",
  },
  name: {
    fontSize: 23,
    fontWeight: "800",
    color: "#303030",
  },
  wrapper: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#e8e4d8",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    marginTop: 7,
    fontSize: 20,
    fontWeight: "500",
  },
  bottom: {
    padding: 10,

    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#e8e4d8",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  slot: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: "900",
  },
  value: {
    fontSize: 23,
    fontWeight: "600",
  },
  mostp: {
    fontSize: 23,
    fontWeight: "800",
    alignSelf: "flex-start",
    marginHorizontal: 7,
    marginTop: 10,
  },
  outfits: {
    padding: 0,
    // flex: 1,
    backgroundColor: "#D7CDB7",
    flexWrap: "wrap",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
