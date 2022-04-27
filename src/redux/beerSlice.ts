import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchBeers = createAsyncThunk("beers/fetchBeers", async () => {
  const response = await axios.get(
    "https://api.punkapi.com/v2/beers?per_page=10"
  );
  return response.data;
});

export const searchBeers = createAsyncThunk(
  "beers/searchBeers",
  async (search: string) => {
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers?beer_name=${search}`
    );
    return data;
  }
);

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    remote: [] as Beer[],
    local: [] as Beer[],
    removed: [] as number[],
  },
  reducers: {
    addBeer: (state, { payload }) => {
      state.local.unshift(payload);
    },
    removeBeer: (state, action: PayloadAction<number>) => {
      const index = state.local.findIndex((beer) => beer.id === action.payload);

      if (index > -1) state.local.splice(index, 1);
      else state.removed.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBeers.fulfilled, (state, action) => {
      state.remote = action.payload;
    });
    builder.addCase(searchBeers.fulfilled, (state, action) => {
      state.remote = action.payload;
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
export const { addBeer, removeBeer } = beerSlice.actions;
