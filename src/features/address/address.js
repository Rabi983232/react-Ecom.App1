import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
    isLoding: true,
  items: [],
};
export const fetchAddress = createAsyncThunk(
  "addressList/fetchAddress",
  async (id) => {
    console.log(id)
    const respons = await publicRequest.post(`address/getAllAddress`,{'userId':id});
    return respons.data.data;
  }
);

const addressSlice = createSlice({
  name: "addressList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAddress.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
      state.isLoding = false;
    },
  },
});

export default addressSlice.reducer;
