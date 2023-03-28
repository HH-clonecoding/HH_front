import axios from "axios";
import { getCookie } from "./cookies";

export const apis = axios.create({
    baseURL : process.env.REACT_APP_SERVER,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});


export const apis_token = axios.create({
    baseURL : process.env.REACT_APP_SERVER,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});

export const apis_naver = axios.create({
    baseURL : process.env.REACT_APP_NAVER,
    headers: {
        "X-NCP-APIGW-API-KEY-ID" : "ldgh7n9ai",
        "X-NCP-APIGW-API-KEY" : "V5WYpLSigsEa4JhMdwDbn19fvU23wpPHsqEa6jhD",
    }
})

apis_token.interceptors.request.use((config) => {
    if (config.headers === undefined) return;
    const token = getCookie('token');
    config.headers["Authorization"] = `${token}`;
    return config;
})