import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
const win = Dimensions.get("window");
// console.log(win);
export default function Outfit() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topcont}>
        <Image
          source={{ uri: "https://i.pinimg.com/750x/76/96/1c/76961cf9c0dd55e71d92f00367f4f80f.jpg" }}
          resizeMode={"cover"}
          style={styles.pfp}
        ></Image>
        <Text style={styles.acctext}>stellajun.2</Text>
      </View>
      <Image
        source={{ uri: "https://i.pinimg.com/564x/a8/03/5d/a8035dd0b25788d41cc3d2f00db7c06e.jpg" }}
        resizeMode={"cover"}
        style={styles.pic}
      ></Image>
      <View style={styles.social}>
        <FontAwesome5 name="heart" size={30} color="brown" />
        <FontAwesome5 name="bookmark" size={30} color="brown" />
        <Ionicons name="share-outline" size={35} color="black" />
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.likes}>50 likes</Text>
        <Text style={styles.desc}>I bought this sweathsuirt adadjajbd Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quo.</Text>
        <Text style={styles.date}>May 19 2022</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pfp: {
    width: 50,
    height: 50,
    marginHorizontal: 2,
    borderRadius: "50%",
    borderColor: "#7d7d7d",
    borderWidth: 2,
  },
  pic: {
    aspectRatio: 1,
    width: win.width,
  },
  topcont: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    // fontSize:20
  },
  acctext: {
    fontSize: 17,
    fontWeight: "700",
    color: "#2e2e1b",
    alignSelf: "center",
    marginLeft: 5,
  },
  social: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
  },
  bottomBox: {
    paddingHorizontal: 10,
  },
  desc: {
    fontSize: 17,
    fontWeight: "400",
    marginBottom: 5,
  },
  date: {
    fontWeight: "600",
  },
  likes: {
    fontSize: 17,
    fontWeight: "800",
  },
});
