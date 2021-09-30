import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'counter',
    initialState: {
        data: 0,
    },
    reducers: {
        saveCounter: (state, action) => ({
            ...state,
            data: action.payload,
        }),
    }
});

export const { saveCounter } = slice.actions;

export const selectCounterData = state => state.counter.data;

export default slice.reducer;