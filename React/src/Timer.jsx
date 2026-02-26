import { useEffect, useState }  from "react";


const Timer = () => {

    const [ time , setTime ] = useState(0)
     
    useEffect(() => {
   
      const intervalId =     setInterval(() => {
           setTime((prev) => prev +1 );
        }, 1000);
      

        return () => {
             clearInterval(intervalId)
        }
         
    },[])


    return (
        <>
         { time }
        </>
    )
};


export default Timer;