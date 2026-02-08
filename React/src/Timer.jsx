import React from "react";
import { useState,useEffect } from "react";


function Timer () {

const [ Time, setTime  ] = useState(0);


   useEffect(()=> {

     let interval = setInterval(()=> {
        setTime(prev=> prev +1);
     },1000);


     return ()=> {
     
         clearInterval(interval);
     } 

   },[])

    return (
        <>
        <h1> Timer :  {Time}</h1>
        

           {/* <button>Click</button> */}
        </>
    )
};


export default Timer; 