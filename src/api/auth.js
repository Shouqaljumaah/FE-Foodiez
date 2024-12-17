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
  const response = await instance.post(
    "http://localhost:8000/signup",
    formData
  );

  setToken(response.token);
  return response.token;
};
const login = async (userInfo) => {
  const response = await instance.post("http://localhost:8000/login", userInfo);

  setToken(response.token);
  return response.token;
};

const getAllRecipes = async () => {
  const data = await instance.get("http://localhost:8000/recipes");
  return data;
};

const getAllCatagories = async () => {
  const data = await instance.get("http://localhost:8000/catagories");
  return data;
};

const getAllIngredients = async () => {
  const data = await instance.get("http://localhost:8000/ingredients");
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
