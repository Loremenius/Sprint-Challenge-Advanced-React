import {useEffect} from 'react';
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage('darkMode');

    useEffect(()=>{
        const body = document.body;

        if(darkMode === true){
           body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode');
        }
    },[darkMode]);

    return [darkMode, setDarkMode];
}