import React from 'react';
import { PokemonContext } from '../../../../Context/PokemonContext';
import { useContext } from 'react';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import css from '../Board/Board.module.css';

const BoardPage = () => {
    const { pokemon } = useContext(PokemonContext);

    return (
        <div className={css.root}>
            <div className={css.playerOne}>
                {
                    Object.values(pokemon).map(({ id, type, img, name, values }) => (
                        <PokemonCard
                            className={css.card}
                            key={id}
                            type={type}
                            img={img}
                            name={name}
                            values={values}
                            id={id}
                            isActive
                            minimize />
                    ))
                }
            </div>

            <div className={css.board}>
                <div className={css.boardPlate}>1</div>
                <div className={css.boardPlate}>2</div>
                <div className={css.boardPlate}>3</div>
                <div className={css.boardPlate}>4</div>
                <div className={css.boardPlate}>5</div>
                <div className={css.boardPlate}>6</div>
                <div className={css.boardPlate}>7</div>
                <div className={css.boardPlate}>8</div>
                <div className={css.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;