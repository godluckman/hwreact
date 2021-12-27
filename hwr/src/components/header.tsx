import React from 'react';

type HeaderProps = {
    logo: string,
    name: string
}

const Header = ( {logo, name}: HeaderProps ) => {
    return (
        <header>
            <img src={logo} alt='Logo'></img>
            <span>{name}</span>
        </header>
    );
}

export default Header;