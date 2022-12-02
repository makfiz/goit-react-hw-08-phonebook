import { createSlice } from "@reduxjs/toolkit";

import { filterInitialState } from "redux/contacts/constants";


const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        filterByValue(state, action) {
            state.value = action.payload;
        }
    }

})

export const { filterByValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;