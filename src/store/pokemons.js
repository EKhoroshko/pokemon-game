import { createSlice } from '@reduxjs/toolkit';
import { selectLocalID } from '../store/user';

export const slice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  reducers: {
    fetchPokemons: state => ({
      ...state,
      isLoading: true,
    }),
    fetchPokemonResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchPokemonReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
  }
});


export const { fetchPokemons, fetchPokemonResolve, fetchPokemonReject } = slice.actions;

export const selectPokemonLoading = state => state.pokemons.isLoading;
export const selectPokemonData = state => state.pokemons.data;

export const getPokemonsAsync = () => async (dispatch, getState) => {
  const localId = selectLocalID(getState())
  const idToken = localStorage.getItem('idToken')
  dispatch(fetchPokemons());
  const data = await fetch(`https://pokemon-3f169-default-rtdb.firebaseio.com/${localId}/pokemons.json?auth=${idToken}`)
    .then(response => response.json());
  dispatch(fetchPokemonResolve(data));
}

export const addPokemonAsync = (pokemon, localId) => async (dispatch) => {
  const idToken = localStorage.getItem('idToken')
  dispatch(fetchPokemons());
  await fetch(`https://pokemon-3f169-default-rtdb.firebaseio.com/${localId}/pokemons.json?auth=${idToken}`, {
    method: 'POST',
    body: JSON.stringify(pokemon),
  }).then(res => res.json());
}

export default slice.reducer;