import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
    isLoding: true,
  items: {},
};
export const fetchBannerImages = createAsyncThunk(
  "banners/fetchBannerImages",
  async () => {
    const respons = await publicRequest.post(`banner/BannersList`);
    return respons.data.data;
  }
);

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBannerImages.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
      state.isLoding = false;
    },
  },
});

export default bannerSlice.reducer;
