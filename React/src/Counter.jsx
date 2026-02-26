import { useState } from "react";


function Counter() {
   const [time, setTime] = useState(0);

   const increase = () => {
      setTime((prev) => prev + 1);
   };


   const decrease = () => {

     setTime ( ( prev) =>  prev != 0 ? prev -1 : 0 );
   }


   const reset = () => {
      setTime(0);
   };



   return (
      <>

         {time}
         <button onClick={() => increase()}>increase</button>
         <button onClick={() => decrease()}>decrease</button>
         <button onClick={() => reset()}> reset </button>
      </>
   )
}

export default Counter;