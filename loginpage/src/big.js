import React from "react";
import { useState } from "react";

function Big () {

    const [Dark,setDark] = useState("1");

    const Toggle = () =>{
        console.log("changed")
        if(Dark==="1"){console.log("Dark");setDark("0");}
        else{console.log("Light");setDark("1");}
    }
    return(
        <>
        <h2>Big</h2>
        <input type="checkbox" name="Big" id=""Big onChange={Toggle} />
        </>
        
    );
}

export default Big;