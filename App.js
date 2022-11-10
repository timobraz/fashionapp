import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Account from "./pages/Account";
import Home from "./pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <Home></Home>
      {/* <Account /> */}
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#D7CDB7",
  },
});
