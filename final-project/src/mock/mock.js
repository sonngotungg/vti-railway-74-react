// Account
// 1. login

const loginMockData = {
  id: 29,
  username: 'chinh1234',
  fullName: '',
  avatar: '',
  address: '',
  role: 'CUSTOMER',
  token: 'token'
}

// 2. register
const registerRequestBody = {
  address: '',
  avatar: '',
  dateBirth: '',
  fullName: '',
  information: '',
  password: '123456',
  phoneNumber: '',
  username: 'chinh1234'
}

// Product
// 1. search
const searchRequestBody = {
  maxPrice: 0,
  minPrice: 0,
  page: 1,
  productName: 'ao',
  productStatus: [
    'NEW'
  ],
  productTypes: [
    'CLOTHES'
  ],
  shippingUnits: [
    'EXPRESS'
  ],
  size: 6,
  sortBy: 'id',
  sortType: 'desc'
}

const productMockData = {
  "content": [
    {
      "createBy": "Mr.Uoc",
      "createDate": "2023-09-15T13:23:45.943+00:00",
      "updateBy": null,
      "updateDate": null,
      "id": 1,
      "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
      "productName": "Áo Khoác Da Lộn Chần Bông",
      "price": 100000,
      "productType": "CLOTHES",
      "shippingUnit": "EXPRESS",
      "productStatus": "NEW"
    },
    {
      "createBy": "Mr.Uoc",
      "createDate": "2023-09-15T13:23:45.943+00:00",
      "updateBy": null,
      "updateDate": null,
      "id": 2,
      "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
      "productName": "Áo Khoác Da Lộn Chần Bông",
      "price": 800000,
      "productType": "CLOTHES",
      "shippingUnit": "EXPRESS",
      "productStatus": "NEW"
    },
    {
      "createBy": "Mr.Uoc",
      "createDate": "2023-09-15T13:23:45.943+00:00",
      "updateBy": null,
      "updateDate": null,
      "id": 3,
      "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
      "productName": "Áo Khoác Da Lộn Chần Bông",
      "price": 800000,
      "productType": "CLOTHES",
      "shippingUnit": "EXPRESS",
      "productStatus": "NEW"
    },
    {
      "createBy": "Mr.Uoc",
      "createDate": "2023-09-15T13:23:45.943+00:00",
      "updateBy": null,
      "updateDate": null,
      "id": 4,
      "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
      "productName": "Áo Khoác Da Lộn Chần Bông",
      "price": 800000,
      "productType": "CLOTHES",
      "shippingUnit": "EXPRESS",
      "productStatus": "NEW"
    }
  ],
  "pageable": {
    "sort": {
      "empty": false,
      "sorted": true,
      "unsorted": false
    },
    "offset": 0,
    "pageSize": 6,
    "pageNumber": 0,
    "unpaged": false,
    "paged": true
  },
  "last": true,
  "totalPages": 1,
  "totalElements": 1,
  "number": 0,
  "size": 6,
  "sort": {
    "empty": false,
    "sorted": true,
    "unsorted": false
  },
  "first": true,
  "numberOfElements": 1,
  "empty": false
}

// 2. create
const createProductRequestBody = {
  image: 'https://www.att.com/scmsassets/upper_funnel/wireless/postpaid/samsung-compare_page_galaxy_z_flip5.png',
  price: 3000000,
  productName: 'Compare Samsung Galaxy Phones',
  productStatus: 'NEW',
  productType: 'PHONE',
  shippingUnit: 'EXPRESS'
}

const productCreateResponse = {
  "createBy": "username",
  "createDate": "2023-12-05T10:55:57.577+00:00",
  "updateBy": null,
  "updateDate": null,
  "id": 19,
  "image": "https://www.att.com/scmsassets/upper_funnel/wireless/postpaid/samsung-compare_page_galaxy_z_flip5.png",
  "productName": "Compare Samsung Galaxy Phones",
  "price": 30000000,
  "productType": "PHONE",
  "shippingUnit": "EXPRESS",
  "productStatus": "NEW"
}

// 3. update
const productUpdateRequestBody = {
  "id": 19,
  "image": "https://www.att.com/scmsassets/upper_funnel/wireless/postpaid/samsung-compare_page_galaxy_z_flip5.png",
  "price": 35000000,
  "productName": "Compare Samsung Galaxy Phones",
  "productStatus": "NEW",
  "productType": "PHONE",
  "shippingUnit": "EXPRESS"
}

const productUpdateResponse = {
  "createBy": null,
  "createDate": null,
  "updateBy": "username",
  "updateDate": "2023-12-05T10:59:39.841+00:00",
  "id": 19,
  "image": "https://www.att.com/scmsassets/upper_funnel/wireless/postpaid/samsung-compare_page_galaxy_z_flip5.png",
  "productName": "Compare Samsung Galaxy Phones",
  "price": 35000000,
  "productType": "PHONE",
  "shippingUnit": "EXPRESS",
  "productStatus": "NEW"
}


// Order
// 1. create
const createOrderRequestBody = {
  accountId: 4,
  productId: 1,
  quantity: 3
}

const orderResponse = {
  "createBy": "username",
  "createDate": "2023-12-05T11:05:35.221+00:00",
  "updateBy": null,
  "updateDate": null,
  "id": 20,
  "orderStatus": "PENDING",
  "quantity": 3,
  "account": {
    "createBy": "username",
    "createDate": "2023-10-16T12:12:54.696+00:00",
    "updateBy": null,
    "updateDate": null,
    "id": 4,
    "username": "chinh2",
    "avatar": null,
    "address": null,
    "dateBirth": null,
    "fullName": "Vũ Quang Chinh",
    "infomation": null,
    "password": "$2a$10$WmBD5dsei5inRYAR0Hc.xelIomG0Yv7At3ZeoGOW4jh4KAHte5mQC",
    "phoneNumber": "0984285632",
    "role": "CUSTOMER"
  },
  "product": {
    "createBy": "Mr.Uoc",
    "createDate": "2023-09-15T13:23:45.943+00:00",
    "updateBy": null,
    "updateDate": null,
    "id": 1,
    "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
    "productName": "Áo Khoác Da Lộn Chần Bông",
    "price": 800000,
    "productType": "CLOTHES",
    "shippingUnit": "EXPRESS",
    "productStatus": "NEW"
  }
}

// 2. buy
const buyOrderResponse = {
  "createBy": "username",
  "createDate": "2023-12-05T11:05:35.221+00:00",
  "updateBy": "username",
  "updateDate": "2023-12-05T11:07:36.769+00:00",
  "id": 20,
  "orderStatus": "DONE",
  "quantity": 3,
  "account": {
    "createBy": "username",
    "createDate": "2023-10-16T12:12:54.696+00:00",
    "updateBy": null,
    "updateDate": null,
    "id": 4,
    "username": "chinh2",
    "avatar": null,
    "address": null,
    "dateBirth": null,
    "fullName": "Vũ Quang Chinh",
    "infomation": null,
    "password": "$2a$10$WmBD5dsei5inRYAR0Hc.xelIomG0Yv7At3ZeoGOW4jh4KAHte5mQC",
    "phoneNumber": "0984285632",
    "role": "CUSTOMER"
  },
  "product": {
    "createBy": "Mr.Uoc",
    "createDate": "2023-09-15T13:23:45.943+00:00",
    "updateBy": null,
    "updateDate": null,
    "id": 1,
    "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
    "productName": "Áo Khoác Da Lộn Chần Bông",
    "price": 800000,
    "productType": "CLOTHES",
    "shippingUnit": "EXPRESS",
    "productStatus": "NEW"
  }
}

const cancelOrderResponse = {
  "createBy": "username",
  "createDate": "2023-12-04T14:42:06.751+00:00",
  "updateBy": "username",
  "updateDate": "2023-12-05T11:10:17.616+00:00",
  "id": 19,
  "orderStatus": "CANCEL",
  "quantity": 2,
  "account": {
    "createBy": "mr.Ta",
    "createDate": "2023-09-23T13:56:15.373+00:00",
    "updateBy": null,
    "updateDate": null,
    "id": 1,
    "username": "CUSTOMER",
    "avatar": "https://kenh14cdn.com/203336854389633024/2023/4/28/photo-16-168268821282736482867.jpg",
    "address": "string",
    "dateBirth": "2023-09-23",
    "fullName": "vũ văn ước ước",
    "infomation": "string",
    "password": "$2a$12$Uon4.x.wb3UUZPZ6FUfBPOpSXurLzChYkz3XN0DCpFbGbiT7f5oOG",
    "phoneNumber": "+84377106297",
    "role": "CUSTOMER"
  },
  "product": {
    "createBy": "Mr.Uoc",
    "createDate": "2023-09-15T13:23:45.943+00:00",
    "updateBy": null,
    "updateDate": null,
    "id": 1,
    "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
    "productName": "Áo Khoác Da Lộn Chần Bông",
    "price": 800000,
    "productType": "CLOTHES",
    "shippingUnit": "EXPRESS",
    "productStatus": "NEW"
  }
}

// 4. get-by-status
const getOrderResponse = [
  {
    "createBy": "username",
    "createDate": "2023-12-05T11:05:35.221+00:00",
    "updateBy": "username",
    "updateDate": "2023-12-05",
    "id": 20,
    "orderStatus": "DONE",
    "quantity": 3,
    "account": {
      "createBy": "username",
      "createDate": "2023-10-16T12:12:54.696+00:00",
      "updateBy": null,
      "updateDate": null,
      "id": 4,
      "username": "chinh2",
      "avatar": null,
      "address": null,
      "dateBirth": null,
      "fullName": "Vũ Quang Chinh",
      "infomation": null,
      "password": "$2a$10$WmBD5dsei5inRYAR0Hc.xelIomG0Yv7At3ZeoGOW4jh4KAHte5mQC",
      "phoneNumber": "0984285632",
      "role": "CUSTOMER"
    },
    "product": {
      "createBy": "Mr.Uoc",
      "createDate": "2023-09-15T13:23:45.943+00:00",
      "updateBy": null,
      "updateDate": null,
      "id": 1,
      "image": "https://product.hstatic.net/200000201725/product/1622bc_d07f948893a64053baeede025379df9a_master.jpg",
      "productName": "Áo Khoác Da Lộn Chần Bông",
      "price": 800000,
      "productType": "CLOTHES",
      "shippingUnit": "EXPRESS",
      "productStatus": "NEW"
    }
  }
]

export {
  loginMockData,
  registerRequestBody,
  searchRequestBody,
  productMockData,
  createProductRequestBody,
  productCreateResponse,
  productUpdateRequestBody,
  productUpdateResponse,
  createOrderRequestBody,
  orderResponse,
  buyOrderResponse,
  cancelOrderResponse,
  getOrderResponse
}