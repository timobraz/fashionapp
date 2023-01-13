import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

const mergeData = async (key, value) => {
  try {
    await AsyncStorage.mergeItem(key, value);
  } catch (e) {}
};

const removeData = async (key, value) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

const getAllKeys = async () => {
  try {
    const value = await AsyncStorage.getAllKeys();
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

const removeMultiple = async (keys) => {
  try {
    const value = await AsyncStorage.multiRemove(keys);
  } catch (e) {}
};
// AsyncStorage.removeItem("jwt");
const useStorage = () => {
  return { storeData, getData, mergeData, removeData, getAllKeys, removeMultiple };
};
export default useStorage;
