import React,{useContext} from "react";
import ThemeContext from '../src/ThemeContext';

const themeTogglerStyle = {
    cursor: "pointer"
}
const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);
    const changetheme = () => {
        console.log('me idhar hn')
        setThemeMode(themeMode === "light"? "dark": "light")
    }
        return(
            <div style = {themeTogglerStyle} onClick={changetheme}>
            <span title = "switch theme">
                {themeMode === "light" ? "🌙" : "☀️"}
            </span>
        </div>
    );
}

export default ThemeToggler;