import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import useAxios from "../hooks/useAxios";
import CachedImage from "expo-cached-image";
import useAuth from "../hooks/useAuth";

const win = Dimensions.get("window");

export default function Outfit({ route, navigation }) {
  const axios = useAxios();
  const [desc, setDesc] = useState("");
  const [likes, setLikes] = useState(0);
  const [createdBy, setCreatedBy] = useState("");
  const [date, setDate] = useState("");
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    async function getPost() {
      try {
        const resp = await axios.get(`/posts/post/${route.params.id}`);
        if (resp.data) {
          setDesc(resp.data.description);
          setLikes(route.params.likes);
          setCreatedBy(resp.data.createdBy.username);
          setDate(new Date(resp.data.createdAt).toDateString());
        }
      } catch (error) {
        console.log("get err", error);
      }
    }
    getPost();
  }, []);

  async function handleLike() {
    setLiked((prev) => !prev);
  }
  async function handleSave() {
    setSaved((prev) => !prev);
  }

  async function handleDelete() {
    try {
      const resp = await axios.delete(`/posts/post/${route.params.id}`);
      if (resp.data) {
        navigation.goBack();
      }
    } catch (error) {
      console.log("get err", error);
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topcont}>
        <Image
          source={{ uri: "https://i.pinimg.com/750x/76/96/1c/76961cf9c0dd55e71d92f00367f4f80f.jpg" }}
          resizeMode={"cover"}
          style={styles.pfp}
        ></Image>
        <Text style={styles.acctext}>{createdBy}</Text>
      </View>
      <CachedImage
        source={{ uri: `https://ds1q8qo0jb22q.cloudfront.net/${route.params.src}`, expiresIn: 86400 }}
        resizeMode={"cover"}
        style={styles.pic}
        cacheKey={`${route.params.src}-thumb`}
      ></CachedImage>
      <View style={styles.social}>
        <TouchableOpacity onPress={handleLike} activeOpacity={0.7}>
          {liked ? <AntDesign name="heart" size={30} color="crimson" /> : <FontAwesome5 name="heart" size={30} color="brown" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} activeOpacity={0.7}>
          {saved ? <Ionicons name="bookmark" size={35} color="orange" /> : <Ionicons name="bookmark-outline" size={35} color="brown" />}
        </TouchableOpacity>
        <Ionicons name="share-outline" size={35} color="black" />
        {user.username == createdBy && (
          <TouchableOpacity onPress={handleDelete} activeOpacity={0.7}>
            <Ionicons name="md-trash-outline" size={35} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e4d8",
    flex: 1,
  },
  pfp: {
    width: 40,
    height: 40,
    marginHorizontal: 2,
    borderRadius: "50%",
    borderColor: "#7d7d7d",
    borderWidth: 1,
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
