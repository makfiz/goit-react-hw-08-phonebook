import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { register, logIn, logOut, refresh } from "redux/auth/operations";
import { authInitialState } from "redux/auth/constants";



// const extraActions = [fetchContacts, addContact, deleteContact]

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    extraReducers: builder => {
        builder.addCase(logOut.fulfilled, (state) => {
            state.token = null
            state.user = { name: null, email: null }
            state.isLoggedIn = false
        })
        .addCase(refresh.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
           
        }).addCase(logIn.pending, (state) => {
            state.isLoading = true
        }).addCase(logIn.rejected, (state) => {
            state.isLoading = false
        }).addCase(register.pending, (state) => {
            state.isLoading = true
        }).addCase(register.rejected, (state) => {
            state.isLoading = false
        })
        .addMatcher(
            isAnyOf(refresh.fulfilled,
                refresh.rejected,  
            ),
            state => {
                state.isRefreshing = false
            }
        )
        .addMatcher(
            isAnyOf(register.fulfilled,
                logIn.fulfilled,  
            ),
            (state, action) => {
                state.token = action.payload.token
                state.user = action.payload.user
                state.isLoggedIn = true
                state.isLoading = false
            }
        )      
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
