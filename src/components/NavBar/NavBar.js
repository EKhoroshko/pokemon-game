/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import css from '../NavBar/NavBar.module.css';
import cn from 'classnames';

const NavBar = ({ isActive, handleClickButton }) => {
    return (
        <nav className={css.root}>
            <div className={css.navWrapper}>
                <p className={css.brand}>
                    LOGO
                </p>
                <a className={cn(css.menuButton, { [css.active]: isActive })}
                    onClick={() => handleClickButton()}>
                    <span />
                </a>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    handleClickButton: PropTypes.func,
    isActive: PropTypes.bool,
};

export default NavBar;