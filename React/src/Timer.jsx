import {  useEffect, useState  } from "react";


const Timer = () => {
     const [ time , setTime ] = useState(0);
     const [ runnig, setRunning] = useState(false);


     useEffect(() => {

        let intervalId ;
          if (  runnig ) {
              intervalId = setInterval(()=> {
                 setTime((prev) => prev + 1);
             },1000);
          };

          return () => {
            clearInterval(intervalId)
          }
     },[runnig])


const start = ()=> {
     setRunning( true );
};


const pause = ()=> {
     setRunning(false);

};


const reset = ()=> {
     setTime(0);
};


 return (
    <>
    
    <h1> { time} </h1>  
     <button onClick={start}>start</button>
     <button onClick={pause }>pause</button>
     <button onClick={reset}>reset</button>
    </>
 )

};


export default Timer;