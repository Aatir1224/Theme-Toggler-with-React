import React,{useContext, useState} from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../Colors';

const HeroSection = () => {
    
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return(
        <div style={{
            backgroundColor:`${currentTheme.backgroundColor}`,
            padding:"1rem",
            color:`${currentTheme.textColor}`,
            textAlign:"center",
            height:"80vh"
        }}>
            <h1>Context API Theme Toggler</h1>
            <p>This is A paragraph</p>
            
        </div>
    )
}

export default HeroSection;