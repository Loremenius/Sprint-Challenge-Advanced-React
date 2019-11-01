import React from "react";
import {useDarkMode} from "../hooks/useDarkMode";
import {useSortArray} from "../hooks/useSortArray"

const Navbar = (props) =>{
    const [darkMode, setDarkMode] = useDarkMode();
    //const [sortMode, setSortMode] = useSortArray(props.changeList, props.ogList)
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    const toggleSort = e => {
        e.preventDefault();
       // setSortMode(!sortMode);

    }

    return(
        <div>
            <button onClick={toggleMode}>Dark Mode</button>
            {/* <button onClick={toggleSort}>Sort</button> */}
        </div>
    )
}

export default Navbar;