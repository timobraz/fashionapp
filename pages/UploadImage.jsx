import React, { useState, useEffect } from "react";
import { Button, Image, View, text, Dimensions, StyleSheet, TouchableOpacity, TextInput, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
const dim = Dimensions.get("window");

export default function UploadImage({ navigation }) {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
      base64: false,
    });
    if (!result.canceled) {
      console.log(result.assets[0]);
      setImage(result.assets[0].uri);
    }
  };
  useEffect(() => {
    pickImage();
    return () => {
      setImage(null);
      setDesc("");
    };
  }, []);
  return (
    <View style={styles.total}>
      {image ? (
        <TouchableOpacity style={styles.imgcontainer} onPress={pickImage} activeOpacity="0.7">
          <Image source={{ uri: image }} style={styles.img} resizeMode="cover" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.uploadc} onPress={pickImage} activeOpacity="0.7">
          <Feather name="upload" size={150} color="black" style={styles.iconcontainer} />
        </TouchableOpacity>
      )}
      <View style={styles.bottom}>
        <View style={styles.textcont}>
          <Text style={styles.title}>Write a description for your post:</Text>
          <TextInput style={styles.input} onChangeText={setDesc} multiline={true} value={desc}></TextInput>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.buttonwrapper, { backgroundColor: "grey" }]} onPress={() => navigation.goBack()}>
            <Text style={styles.buttontext}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonwrapper} onPress={() => console.log(desc)}>
            <Text style={styles.buttontext}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadc: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    padding: 20,
    height: dim.width,
    // borderRadius: 40,
    // borderWidth: 8,
    // borderColor: "black",
    // borderStyle: "dotted",
  },
  iconcontainer: {
    padding: 20,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "#C5BA9B",
    borderStyle: "dashed",
  },
  total: {
    flex: 1,
    backgroundColor: "#D7CDB7",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  scroll: { flexDirection: "column", justifyContent: "space-between" },
  bottom: {
    padding: 10,
    borderTopWidth: 6,
    borderTopColor: "#C5BA9B",
    // backgroundColor: "red",
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
  },
  textcont: {},
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  buttontext: {
    fontSize: 25,
    color: "white",
    fontWeight: "900",
    textAlign: "center",
  },
  buttonwrapper: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginHorizontal: 5,
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    flex: 1,
    alignSelf: "center",
  },
  input: {
    fontSize: 20,
    fontWeight: "600",
    borderWidth: 2,
    borderColor: "#C5BA9B",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    height: "60%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
  },
});
