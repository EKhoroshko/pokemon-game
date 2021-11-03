import { useSelector, useDispatch } from 'react-redux';
import { selectCounterData } from '../../../../store/counter';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setPokemonData, clearChose } from '../../../../store/selectedPokemon';
import { addPokemonAsync } from '../../../../store/pokemons';
import { selectLocalID } from '../../../../store/user';
import { selectPokemonData, clearState } from '../../../../store/secondPlayer'
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import cn from 'classnames';
import css from '../Finish/Finish.module.css';

const FinishPage = () => {
  const counter = useSelector(selectCounterData);
  const pokemonSelect = useSelector(setPokemonData);
  const secondPlayer = useSelector(selectPokemonData);
  const localId = useSelector(selectLocalID);
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [chouseCard, setChouseCard] = useState(null)
  const history = useHistory();

  if (Object.values(pokemonSelect).length === 0) {
    history.replace('/game')
  }

  useEffect(() => {
    setPlayer1(pokemonSelect);
    setPlayer2(secondPlayer);
  }, [pokemonSelect, secondPlayer]);

  const refreshPage = () => {
    dispatch(clearState());
    dispatch(clearChose());
    history.push('/game');
  }

  const handleClick = () => {
    if (counter > 5) {
      dispatch(addPokemonAsync(chouseCard, localId));
      refreshPage();
    } else {
      refreshPage();
    }
  }

  return (
    <section className={css.finish}>
      <h1>Your score</h1>
      <div className={css.playerOne}>
        {Object.values(player1).map((item) =>
          <PokemonCard
            className={css.card}
            key={item.id}
            type={item.type}
            img={item.img}
            name={item.name}
            values={item.values}
            id={item.id}
            isActive
          />
        )}
      </div>

      <button onClick={handleClick}> end game</button>

      <div className={css.playerTwo}>

        {Object.values(player2).map((item) =>
          <div className={cn(css.card, { [css.selected]: chouseCard === item })}
            onClick={() => {
              if (counter > 5) {
                setChouseCard(item);
              }
            }}
            key={item.id}
          >
            <PokemonCard
              className={css.card}
              key={item.id}
              type={item.type}
              img={item.img}
              name={item.name}
              values={item.values}
              id={item.id}
              isActive
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default FinishPage;