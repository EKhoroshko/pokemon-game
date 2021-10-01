/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Logotype } from '../../assets/imges/logo.svg';
import { ReactComponent as Login } from '../../assets/imges/login.svg';
import cn from 'classnames';
import css from '../NavBar/NavBar.module.css';

const NavBar = ({ onClicklogin, isActive, handleClickBurgger, bgActive = false }) => {
    return (
        <nav className={cn(css.root, { [css.bgActive]: bgActive })}>
            <div className={css.navWrapper}>
                <p className={css.brand}>
                    <Logotype className={css.logo} />
                </p>
                <div className={css.loginAndMenu}>
                    <div className={css.loginWrap}
                        onClick={onClicklogin}>
                        <Login />
                    </div>
                    <div className={cn(css.menuButton, { [css.active]: isActive })}
                        onClick={() => handleClickBurgger()}>
                        <span />
                    </div>
                </div>

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