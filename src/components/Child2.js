import React from 'react'

function Child2(props) {

    const showPrivate=true;
  return (
    <div>
        <div>
            {showPrivate ?<p> This is private:gfyubkjugih</p>:<></> }
            {showPrivate &&<p> This is private:gfyubkjugih</p> }
        </div>
        <p> Inside child2:{props.countFromParent}</p>
        <button onClick={props.uploadData} >Upload data</button>
    </div>
  )
}

export default Child2