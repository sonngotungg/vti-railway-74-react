// Simulated API call for fetching all products
export const getProductWithFiltersApi = async (filters) => {
    // const response = await axiosInstance({
    //     method: 'post',
    //     url: '/product/search',
    //     data: {
    //         maxPrice: 'username',
    //         minPrice: 'password',
    //         page: 1,
    //         productName: '',
    //         productStatus: '',
    //         productTypes: '',
    //         shippingUnits: '',
    //         size: 1,
    //         sortBy: 'username',
    //         sortType: 'ASC'
    //     }
    // })

    // Simulating an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Simulated list of products
    const products = [
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 1,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'Ao khoac da',
        price: 800000,
        productType: 'CLOTHES',
        shippingUnit: 'EXPRESS',
        productStatus: 'NEW'
      },
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 2,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'mock PC',
        price: 100000,
        productType: 'PC',
        shippingUnit: 'EXPRESS',
        productStatus: 'NEW'
      },
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 3,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'mock Shoes',
        price: 100000,
        productType: 'SHOES',
        shippingUnit: 'EXPRESS',
        productStatus: 'NEW'
      },
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 4,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'Ao khoac da',
        price: 800000,
        productType: 'CLOTHES',
        shippingUnit: 'EXPRESS',
        productStatus: 'NEW'
      },
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 5,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'mock PC',
        price: 100000,
        productType: 'PC',
        shippingUnit: 'FAST',
        productStatus: 'USED'
      },
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 6,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'mock PC',
        price: 1002000,
        productType: 'SHOES',
        shippingUnit: 'SAVING',
        productStatus: 'NEW'
      },
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 5,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'mock PC',
        price: 14000,
        productType: 'PC',
        shippingUnit: 'FAST',
        productStatus: 'NEW'
      },
      {
        createBy: 'Mr.Uoc',
        createDate: '2023-09-12',
        updateBy: null,
        updateDate: null,
        id: 6,
        image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
        productName: 'mock PC',
        price: 30000,
        productType: 'SHOES',
        shippingUnit: 'SAVING',
        productStatus: 'USED'
      }
    ];
  
    return products;
};
  
  // Simulated API call for fetching a product by ID
export const createProductApi = async (newProduct) => {
    // const response = await axiosInstance({
    //     method: 'post',
    //     url: '/product/create',
    //     data: {
    //         image: 'url',
    //         price: 0,
    //         productName: '',
    //         productStatus: '',
    //         productType: '',
    //         shippingUnit: ''
    //     }
    // })

    // Simulating an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // not return anythings
};