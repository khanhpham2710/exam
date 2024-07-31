import React from "react";
import { useState } from "react";
import { forwardRef } from "react";


function SearchBar(prop){
    const { setRef, setAdd } = prop
    const [text,setText] = useState("")


    function handleSearch(){
        setRef(text)
        setText("")
        setAdd(false)
    }

    return (
        <div id="searchbar">
            <input value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar
