import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import OutfitPreview from "../components/OutfitPreview";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <OutfitPreview src="https://i.pinimg.com/750x/76/96/1c/76961cf9c0dd55e71d92f00367f4f80f.jpg" date="11/0/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/14/6b/1a/146b1a115a770b6beccf853fd79233ae.jpg" date="11/3/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/d2/6b/41/d26b4191294a8220fb9a067e56af8eb5.jpg" date="11/4/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/a8/03/5d/a8035dd0b25788d41cc3d2f00db7c06e.jpg" date="11/8/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/b1/55/a9/b155a9a6cdefe1a8722803c11612e3c0.jpg" date="11/9/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/d2/6b/41/d26b4191294a8220fb9a067e56af8eb5.jpg" date="11/4/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/a8/03/5d/a8035dd0b25788d41cc3d2f00db7c06e.jpg" date="11/8/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/b1/55/a9/b155a9a6cdefe1a8722803c11612e3c0.jpg" date="11/9/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/d2/6b/41/d26b4191294a8220fb9a067e56af8eb5.jpg" date="11/4/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/a8/03/5d/a8035dd0b25788d41cc3d2f00db7c06e.jpg" date="11/8/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/b1/55/a9/b155a9a6cdefe1a8722803c11612e3c0.jpg" date="11/9/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/d2/6b/41/d26b4191294a8220fb9a067e56af8eb5.jpg" date="11/4/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/a8/03/5d/a8035dd0b25788d41cc3d2f00db7c06e.jpg" date="11/8/2022" />
      <OutfitPreview src="https://i.pinimg.com/564x/b1/55/a9/b155a9a6cdefe1a8722803c11612e3c0.jpg" date="11/9/2022" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 15,
    // flex: 1,
    backgroundColor: "#D7CDB7",
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
