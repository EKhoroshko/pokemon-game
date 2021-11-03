import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'secondPlayer',
  initialState: {
    data: [],
  },
  reducers: {
    getPokemon: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    clearState: () => ({
      data: [],
    })
  }
});

export const { getPokemon, clearState } = slice.actions;

export const selectPokemonData = state => state.secondPlayer.data;

export default slice.reducer;