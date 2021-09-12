import React, { useState } from 'react';
import card from '../../assets/imges/card-back-side.jpg'
import PropTypes from 'prop-types';
import css from '../PokemonCard/PokemonCard.module.css';

function PokemonCard({ type, img, name, values, id }) {
    const [isActive, setIsActive] = useState(false)

    const handlClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={css.root} onClick={handlClick}>
            <div className={`${css.pokemonCard} ${isActive ? css.active : ''}`}>
                <div className={css.cardFront}>
                    <div className={`${css.wrap} ${css.front}`}>
                        <div className={`${css.pokemon} ${css[type]}`}>
                            <div className={css.values}>
                                <div className={`${css.count} ${css.top}`}>{values.top}</div>
                                <div className={`${css.count} ${css.right}`}>{values.right}</div>
                                <div className={`${css.count} ${css.bottom}`}>{values.bottom}</div>
                                <div className={`${css.count} ${css.left}`}>{values.left}</div>
                            </div>
                            <div className={css.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={css.info}>
                                <span className={css.number}>#{id}</span>
                                <h3 className={css.name}>{name}</h3>
                                <small className={css.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.cardBack}>
                    <div className={`${css.wrap} ${css.back}`}>
                        <img src={card} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div >
    );
}

PokemonCard.propTypes = {
    type: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.object,
    id: PropTypes.number,
};

export default PokemonCard;