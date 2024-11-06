import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant:null,
}

export const rowSlice= createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    setDishes: (state, action) => {
      state.dishes = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDishes } = rowSlice.actions;
export const selectDishes = state => state.dishes.dishes;

export default rowSlice.reducer