/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import css from '../NavBar/NavBar.module.css';

const NavBar = ({ isActive, handleClickBurgger, bgActive = false }) => {
    return (
        <nav className={cn(css.root, { [css.bgActive]: bgActive })}>
            <div className={css.navWrapper}>
                <p className={css.brand}>
                    LOGO
                </p>
                <a className={cn(css.menuButton, { [css.active]: isActive })}
                    onClick={() => handleClickBurgger()}>
                    <span />
                </a>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    handleClickButton: PropTypes.func,
    isActive: PropTypes.bool,
    bgActive: PropTypes.bool,
};

export default NavBar;