import axiosInstance from "./axios";

// Simulated API call for fetching a product by ID
export const createOrderApi = async (newProduct) => {
    const response = await axiosInstance({
        method: 'post',
        url: '/order/create',
        data: {
            accountId: 1,
            productId: 10,
            quantity: 2,
        }
    })
    return response.data
    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
};

export const buyOrderApi = async (newProduct) => {
    const response = await axiosInstance({
        method: 'post',
        url: '/buy-product',
        params: {
            orderId: '1'
        }
    })

    return response.data
    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
};

export const cancelBuyApi = async (newProduct) => {
    const response = await axiosInstance({
        method: 'post',
        url: '/buy-cancel',
        params: {
            orderId: '1',
        }
    })

    return response.data
    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
}; 

export const getOrderByStatusApi = async ({accountId, orderStatus}) => {
    const response = await axiosInstance({
        method: 'post',
        url: '/order/get-by-status',
        params: {
            accountId: accountId,
            orderStatus: orderStatus
        }
    })

    return response.data
}