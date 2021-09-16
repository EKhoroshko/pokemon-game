import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import css from '../Game/Game.module.css';
import data from '../../base/db.json';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const GamePage = () => {
    const [pokemons, setPokemons] = useState(data)
    const history = useHistory();

    const handlClickCard = (id) => {
        setPokemons(pokemons.map(card => {
            if (card.id === id) {
                card.active = !card.active;
            }
            return card;
        }));
    }

    const handleClick = () => {
        history.push('/');
    }

    return (
        <section>

            <button type="button" onClick={handleClick}> Go back</button>
            <h1> This Game Page</h1>

            <div className={css.flex}>
                {pokemons.map(({ type, img, name, values, id, active }) => (
                    <PokemonCard
                        key={id}
                        type={type}
                        img={img}
                        name={name}
                        values={values}
                        id={id}
                        isActive={active}
                        handlClickCard={handlClickCard}
                    />
                ))}
            </div>
        </section>

    );
}

export default GamePage;