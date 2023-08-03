import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
    isLoding: true,
  items: [],
};
export const fetchFilterData = createAsyncThunk(
  "filterData/fetchFilterData",
  async (id) => {
    const respons = await publicRequest.post(`product/getFilterParameter`,{"mainCategoryId":id});
    return respons.data.data;
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
  },
});

export default filterReducer.reducer;
