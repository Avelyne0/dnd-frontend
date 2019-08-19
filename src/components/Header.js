import React from 'react';
import Logo from './Logo.png'

const Header = () => {
    return(
        <div id="header">
            <img id="logo" src={Logo} alt="logo"/>
        </div>
    )
}

export default Header