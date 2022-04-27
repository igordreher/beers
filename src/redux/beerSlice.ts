import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBeers = createAsyncThunk(
  "beers/fetchBeersStatus",
  async () => {
    const response = await axios.get(
      "https://api.punkapi.com/v2/beers?per_page=10"
    );
    return response.data as Beer[];
  }
);

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    value: [] as Beer[],
    isLoading: false,
    error: "",
  },
  reducers: {
    setBeers: (state, { payload }) => {
      state.value = payload;
    },
    addBeer: (state, { payload }) => {
      state.value.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBeers.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBeers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBeers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message!;
    });
  },
});

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
}

export default beerSlice.reducer;
export const { addBeer, setBeers } = beerSlice.actions;
