import React from 'react';

const Footer = ({year}: {year: number}) => {

    return (
        <footer className="page-footer blue">
            <div className="footer-copyright">
                <div className="container">
                    © Copyright &copy;{year}
                </div>
            </div>
        </footer>
        );
}

export default Footer;

