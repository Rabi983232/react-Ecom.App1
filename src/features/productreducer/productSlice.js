import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";

const initialState = {
  isLoding: true,
  items: {},
  selectedCategry: [],
  selectedCategryProduct: {},
  filteredProducts:[]
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const respons = await publicRequest.post(`/product/getProductList`);
    return respons.data.data;
  }
);
export const fetchFilterProduct = createAsyncThunk(
  "products/fetchFilterProduct",
  async (params)=>{
    console.log(params)
    const respons = await publicRequest.post(`/product/getFilterProductList`,params);
    console.log("getFilterProductList - ")
    console.log(respons.data)
    return respons.data.data;
  }
)
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (id) => {
    if (!id) {
      const respons = await publicRequest.post(`/product/getProductList`, {});
      return respons.data.data;
    }
    if (id) {
      const respons = await publicRequest.post(`/product/getProductList`, {
        mainCategoryId: id,
      });
      return respons.data.data;
    }

  }
);
export const fetchProductsByCategoryAndP_id = createAsyncThunk(
  "products/fetchProductsByCategoryAndP_id",
  async (P_id) => {
    console.log(P_id);
    const respons = await publicRequest.post(`/product/getProductList`, { "productId": P_id });
    return respons.data.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoding = true;
      //   console.log(action.payload);
      state.items = action.payload;
      state.isLoding = false;
    },
    [fetchProductsByCategory.fulfilled]: (state, action) => {
      state.isLoding = true;
      console.log(action.payload);
      state.selectedCategry = action.payload;
      state.isLoding = false;
    },
    [fetchProductsByCategoryAndP_id.fulfilled]: (state, action) => {
      state.isLoding = true;
      console.log(action.payload);
      state.selectedCategryProduct = action.payload;
      state.isLoding = false;
    },
    [fetchFilterProduct.fulfilled]: (state, action) => {
      state.isLoding = true;
      console.log(action.payload);
      state.filteredProducts = action.payload;
      state.isLoding = false;
    },
  },
});

export default productSlice.reducer;
