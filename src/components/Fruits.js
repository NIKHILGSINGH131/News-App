import React, { useState } from 'react'

function Fruits() {

    const [fruite,setFruite]=useState('');
    const [inputText , setInputText]=useState('');  

    function updateFruite() {
         setFruite(inputText)
    }

    function updateInputText(event){
      const currentValue= event.target.value;
      setInputText(currentValue);
    }
  return (
    <>
        <p>The value of fruite is {fruite}</p>
        <input type="text" onChange={updateInputText} />
        {/* <button onClick={()=> setFruite('Papaya')} >Papaya</button>
        <button onClick={()=> setFruite('Manga')} >Manga</button> */}
        <button onClick={()=> updateFruite()} >Submit</button>
        
    </>
  )
}

export default Fruits