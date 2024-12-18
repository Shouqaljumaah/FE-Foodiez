import instance from "./index";
import { setToken } from "./storge";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const response = await instance.post("signup", formData);

  setToken(response.token);
  return response.token;
};
const login = async (userInfo) => {
  const response = await instance.post("login", userInfo);

  setToken(response.token);
  return response.token;
};

const getAllRecipes = async () => {
  const data = await instance.get("recipes");
  return data;
};

const getAllCatagories = async () => {
  const data = await instance.get("catagories");
  return data;
};

const getAllIngredients = async () => {
  const data = await instance.get("ingredients");
  return data;
};

export {
  register,
  login,
  storeToken,
  getAllCatagories,
  getAllRecipes,
  getAllIngredients,
};
