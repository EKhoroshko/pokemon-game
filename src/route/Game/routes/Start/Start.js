import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemonDataAll, getPokemonsAsync, selectPokemonLoading } from '../../../../store/pokemons';
import { addPokemon, setPokemonData, clearChose } from '../../../../store/selectedPokemon';
import { clearType } from '../../../../store/counter';
import { getPokemon } from '../../../../store/secondPlayer';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import Loader from '../../../../components/Loader/Loader';
import request from '../../../../service/request';

import css from '../Start/Start.module.css';

const StartPage = () => {
  let pokemonRedux = useSelector(selectPokemonDataAll);
  const pokemonSelect = useSelector(setPokemonData);
  const isLoading = useSelector(selectPokemonLoading);
  const dispatch = useDispatch();
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});

  if (!pokemonRedux) {
    history.push('/')
  }

  useEffect(() => {
    dispatch(getPokemonsAsync());
    dispatch(clearType(null));
    dispatch(clearChose());
  }, [dispatch]);

  useEffect(() => {
    setPokemons(pokemonRedux);
  }, [pokemonRedux]);

  const secondPlayerget = async () => {
    const player2Request = await request.gameStart({
      pokemons: Object.values(pokemonRedux),
    })
    dispatch(getPokemon(player2Request.data));
  }

  const handlClickCard = (key) => {
    const pokemon = { ...pokemons[key] }
    dispatch(addPokemon({ key, pokemon }))
    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected
      }
    }))
  }

  const handleClick = () => {
    history.push('/game/board');
    secondPlayerget();
  }

  return (
    <section>
      <h3 className={css.text}>Choose 5 Pokémon for your team</h3>
      <div className={css.addPoke}>
        <button onClick={handleClick}
          disabled={Object.keys(pokemonSelect).length < 5}
        > Start Game</button>
      </div>

      <div className={css.flex}>
        {isLoading && <Loader />}
        {Object.entries(pokemons).map(([key, { type, img, name, values, id, selected }]) => (
          <PokemonCard
            className={css.card}
            key={key}
            type={type}
            img={img}
            name={name}
            values={values}
            id={id}
            isSelected={selected}
            isActive={true}
            handlClickCard={() => {
              if (Object.keys(pokemonSelect).length < 5 || selected) {
                handlClickCard(key)
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default StartPage;