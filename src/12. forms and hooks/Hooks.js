import React, { useEffect, useRef, useState } from 'react'

function Hooks() {

    const [counter,setCounter]=useState(0);
    let normalcount=0;
    const refCounter=useRef(0);
    useEffect(()=>{
        console.log('state count', counter);
        console.log('normal count' , normalcount);
        console.log('ref counter', refCounter.current);

        return ()=>{
            console.log('unmounting');
        }
    })

    function increment(){
        setCounter(counter+1);
        normalcount=normalcount+1;
        refCounter.current=refCounter.current+1;
    }

    

  return (
    <div>
        <p>{counter}</p>
        
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Hooks