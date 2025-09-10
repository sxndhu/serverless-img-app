import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api", //Django Backend
});

export default API;