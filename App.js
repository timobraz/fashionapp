import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Account from "./pages/Account";
import Explore from "./pages/Explore";
import Outfit from "./pages/Outfit";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Explore" component={Explore} />
          {/* <View style={styles.container}> */}
          {/* <TopBar></TopBar>
          <Explore></Explore> */}
          {/* <Outfit></Outfit> */}
          {/* <Account /> */}
          {/* <BottomBar /> */}
          {/* </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e4d8",
  },
});
