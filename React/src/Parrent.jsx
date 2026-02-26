import { useState  } from "react";

function Parrent () {
     const [ name , setName ] = useState("");

     const change = (e ) => {
      setName(e.target.value);
      
     }

     return (
        <>
        <h1>{name} </h1>
         <input type="text" value={name} onChange={change} />
        </>
     )
};


export default Parrent;