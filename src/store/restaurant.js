import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
};

const restaurant = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    updateRestaurants: (state, action) => {
      state.restaurants = action.payload.restaurants;
    },
  },
});

export const restaurantActions = restaurant.actions;
export const restaurantReducers = restaurant.reducer;
