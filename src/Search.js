import { useState } from "react";
import searchIcon from './search.svg'
export default function Search({setMovie}){
    const [value, setValue] = useState("");
    function getMovie(){
        console.log(value)
        setMovie(value)
    }

    return (
        <>
        <h1>Movie App</h1>
          <div className='search'>
              <input
                placeholder='Search for movies'
                value= {value}
                onChange={(e)=> setValue(e.target.value)}
               />
               <img
                src={searchIcon}
                alt='search'
                onClick={getMovie}
               />
          </div>
        </>
    )
}