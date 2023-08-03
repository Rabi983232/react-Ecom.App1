import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../../axios/axios";
const initialState = {
    isLoding: true,
    coupon: {}
}
export const fetchCouponList = createAsyncThunk(
    "couponData/fetchCouponList",
    async (couponCode) => {
        const respons = publicRequest.post(`coupon/getCouponList`, {
            couponCode: couponCode
        })
        return respons
    }
)
const couponList = createSlice({
    name: 'couponData',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCouponList.fulfilled]: (state, action) => {
            state.coupon = action.payload;
            console.log(action.payload);
            state.isLoding = false;
        }
    }

})
export default couponList.reducer;