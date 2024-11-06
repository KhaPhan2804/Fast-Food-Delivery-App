import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import restaurantSlice from './slices/restaurantSlice'
import authSlice from './slices/authSlice'
import rowSlice from './slices/rowSlice'


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
    auth: authSlice,
    row: rowSlice,
  },
})