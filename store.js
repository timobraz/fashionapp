import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import useStorage from "./hooks/useStorage";
export const AppContext = createContext();

export const ContextProvider = (props) => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState(null);

  const { getData, storeData, clear } = useStorage();
  useEffect(() => {
    async function setUp() {
      const value = await getData("user");
      console.log(value);
      const settings = await getData("settings");
      if (value) {
        setUser(JSON.parse(value));
        navigate("Normal");
      } else {
        navigate("Register");
        setUser(null);
      }
      if (settings) setSettings(settings);
    }
    setUp();
  }, []);
  return <AppContext.Provider value={{ user, setUser }}>{props.children}</AppContext.Provider>;
};
