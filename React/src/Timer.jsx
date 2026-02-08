import React from "react";
import { useState,useEffect } from "react";
import { TimerPro } from "./TimerPro";


function Timer () {

const [ Time, setTime  ] = useState(0);
const [ prop , setProp ] = useState(0);

function fromParrent ( data ) {
     setProp(data);
};


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
        

         <TimerPro number={Time} from= { fromParrent }/>

         <h1> from child : { prop}</h1>
        </>
    )
};


export default Timer; 