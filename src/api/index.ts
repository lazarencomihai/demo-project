import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/lazarencomihai/demo-project",
});

apiInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    throw err;
  }
);
