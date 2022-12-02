import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk("auth/register", async (userObj, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", userObj)
        setAuthHeader(response.data.token)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/login", async (userObj, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", userObj)
        setAuthHeader(response.data.token)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout")
        clearAuthHeader()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
        return thunkAPI.rejectWithValue("unauthorized access");
    }
    try {
        setAuthHeader(persistedToken);
        await axios.get("/users/current")
        // add code
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})