import React from 'react';

const Footer = ({year}: {year: number}) => {

    return (
        <span>
      Copyright &copy;{year}
        </span>
        );
}

export default Footer;