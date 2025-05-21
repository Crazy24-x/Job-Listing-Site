// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        auth: authReducer,
    },
});

export default store;