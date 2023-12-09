// Simulated API call for fetching all products
import { productCreateResponse, productMockData, productUpdateResponse } from "../mock/mock";
import axiosInstance from "./axios";

export const getProductWithFiltersApi = async (filters) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productMockData)
        }, 2000)
    })

    const response = await axiosInstance({
        method: "post",
        url: "/product/search",
        data: filters,
    });
    return response.data.content;
};

// Simulated API call for fetching a product by ID
export const createProductApi = async (newProduct) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productCreateResponse)
        }, 2000)
    })

    const response = await axiosInstance({
        method: 'post',
        url: '/product/create',
        data: {
            image: 'url',
            price: 0,
            productName: '',
            productStatus: '',
            productType: '',
            shippingUnit: ''
        }
    })

    return response.data
};

export const updateProductApi = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productUpdateResponse)
        }, 2000)
    })

    const response = await axiosInstance({
        method: 'post',
        url: '/product/update',
        data: data
    })

    return response.data
};

export const deleteProductApi = async (productId) => {
    const response = await axiosInstance({
        method: 'delete',
        url: '/product/delete',
        params: {
            productId
        }
    })

    return response.data
}