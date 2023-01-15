import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CachedImage from "expo-cached-image";
export default function OutfitPreview(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.main} onPress={() => navigation.push("Outfit", { src: props.src, id: props._id, likes: props.likes })}>
      <CachedImage
        source={{ uri: `https://ds1q8qo0jb22q.cloudfront.net/${props.src}`, expiresIn: 86400 }}
        cacheKey={`${props.src}-thumb`}
        style={styles.pic}
        placeholderContent={<View style={{ backgroundColor: "gray" }}></View>}
      ></CachedImage>
      <View style={styles.wrapper}>
        <AntDesign name="heart" size={20} color="#FF4079" />
        <Text style={styles.likes}>{props.likes.length}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#979081",
    shadowColor: "#979081",
    // shadowOpacity: 0.8,
    shadowOffset: { height: 3, width: 4 },
    shadowRadius: 1,
    borderRadius: 6,
    marginVertical: 5,
  },
  pic: {
    width: 180,
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: 10,
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
    flexDirection: "row",
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    backgroundColor: "#979081",
    borderRadius: 10,
  },
  likes: {
    marginLeft: 5,
    fontSize: 16,
    color: "white",
    fontWeight: "800",
  },
});
