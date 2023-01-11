import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import OutfitPreview from "../components/OutfitPreview";
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
const dim = Dimensions.get("window");

export default function Account({ navigation }) {
  const axios = useAxios();
  const { user, jwt } = useAuth();
  const [posts, setPosts] = useState([]);
  console.log(user);
  async function getInfo(id) {
    try {
      const resp = await axios.get(`/users/account/${id}`);
      // console.log("resp,", resp.data);

      setPosts(resp.data.posts);
    } catch (err) {
      console.log("err acc");
      console.log(err.response.data);
      alert(err.response.data.message);
    }
  }

  useEffect(() => {
    console.log("shopwn");
    getInfo(user.id);
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.wrapper}>
        {/* <Text style={styles.name}>{}</Text> */}
        <Text style={styles.username}>@{user.username}</Text>
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
      {posts.length > 0 && <Text style={styles.mostp}>Recent Posts</Text>}
      <ScrollView contentContainerStyle={styles.outfits}>
        {posts.slice(0, 6).map((post) => {
          return <OutfitPreview src={post.binaryBuffer} likes={post.likedBy.length} key={post._id} _id={post._id} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    backgroundColor: "#D7CDB7",
    // backgroundColor: "blue",
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
    // marginTop: 7,
    fontSize: 22,
    fontWeight: "500",
    // backgroundColor:
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
    minWidth: "100%",
    maxWidth: "100%",
    backgroundColor: "#D7CDB7",
    // backgroundColor: "red",
    flexWrap: "wrap",
    // alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
