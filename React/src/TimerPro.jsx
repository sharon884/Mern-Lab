import { useEffect,useState } from "react";

export const TimerPro  = ( {number,from}) => {


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



    useEffect(() => {
        if ( !running ) return;
        from(time)
    },[time, from, running]);


    
    return (
        <>
         <h1> {time}</h1>

         <h1>Time from automatic timer component : {number}</h1>
         <button onClick={()=> setRunning(true)}>start</button>
         <button onClick={()=> setRunning(false)}>stop</button>
         {/* <button onClick={()=> from(20)}>send to parrent</button> */}
        </>
    )
};