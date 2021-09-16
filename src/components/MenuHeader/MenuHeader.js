import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';
import NavBar from '../NavBar/NavBar';

const MenuHeader = ({ bgActive }) => {
    const [isActive, setIsActive] = useState(null);

    const handleClickBurgger = () => {
        setIsActive(!isActive);
    }

    return (
        <section>
            <NavBar isActive={isActive} bgActive={bgActive} handleClickBurgger={handleClickBurgger} />
            <Menu isActive={isActive} handleClickBurgger={handleClickBurgger} />
        </section>
    );
}

MenuHeader.propTypes = {
    bgActive: PropTypes.bool,
};

export default MenuHeader;