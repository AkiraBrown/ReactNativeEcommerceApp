import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://dummyjson.com/products"
      : "https://dummyjson.com/products",
  timeout: 10000,
});

export default AxiosInstance;
