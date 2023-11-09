import React, { useState } from 'react'

function Child1(props) {
const [countInChild,setcountInChild ]=useState(0);

function updateCountInChild1(){
    setcountInChild(countInChild+1)
    props.onCountChange(countInChild+1 );
}

  return (
    <div>
        <p>Inside Child1:{countInChild} </p>
        <button onClick={updateCountInChild1}>
            Increment
        </button>
    </div>
  )
}

export default Child1