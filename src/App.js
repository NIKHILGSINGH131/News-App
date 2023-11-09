import Counter from "./components/Conter";
import Fruits from "./components/Fruits";
import Notes from "./components/Notes";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import React, { useState } from 'react'
import UserForm from "./12. forms and hooks/UserForm";
import Hooks from "./12. forms and hooks/Hooks";
import NewsApp from "./12. forms and hooks/NewsApp";

function App() {

  const [countInParent,setcountInParent ]=useState(0);

  function updateCountInParent(count){
    setcountInParent(count)
  }
  function uploadData(){
    console.log("uploading data");
  }

  return (
    <div>
      {/* <Counter /> */}
      {/* <Fruits/> */}
      {/* <Notes/> */}
      {/* <p>Inside Child1:{countInParent} </p>
      <Child1 onCountChange={updateCountInParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData}  /> */}
      {/* <UserForm /> */}
      {/* <Hooks /> */}
      <NewsApp/>
    </div>
  );
}

export default App;
