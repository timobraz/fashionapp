import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import axios from "../hooks/useAxios";
import useStorage from "../hooks/useStorage";
import useAuth from "../hooks/useAuth";
export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { storeData } = useStorage();
  const { user, setUser, setJwt } = useAuth();
  async function submit() {
    try {
      const resp = await axios.post("/users", {
        username,
        password,
        email,
      });
      console.log("data here", resp.data);
      if (resp.data) {
        setUser(resp.data);
        storeData("user", JSON.stringify(resp.data));
        setError("");
        storeData("jwt", resp.headers.Authorization);
        setJwt(resp.headers.Authorization);
        navigation.navigate("Normal");
      }
    } catch (err) {
      console.log("err here,", err);
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  }
  return (
    <View style={styles.total}>
      <Text style={styles.title}>Register</Text>
      {error && <Text style={styles.errors}>{error}</Text>}

      <View style={styles.slot}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.slotinp}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect="false"
          keyboardType="email-address"
          autoFocus="true"
        />
      </View>
      <View style={styles.slot}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.slotinp}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect="false"
          keyboardType="default"
        />
      </View>
      <View style={styles.slot}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.slotinp}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect="false"
          keyboardType="visible-password"
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttontext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.logintext}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    flex: 1,
    backgroundColor: "#e8e4d8",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    left: 20,
    top: 10,
    fontSize: 60,
    fontWeight: "700",
  },
  slot: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#C5BA9B",
    marginVertical: 5,
    borderRadius: 10,
  },
  slottitle: {
    fontSize: 25,
    fontWeight: "600",
  },
  slotinp: {
    fontSize: 25,
    fontWeight: "300",
    padding: 5,
    // backgroundColor: "#e8e4d8",
  },
  buttons: {
    backgroundColor: "#BC7752",
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
  },
  buttontext: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
  },
  login: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    alignSelf: "center",
  },
  logintext: {
    fontSize: 20,
    color: "dodgerblue",
    fontWeight: "600",
    textAlign: "center",
    // backgroundColor: "gray",
  },
  errors: {
    color: "red",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
  },
});
