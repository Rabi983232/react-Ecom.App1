import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
    isLoding: true,
  items: [],
};
export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchCartItems",
  async (id) => {
    const respons = await publicRequest.post(`carts/getCartItems`,{'cartId':id});
    return respons.data.data;
  }
);

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCartItems.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
      state.isLoding = false;
    },
  },
});

export default cartSlice.reducer;
