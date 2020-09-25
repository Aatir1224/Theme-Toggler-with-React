import React from 'react';
import ThemeToggler from '../components/ThemeToggler';

const Header = () => {
    return(
        <header>
            <h1 style={{textAlign:"center"}}>Theme Toggler</h1>
            <ThemeToggler />
        </header>
    )
}

export default Header;