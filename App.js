import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Account from "./pages/Account";
import Explore from "./pages/Explore";
import Outfit from "./pages/Outfit";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Feed from "./pages/Feed";
import ExploreStack from "./pages/ExploreStack";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <TopBar></TopBar>
        <Tab.Navigator
          initialRouteName="Account"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Explore") {
                iconName = "search";
              }
              if (route.name === "Account") {
                iconName = "user";
              }
              if (route.name === "Feed") {
                iconName = "buffer";
              }
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            tabBarInactiveBackgroundColor: "#e8e4d8",
            tabBarActiveTintColor: "black",
            tabBarActiveBackgroundColor: "#C5BA9B",

            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Explore" component={ExploreStack} />
          <Tab.Screen name="Account" component={Account} />

          {/* <View style={styles.container}> */}

          {/* 
          <Explore></Explore> */}
          {/* <Outfit></Outfit> */}
          {/* <Account /> */}
          {/* <BottomBar /> */}
          {/* </View> */}
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e4d8",
  },
});
