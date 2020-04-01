import React, { useRef } from 'react';
import employees from '../../employees';

function Search(){
    const inputRef = useRef();

    function searchEmpl(){
        console.log(inputRef.current.value);
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Name of Employee"
                ref={inputRef}
            ></input>
            <button
                onClick={() => searchEmpl()}
            >Search</button>
            <div id="result"></div>
        </div>
    )
}

export default Search;