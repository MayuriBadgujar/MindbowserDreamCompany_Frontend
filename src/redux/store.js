// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice.js';
import storage from 'redux-persist/lib/storage/index.js';
import {persistReducer,persistStore} from 'redux-persist'



const persistConfig = {
  key: 'auth',
  storage: {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
  },
};
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const peristor=persistStore(store)
