import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import OutfitPreview from "../components/OutfitPreview";
import useAxios from "../hooks/useAxios";

export default function Explore() {
  const axios = useAxios();
  const [refreshing, setRefreshing] = useState(false);

  const [posts, setPosts] = useState("");
  async function getPosts() {
    try {
      const resp = await axios.get(`/posts/post/all`);
      if (resp.data) {
        setPosts(resp.data);
      }
    } catch (error) {
      console.log("get err", error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await getPosts();
    setRefreshing(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.main}
      style={styles.bgscroll}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {posts &&
        posts.map((post) => {
          return <OutfitPreview src={post.s3location} likes={post.likedBy} key={post._id} _id={post._id} />;
        })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    // minWidth: "100%",
    // minWidth: "100%",

    display: "flex",
    // flex: 1,
    backgroundColor: "#e8e4d8",
    flexWrap: "wrap",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    // height: "100%",
  },
  bgscroll: {
    backgroundColor: "#e8e4d8",
  },
});
