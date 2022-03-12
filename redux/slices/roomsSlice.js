import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const name = "rooms";
const initialState = {
  loaded: false,
  fetching: true,
  data: [],
  error: {
    status: false,
    message: "",
  },
};
const url = process.env.API_URL + "/rooms";

export const getRooms = createAsyncThunk(`${name}/getRooms`, async () => {
  const data = await fetch(url);
  return data.json();
});

const roomsSlice = createSlice({
  name,
  initialState,
  extraReducers: {
    [getRooms.pending]: (state, action) => {
      state.fetching = true;
    },
    [getRooms.fulfilled]: (state, { payload }) => {
      state.fetching = false;
      state.loaded = true;
      state.data = payload;
    },
    [getRooms.rejected]: (state, { payload }) => {
      state.fetching = false;
      state.error = {
        status: true,
        message: payload,
      };
      state.loaded = true;
    },
  },
});

export default roomsSlice.reducer;
