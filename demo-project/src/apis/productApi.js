// Simulated API call for fetching all products
import axiosInstance from "./axios";

export const getProductWithFiltersApi = async (filters) => {
    const response = await axiosInstance({
        method: "post",
        url: "/product/search",
        data: filters,
    });
    return response.data.content;

    // // Simulating an API call delay
    // await new Promise(resolve => setTimeout(resolve, 1000));

    // // Simulated list of products
    // const products = [
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 1,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'Ao khoac da',
    //     price: 800000,
    //     productType: 'CLOTHES',
    //     shippingUnit: 'EXPRESS',
    //     productStatus: 'NEW'
    //   },
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 2,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'mock PC',
    //     price: 100000,
    //     productType: 'PC',
    //     shippingUnit: 'EXPRESS',
    //     productStatus: 'NEW'
    //   },
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 3,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'mock Shoes',
    //     price: 100000,
    //     productType: 'SHOES',
    //     shippingUnit: 'EXPRESS',
    //     productStatus: 'NEW'
    //   },
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 4,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'Ao khoac da',
    //     price: 800000,
    //     productType: 'CLOTHES',
    //     shippingUnit: 'EXPRESS',
    //     productStatus: 'NEW'
    //   },
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 5,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'mock PC',
    //     price: 100000,
    //     productType: 'PC',
    //     shippingUnit: 'FAST',
    //     productStatus: 'USED'
    //   },
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 6,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'mock PC',
    //     price: 1002000,
    //     productType: 'SHOES',
    //     shippingUnit: 'SAVING',
    //     productStatus: 'NEW'
    //   },
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 5,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'mock PC',
    //     price: 14000,
    //     productType: 'PC',
    //     shippingUnit: 'FAST',
    //     productStatus: 'NEW'
    //   },
    //   {
    //     createBy: 'Mr.Uoc',
    //     createDate: '2023-09-12',
    //     updateBy: null,
    //     updateDate: null,
    //     id: 6,
    //     image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
    //     productName: 'mock PC',
    //     price: 30000,
    //     productType: 'SHOES',
    //     shippingUnit: 'SAVING',
    //     productStatus: 'USED'
    //   }
    // ];

    // return products;
};

// Simulated API call for fetching a product by ID
export const createProductApi = async (newProduct) => {
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

    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
};

export const updateProductApi = async (data) => {
    const response = await axiosInstance({
        method: 'post',
        url: '/product/update',
        data: data
    })

    return response.data

    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
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