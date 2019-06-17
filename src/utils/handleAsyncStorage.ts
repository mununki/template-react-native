import AsyncStorage from "@react-native-community/async-storage";
import { TOKEN_KEY } from "../lib/constant";

export const getTokenFromAsyncStorage = () =>
  new Promise(async (resolve, reject) => {
    let token;
    try {
      token = await AsyncStorage.getItem(TOKEN_KEY);
    } catch (err) {
      reject(err);
    }
    resolve(token);
  });

export const saveTokenToAsyncStorage = (token: string) =>
  new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (err) {
      reject(err);
    }
    resolve(true);
  });

export const removeTokenFromAsyncStorage = () =>
  new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (err) {
      reject(err);
    }
    resolve(true);
  });
