import axiosInstance from "./axios";
import { loginMockData } from "../mock/mock";

export const loginApi = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(loginMockData)
        }, 2000)
    })

    const response = await axiosInstance({
        method: "post",
        url: "/auth/login-jwt",
        params: {
            username: data.username,
            password: data.password,
        },
    });
    return response.data;
};

export const registerApi = async (data = {}) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    })
    const response = await axiosInstance({
        method: 'post',
        url: '/auth/register',
        data
    })

    console.log('register: ', response)
    return response.data;
    // save access-token got from the response data into localStorage
    // save other data into redux
}
