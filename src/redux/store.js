import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";
import {authReducer } from "./auth/authSlice";


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistedReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store)