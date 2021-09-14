import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';
import NavBar from '../NavBar/NavBar';

const MenuHeader = () => {
    const [isActive, setIsActive] = useState(null);

    const handleClickButton = () => {
        setIsActive(!isActive);
    }

    return (
        <section>
            <NavBar isActive={isActive} handleClickButton={handleClickButton} />
            <Menu isActive={isActive} />
        </section>
    );
}

MenuHeader.propTypes = {
    handleChangePage: PropTypes.func,
};

export default MenuHeader;