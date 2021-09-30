import { createSlice } from '@reduxjs/toolkit';
import { fetcPlayer2 } from '../service/boardApi'

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

export const targetPokemon = () => async (dispatch) => {
    const data = await fetcPlayer2().then(({ data }) => data.map(item => ({
        ...item,
        possession: 'red',
    })));
    dispatch(getPokemon(data));
}

export default slice.reducer;