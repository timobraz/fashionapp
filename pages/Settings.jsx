import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import useStorage from "../hooks/useStorage";
import useAuth from "../hooks/useAuth";
export default function Settings() {
  const { removeMultiple } = useStorage();
  const { setUser, setJwt } = useAuth();
  function handleSignOut() {
    removeMultiple(["user,jwt"]);
    setUser("");
    setJwt("");
  }
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSignOut}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.text}>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: "#e8e4d8", minHeight: "100%" },

  button: {
    padding: 15,
    backgroundColor: "#D7CDB7",
    borderBottomColor: "#2e2e1b",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "brown",
  },
});
