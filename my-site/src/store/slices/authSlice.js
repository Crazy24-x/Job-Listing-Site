// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Helper function to get initial auth state from localStorage
const getInitialAuthState = () => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth
        ? JSON.parse(storedAuth)
        : {
            isAuthenticated: false,
            user: null,
            loading: false,
            error: null,
        };
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue, dispatch }) => {
        try {
            dispatch(loginStart());
            // In a real app, this would be an actual API call
            const response = await api.post('/auth/login', { email, password });
            dispatch(loginSuccess(response.data.user));
            return response.data.user;
        } catch (error) {
            dispatch(loginFailure(error.message));
            return rejectWithValue(error.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue, dispatch }) => {
        try {
            dispatch(registerStart());
            // In a real app, this would be an actual API call
            const response = await api.post('/auth/register', userData);
            dispatch(registerSuccess(response.data.user));
            return response.data.user;
        } catch (error) {
            dispatch(registerFailure(error.message));
            return rejectWithValue(error.message);
        }
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialAuthState(),
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
            state.error = null;
            // Save to localStorage
            localStorage.setItem('auth', JSON.stringify(state));
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
            // Remove from localStorage
            localStorage.removeItem('auth');
        },
        registerStart(state) {
            state.loading = true;
            state.error = null;
        },
        registerSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
            state.error = null;
            // Save to localStorage
            localStorage.setItem('auth', JSON.stringify(state));
        },
        registerFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    registerStart,
    registerSuccess,
    registerFailure,
} = authSlice.actions;

export default authSlice.reducer;