import PropTypes from 'prop-types';
import React from 'react';
import css from '../Header/Header.module.css'

const Header = ({ title, descr, handleChangePage }) => {
    return (
        <header className={css.root}>
            <div className={css.forest}></div>
            <div className={css.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button className={css.button} type="button" onClick={() => handleChangePage('game')}> start game</button>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
    handleChangePage: PropTypes.func,
};

export default Header;