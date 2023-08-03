import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
    isLoding: true,
  items: [],
};
export const fetchOrderedLists = createAsyncThunk(
  "orderedLists/fetchOrderedLists",
  async (id) => {
    const respons = await publicRequest.post(`orders/getOderList`,{
        "userId": id
    });
    return respons.data.data;
  }
);

const orderedSlice = createSlice({
  name: "orderedLists",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrderedLists.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
      state.isLoding = false;
    },
  },
});

export default orderedSlice.reducer;
