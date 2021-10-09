import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'counter',
    initialState: {
        data: 0,
        type: '',
    },
    reducers: {
        saveCounter: (state, action) => ({
            ...state,
            data: action.payload,
        }),
        saveType: (state, action) => ({
            ...state,
            type: action.payload,
        }),
    }
});

export const { saveCounter, saveType } = slice.actions;

export const selectCounterData = state => state.counter.data;
export const selectTypeData = state => state.counter.type;

export default slice.reducer;