import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import OutfitPreview from "../components/OutfitPreview";
import useAxios from "../hooks/useAxios";

export default function Explore() {
  const axios = useAxios();

  const [posts, setPosts] = useState("");
  useEffect(() => {
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
    getPosts();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.main} style={{ backgroundColor: "#D7CDB7" }}>
      {posts &&
        posts.slice(0, 6).map((post) => {
          return <OutfitPreview src={post.b64} likes={post.likedBy.length} key={post._id} _id={post._id} />;
        })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    minWidth: "100%",
    backgroundColor: "#e8e4d8",
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
