import { buyOrderResponse, cancelOrderResponse, getOrderResponse, orderResponse } from "../mock/mock";
import axiosInstance from "./axios";

// Simulated API call for fetching a product by ID
export const createOrderApi = async (newOrder) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(orderResponse)
        }, 2000)
    })

    const response = await axiosInstance({
        method: 'post',
        url: '/order/create',
        data: newOrder
    })
    return response.data
};

export const buyOrderApi = async (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(buyOrderResponse)
        }, 2000)
    })

    const response = await axiosInstance({
        method: 'post',
        url: `/buy-product/${orderId}`,
    })

    return response.data
};

export const cancelBuyApi = async (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cancelOrderResponse)
        }, 2000)
    })

    const response = await axiosInstance({
        method: 'post',
        url: `/buy-cancel/${orderId}`,
    })

    return response.data
};

export const getOrderByStatusApi = async ({ accountId, orderStatus }) => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(getOrderResponse)
    //     }, 2000)
    // })

    const response = await axiosInstance({
        method: 'post',
        url: '/order/get-by-status',
        params: {
            accountId: accountId,
            orderStatus: orderStatus === 'ALL' ? null : orderStatus
        }
    })

    return response.data
}