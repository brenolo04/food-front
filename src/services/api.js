import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-back-4p81.onrender.com"
});