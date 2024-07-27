import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
    // baseURL: import.meta.env.BASE_URL
})