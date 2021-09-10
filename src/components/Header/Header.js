import PropTypes from 'prop-types';
import React from 'react';
import css from '../Header/Header.module.css'

const Header = ({ title, descr }) => {
    return (
        <header className={css.root}>
            <div className={css.forest}></div>
            <div className={css.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
};

export default Header;