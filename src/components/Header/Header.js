import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import React from 'react';
import css from '../Header/Header.module.css'

const Header = ({ title, descr }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('game');
    }

    return (
        <header className={css.root}>
            <div className={css.forest}></div>
            <div className={css.silhouette}></div>
            <div className={css.moon}></div>
            <div className={css.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button className={css.button} type="button" onClick={handleClick}>start game</button>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
};

export default Header;