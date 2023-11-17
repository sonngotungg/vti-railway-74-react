export const accountMockData = {
    login: {
        id: 2,
        username: 'username',
        fullName: 'fullName',
        avatar: 'avatar',
        address: 'address',
        role: 'CUSTOMER',
        token: 'token'
    },
    register: {
        createBy: 'username',
        createDate: 'date',
        updateBy: null,
        updateDate: null,
        id: 19,
        username: 'username',
        avatar: 'avatar',
        address: 'address',
        dateBirth: 'YYYY-MM-DD',
        fullName: 'fullName',
        information: null,
        password: 'encrypted password',
        phoneNumber: '0123456789',
        role: 'CUSTOMER'
    }
}

export const productMockData = {
    search: [
        {
            createBy: 'Mr.Uoc',
            createDate: 'date',
            updateBy: null,
            updateDate: null,
            id: 1,
            image: 'https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg',
            productName: 'productName',
            price: 800000,
            productType: 'productType',
            shippingUnit: 'shippingUnit',
            productStatus: 'productStatus'
        }
    ],
    create: {
        createBy: 'createBy',
        createDate: 'createDate',
        updateBy: 'updateBy',
        updateDate: 'updateDate',
        id: 15,
        image: 'image',
        productName: 'productName',
        price: 100,
        productType: 'productType',
        shippingUnit: 'shippingUnit',
        productStatus: 'productStatus'
    },
    update: {
        createBy: 'createBy',
        createDate: 'createDate',
        updateBy: 'updateBy',
        updateDate: 'updateDate',
        id: 15,
        image: 'image',
        productName: 'productName',
        price: 100,
        productType: 'productType',
        shippingUnit: 'shippingUnit',
        productStatus: 'productStatus'
    },
}

export const orderMockData = {
    create: {
        createBy: 'username',
        createDate: 'date',
        updateBy: null,
        updateDate: null,
        id: 14,
        orderStatus: 'PENDING',
        quantity: 2,
        acount: {},
        Product: {}
    },
    buy: {
        createBy: 'username',
        createDate: 'date',
        updateBy: null,
        updateDate: null,
        id: 14,
        orderStatus: 'DONE',
        quantity: 2,
        acount: {},
        Product: {}
    },
    cancel: {
        createBy: 'username',
        createDate: 'date',
        updateBy: null,
        updateDate: null,
        id: 14,
        orderStatus: 'CANCEL',
        quantity: 2,
        acount: {},
        Product: {}
    },
    getByStatus: {
        createBy: 'username',
        createDate: 'date',
        updateBy: null,
        updateDate: null,
        id: 14,
        orderStatus: 'PENDING',
        quantity: 2,
        acount: {},
        Product: {}
    },
}