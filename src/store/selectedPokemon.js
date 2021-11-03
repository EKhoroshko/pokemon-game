import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'selectToGame',
  initialState: {
    data: {},
  },
  reducers: {
    addPokemon: (state, { payload: { key, pokemon } }) => {
      const copyState = { ...state.data };
      if (copyState[key]) {
        delete copyState[key];
        return { ...state, data: copyState }
      }
      copyState[key] = pokemon;
      return { ...state, data: copyState }
    },

    clearChose: () => ({
      data: {},
    })
  }
});

export const { addPokemon, clearChose } = slice.actions;

export const setPokemonData = state => state.selectToGame.data;

export default slice.reducer;