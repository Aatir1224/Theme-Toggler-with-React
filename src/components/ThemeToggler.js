import React,{useContext} from 'react';
import ThemeContext from '../context/ThemeContext'

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div onClick={
            ()=>
            {
                setThemeMode(themeMode === "light" ? "dark":"light")
            }}
        >
            {/* <span>{themeMode === "light"? "Turn OFF":"lights on"} </span> */}
            <button>{themeMode === "light"? "Turn OFF":"Lights On"}</button>
        </div>
    )
}

export default ThemeToggler;