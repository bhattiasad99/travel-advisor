import { configureStore } from "@reduxjs/toolkit";
import { userSelectionReducers } from "./user_selection";
import { restaurantReducers } from "./restaurant";
const store = configureStore({
  reducer: {
    userSelection: userSelectionReducers,
    restaurants: restaurantReducers,
  },
});

export default store;
