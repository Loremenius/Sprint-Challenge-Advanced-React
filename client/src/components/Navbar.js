import React from "react";
import {useDarkMode} from "../hooks/useDarkMode";

const Navbar = () =>{
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <div>
            <button onClick={toggleMode}>Dark Mode</button>
            <button>Sort</button>
        </div>
    )
}

export default Navbar;