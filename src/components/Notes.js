import React, { useState } from 'react'
import MyNote from './MyNote';

function Notes() {

  const [notes , setNotes]=useState([]);
  const [curNote , setCurNote]=useState('');

  const[car ,setCar]=useState({
    model:'Innova',
    year: '2021',
    color:'white'

  })

  setCar({...car,color:'red'})

  function updateCurNote(event){
    setCurNote(event.target.value )
  }

  function addNote (event){
    const newNoteArry=[...notes,curNote];
    setNotes(newNoteArry);
  }

  const ulStyle={
    listStyle:'none',
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gap:'20px'
  }


  return (
  <>
  <input onChange={updateCurNote} type="text" />
  <button onClick={addNote} >Submit</button>
  <ul style={ulStyle}>
      {
        
        notes.map(function (note ,index) {
          return <li key={index} >
            <MyNote note={note}/>
            </li>;
        })
      }
    </ul>

  </>
  )
}

export default Notes 