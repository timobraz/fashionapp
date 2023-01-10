import React from "react";
import axios from "axios";
export default axios.create({
  baseURL: __DEV__ ? "http://localhost:3080/api" : "https://api.example.com/api",
});
