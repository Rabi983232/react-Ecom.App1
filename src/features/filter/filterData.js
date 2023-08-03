import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoding: true,
    colors: [],
};
export const setFilterData = createAsyncThunk(
    "filterData/fetchFilterData",
    async (data) => {
        return data;
    }
);

const filterDataReducer = createSlice({
    name: "filterData",
    initialState,
    reducers: {},
    extraReducers: {
        [setFilterData.fulfilled]: (state, action) => {
            state.colors = action.payload;
            console.log(action.payload);
            state.isLoding = false;
        },
    },
});

export default filterDataReducer.reducer;
