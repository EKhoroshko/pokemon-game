import { PokemonContext } from '../../../../Context/PokemonContext';
import { FirebaseContext } from '../../../../Context/FirebaseContext';
import { useHistory } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import cn from 'classnames';
import css from '../Finish/Finish.module.css';

const FinishPage = () => {
    const { addPokemon } = useContext(FirebaseContext);
    const { pokemon, playerTwo, clearContext, updatePokemon2, counter } = useContext(PokemonContext);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [chouseCard, setChouseCard] = useState(null)
    const history = useHistory();

    if (Object.values(pokemon).length === 0) {
        history.replace('/game')
    }

    useEffect(() => {
        setPlayer1(pokemon);
        setPlayer2(playerTwo);
    }, [playerTwo, pokemon]);

    const refreshPage = () => {
        clearContext();
        history.push('/game');
        updatePokemon2();
    }

    const handleClick = () => {
        if (counter > 5) {
            addPokemon(chouseCard);
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
                            setChouseCard(item);
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