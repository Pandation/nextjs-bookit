import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./slices/roomsSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
