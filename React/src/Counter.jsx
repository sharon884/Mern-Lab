import React from "react";
import { useState } from "react";
import { useEffect  } from "react";


function Counter () {

 const [ count , setCount  ] = useState(0);

 function increment () {
    setCount(prev => prev +1);
 };


 function decrement () {
    if ( count >0 ) {
        setCount( prev => prev -1);

    };
 };


 function reset () {
    setCount(0);
 };


 


    return (
        <>
      <h1> {count} </h1> 
      <button onClick={increment}>increment</button>   
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
        
        </>
    )
};

export default Counter;