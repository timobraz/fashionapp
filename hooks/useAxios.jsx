import axios from "axios";
import useAuth from "./useAuth";

const useAxios = () => {
  const { jwt } = useAuth();
  return axios.create({
    baseURL: __DEV__ ? "http://192.168.0.238:3080/api" : "https://api.example.com/api",
    headers: {
      authorization: jwt,
    },
  });
};

export default useAxios;
//http://localhost:3080/api
//http://192.168.0.238:3080/api
