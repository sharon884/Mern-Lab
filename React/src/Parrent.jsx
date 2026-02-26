import { useState  } from "react";
import Child from "./Child";

function Parrent () {
     const [ name , setName ] = useState("");

     const change = (e ) => {
      setName(e.target.value);
      
     }

     return (
        <>
        <h1>{name} </h1>
         <input type="text" value={name} onChange={change} />
         <Child text={ name }/>
        </>
     )
};


export default Parrent;