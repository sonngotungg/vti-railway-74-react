import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './slices/accountSlice';
import productReducer from './slices/productSlice';
import orderReducer from './slices/orderSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    product: productReducer,
    order: orderReducer
  },
});
