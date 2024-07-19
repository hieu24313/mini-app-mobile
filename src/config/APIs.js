import axios from "axios";
import { useAuth } from "../context/AuthContext";

const SERVER = "localhost:8000";
const SERVER_CONTEXT = "/api/v1"


export const endpoints = { 
    "login": `${SERVER_CONTEXT}/auth/login/`,
    "detail": `${SERVER_CONTEXT}/auth/user/detail/`,

}

export default axios.create({
    baseURL: SERVER
})

export const authApi = (token) => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}