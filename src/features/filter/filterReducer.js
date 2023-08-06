import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
    isLoding: true,
  items: [],
  sizes:[]
};
export const fetchFilterData = createAsyncThunk(
  "filterData/fetchFilterData",
  async (id) => {
    const respons = await publicRequest.post(`product/getFilterParameter`,{"mainCategoryId":id});
    return respons.data.data;
  }
);
export const fetchFilteredSizes = createAsyncThunk(
  "filterData/fetchFilteredSizes",
  async (id) => {
    const respons = await publicRequest.post(`product/getFilterParameter`,{"mainCategoryId":id});
    return respons.data.data.sizes.sort((a,b)=>a.serial - b.serial);
  }
);

const filterReducer = createSlice({
  name: "filterData",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilterData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
      state.isLoding = false;
    },
    [fetchFilteredSizes.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.sizes = action.payload;
      state.isLoding = false;
    },
  },
});

export default filterReducer.reducer;
