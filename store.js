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
  const [jwt, setJwt] = useState("");

  const { getData, storeData, clear } = useStorage();
  useEffect(() => {
    async function setUp() {
      const value = await getData("user");
      const settings = await getData("settings");
      if (value) {
        setUser(JSON.parse(value));
        navigate("Normal");
      } else {
        navigate("Register");
        setUser(null);
      }
      if (settings) setSettings(settings);
      const jwtret = await getData("jwt");
      if (jwtret) setJwt(jwtret);
      else {
        navigate("Register");
        setUser(null);
        setJwt("");
      }
    }
    setUp();
  }, []);
  return <AppContext.Provider value={{ user, setUser, jwt, setJwt }}>{props.children}</AppContext.Provider>;
};
