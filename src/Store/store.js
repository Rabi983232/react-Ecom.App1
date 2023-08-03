import { configureStore } from "@reduxjs/toolkit";
import navreducer from "../features/navreducer/navreducer";
import productSlice from "../features/productreducer/productSlice";
import BannerReducer from "../features/Banner/BannerReducer";
import filterReducer from "../features/filter/filterReducer";
import cartReducer from "../features/cart/cartReducer";
import address from "../features/address/address";
import orderListReducer from "../features/orderList/orderListReducer";
import filterData from "../features/filter/filterData";
import counpon from "../features/coupon/counpon";


export const store = configureStore({
    reducer: {
        navItems: navreducer,
        products: productSlice,
        banners: BannerReducer,
        filterData: filterReducer,
        cartItems: cartReducer,
        addressList:address,
        orderedLists:orderListReducer,
        filterableData:filterData,
        couponData:counpon

    }
})