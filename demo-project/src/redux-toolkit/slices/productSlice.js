// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
    getProductWithFiltersApi,
    createProductApi,
} from "../../apis/productApi";

// Redux Toolkit async thunk for fetching all products
export const getProducts = createAsyncThunk(
    "product/getProducts",
    async (data) => {
        console.log(data);
        const response = await getProductWithFiltersApi(data);
        return response;
    }
);

// Redux Toolkit async thunk for fetching a product by ID
export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (data) => {
        const response = await createProductApi(data);
        return response;
    }
);

// Define the product slice
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        filters: {
            searchValue: "",
            current: 1,
            productTypes: [],
            shippingUnits: [],
            productStatuses: [],
            maxPrice: "",
            minPrice: "",
        },
        status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
        error: null,
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // Reducer for fetching all products
            .addCase(getProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log(action.payload);
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setFilters } = productSlice.actions;
export default productSlice.reducer;
