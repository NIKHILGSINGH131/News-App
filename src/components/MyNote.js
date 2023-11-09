import React from 'react'

function MyNote(props) {

    const notestyle={
        padding:'20px',
        borderRadius:'10px',
        border:'2px solid green',
        backgroundColor:'#eff2e4'
    }
  return (
    <div style={notestyle} className='singleNote'>
        <p className='noteText'>{props.note}</p>
    </div>
  )
}

export default MyNote