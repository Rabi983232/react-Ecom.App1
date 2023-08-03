import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
    isLoding: true,
  items: [],
};
export const fetchNavItems = createAsyncThunk(
  "navItems/fetchNavItems",
  async () => {
    const respons = await publicRequest.post(`mainCategory/categoryList`);
    return respons.data.data;
  }
);

const navSlice = createSlice({
  name: "navItems",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNavItems.fulfilled]: (state, action) => {
    //   console.log(action.payload);
      state.items = action.payload;
      state.isLoding = false;
    },
  },
});

export default navSlice.reducer;
