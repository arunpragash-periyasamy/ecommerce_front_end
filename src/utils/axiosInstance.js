import axios from "axios";
import {  RENDER_API } from "./constants";
const axiosInstance = axios.create({
    baseURL: RENDER_API,
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
})

export default axiosInstance;