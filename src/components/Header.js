// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return ( <
        div className = 'header' >
        <
        center >
        <
        h1 > Call a Friend < /h1> <
        h4 > Your friendly contact app < /h4> <
        h4 class = "dot" > .................................................................................... < /h4><br / > < br / > < /
        center >
        <
        /div>
    )
}

export default Header;