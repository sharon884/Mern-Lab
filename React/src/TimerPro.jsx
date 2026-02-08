import { useEffect,useState } from "react";

export const TimerPro  = () => {


    const [ time , setTime  ] = useState(0);

    const [ running , setRunning ] = useState(false);

    useEffect(()=> {

        if ( !running ) return ;

     let interval = setInterval(()=> {
        setTime(prev=> prev+1);
     },1000);



     return ()=> {
        clearInterval(interval);
     };


    },[running]);

    return (
        <>
         <h1> {time}</h1>
         <button onClick={()=> setRunning(true)}>start</button>
         <button onClick={()=> setRunning(false)}>stop</button>
        </>
    )
};