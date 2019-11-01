import {useEffect} from 'react';
import {useLocalStorage} from "./useLocalStorage";

export const useSortArray = (changeList,originalArray) =>{
    const [sortArray, setSortArray] = useLocalStorage('sortArray');

    const compare = (a, b)=> {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
      
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      }

    useEffect(()=>{

        if(sortArray === true){
           changeList(originalArray.sort(compare));
        }else{
            changeList(originalArray);
        }
    },[sortArray]);

    return [sortArray, setSortArray];
}