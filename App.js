import { ContextProvider } from "./store";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AppStack from "./pages/AppStack";

import AppNav from "./pages/AppNav";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <AppNav />
      </ContextProvider>
    </NavigationContainer>
  );
}
