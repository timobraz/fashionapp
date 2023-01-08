import { ContextProvider } from "./store";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NormalTab from "./NormalTab";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Register">
            <Stack.Screen name="Normal" component={NormalTab} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </SafeAreaView>
      </ContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e4d8",
  },
});
