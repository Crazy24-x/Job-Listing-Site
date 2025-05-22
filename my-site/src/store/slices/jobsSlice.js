// src/store/slices/jobsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (_, { getState }) => {
    const { filters, sort } = getState().jobs;
    const response = await api.get('/jobs');
    let jobs = response.data;

    // Apply filters
    if (filters.search) {
        jobs = jobs.filter(job =>
            job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            job.company.name.toLowerCase().includes(filters.search.toLowerCase())
        );
    }

    if (filters.location) {
        jobs = jobs.filter(job =>
            job.location.toLowerCase().includes(filters.location.toLowerCase())
        );
    }

    if (filters.category) {
        jobs = jobs.filter(job =>
            job.tags.some(tag => tag.toLowerCase() === filters.category.toLowerCase())
        );
    }

    // Apply sorting
    if (sort.by === 'salary') {
        jobs.sort((a, b) => {
            const aSalary = parseInt(a.salary?.replace(/\D/g, '') || 0);
            const bSalary = parseInt(b.salary?.replace(/\D/g, '') || 0);
            return sort.direction === 'asc' ? aSalary - bSalary : bSalary - aSalary;
        });
    } else if (sort.by === 'date') {
        jobs.sort((a, b) => {
            const aDate = new Date(a.postedTime);
            const bDate = new Date(b.postedTime);
            return sort.direction === 'asc' ? aDate - bDate : bDate - aDate;
        });
    }

    return jobs;
});

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        loading: false,
        error: null,
        filters: {
            search: '',
            location: '',
            category: ''
        },
        sort: {
            by: null,
            direction: 'asc'
        }
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {
                search: '',
                location: '',
                category: ''
            };
        },
        setSort: (state, action) => {
            if (state.sort.by === action.payload) {
                state.sort.direction = state.sort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                state.sort.by = action.payload;
                state.sort.direction = 'asc';
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { setFilters, clearFilters, setSort } = jobsSlice.actions;
export default jobsSlice.reducer;