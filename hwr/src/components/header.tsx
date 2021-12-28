import React from 'react';

type HeaderProps = {
    logo: string,
    name: string
}

const Header = ( {logo, name}: HeaderProps ) => {
    return (
        <header >
            <img src={logo} alt='Logo' height="50px"></img>
            <span className="flow-text project">{name}</span>
        </header>
    );
}

export default Header;