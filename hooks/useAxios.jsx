import React from "react";
import axios from "axios";
export default axios.create({
  baseURL: __DEV__ ? "http://192.168.0.238:3080/api" : "https://api.example.com/api",
});
