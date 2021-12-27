import React from 'react';

type NavType = {
    title: string,
    link: string,
}

const Nav = ({props}: {props: Array<NavType>}) => {

    return(
        <nav>
            {props.map((prop, i) => (
                <a key={i} href={prop.link}>{prop.title}</a>
            ))}
        </nav>
    );
}

export default Nav;