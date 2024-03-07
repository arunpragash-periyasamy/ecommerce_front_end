import axios from "axios";
import { BACKEND_API } from "./constants";
const axiosInstance = axios.create({
    baseURL: BACKEND_API,
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
})

export default axiosInstance;