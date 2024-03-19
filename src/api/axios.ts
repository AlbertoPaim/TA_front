import axios from "axios";

export const req = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});