import { createSlice } from '@reduxjs/toolkit';
import FirebaseClass from '../service/firebase';

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

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons());
    const data = await FirebaseClass.getPokemonsOnce();
    dispatch(fetchPokemonResolve(data));
}

export const addPokemonAsync = (pokemon) => {
    FirebaseClass.addPokemon(pokemon)
}

export default slice.reducer;