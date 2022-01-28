import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  rating: null,
};

const userSelection = createSlice({
  name: "user-selection",
  initialState,
  reducers: {
    updateType: (state, action) => {
      state.type = action.payload.type;
    },
    updateRating: (state, action) => {
      console.log("inside reducer", action);
      state.rating = action.payload.rating;
    },
  },
});

export const userSelectionActions = userSelection.actions;
export const userSelectionReducers = userSelection.reducer;
