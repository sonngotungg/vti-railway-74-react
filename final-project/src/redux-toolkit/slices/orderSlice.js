// productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { buyOrderApi, buyProductApi, cancelBuyApi, createOrderApi, getOrderByStatusApi } from '../../apis/orderApi';

// Redux Toolkit async thunk for fetching all products
export const createOrder = createAsyncThunk('order/createOrder', async (data) => {
  const response = await createOrderApi(data);
  return response;
});

// Redux Toolkit async thunk for fetching a product by ID
export const buyOrder = createAsyncThunk('order/buyOrder', async (data) => {
  const response = await buyOrderApi(data);
  return response;
});

export const cancelBuy = createAsyncThunk('order/cancelBuy', async (data) => {
  const response = await cancelBuyApi(data);
  return response;
});

// Redux Toolkit async thunk for fetching a product by ID
export const getOrderByStatus = createAsyncThunk('product/getOrderByStatus', async (data) => {
  const response = await getOrderByStatusApi(data);
  return response;
});

// Define the order slice
const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setOrders: (state, action) => {
      console.log({ action })
      state.orders = [
        ...state.orders,
        action.payload
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      // Reducer for fetching all products
      .addCase(getOrderByStatus.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getOrderByStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(getOrderByStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createOrder.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = [
          ...state.orders,
          action.payload
        ];
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
