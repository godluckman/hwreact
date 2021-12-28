import React from 'react';

type NavType = {
    title: string,
    link: string,
}

const Nav = ({props}: {props: Array<NavType>}) => {

    return(
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                {props.map((prop) => (
                    <li key={prop.title}><a href={prop.link}>{prop.title}</a></li>
                ))}
            </ul>
        </div>
    </nav>

    );
}

export default Nav;