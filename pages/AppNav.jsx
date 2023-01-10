import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import useAuth from "../hooks/useAuth";

export default function AppNav() {
  const { jwt } = useAuth();
  return <SafeAreaView style={styles.container}>{jwt ? <AppStack /> : <AuthStack />}</SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e4d8",
  },
});
