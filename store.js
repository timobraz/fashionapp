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
  const [jwt, setJwt] = useState(null);

  const { getData } = useStorage();
  useEffect(() => {
    async function isLoggedIn() {
      try {
        const jwtret = await getData("jwt");
        setJwt(jwtret);
        const userret = await getData("user");
        setUser(JSON.parse(userret));
      } catch (error) {
        console.log("err: ", error);
      }
    }
    isLoggedIn();
  }, []);
  return <AppContext.Provider value={{ user, setUser, jwt, setJwt }}>{props.children}</AppContext.Provider>;
};
