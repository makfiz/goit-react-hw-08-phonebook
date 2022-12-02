import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { register, logIn, logOut } from "redux/auth/operations";
import { authInitialState } from "redux/auth/constants";



// const extraActions = [fetchContacts, addContact, deleteContact]

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
            state.isLoggedIn = true
            // state.items = action.payload
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
            state.isLoggedIn = true
            // state.items.push(action.payload)
        })
        .addCase(logOut.fulfilled, (state) => {
            state.token = null
            state.user = { name: null, email: null }
            state.isLoggedIn = false
            // const index = state.items.findIndex(contact => contact.id === action.payload.id)
            // state.items.splice(index, 1);
        })
        // .addMatcher(
        //     isAnyOf(
        //         ...extraActions.map(action => action.pending)
        //     ),
        //     state => {
        //         state.isLoading = true;
        //     }
        // )   
        // .addMatcher(
        //     isAnyOf(
        //         ...extraActions.map(action => action.rejected)
        //     ),
        //     (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload
        //     }
        // )
        // .addMatcher(
        //     isAnyOf(
        //         ...extraActions.map(action => action.fulfilled)
        //     ),
        //     state => {
        //         state.isLoading = false;
        //         state.error = null;
        //     }
        // )
    }
})
export const authReducer = authSlice.reducer;
