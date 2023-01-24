import axios from "axios";

const apiPlanner = axios.create({
  baseURL: "https://json-server-iplanner-v1.herokuapp.com/",
  timeout: 15000,
});

export default apiPlanner;
