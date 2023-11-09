import React, { useRef, useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [fruite, setFruite] = useState("");

  const nameInputref = useRef(null);
  const fruiteInputref = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const nameInputValue = nameInputref.current.value;
    const fruitInputvalue = fruiteInputref.current.value;
    alert(nameInputValue + fruitInputvalue);
  }

  function handleChange(e) {
    console.log(e.target.value);
    setFruite(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", margin: "20px" }} action="">
      <label htmlFor="">Name</label>
      <input type="text" ref={nameInputref} />

      <select ref={fruiteInputref} onChange={handleChange}>
        <option value="grapeFruite">GrapeFruite</option>
        <option value="lime">Lime</option>
        <option value="coconut">Cocunut</option>
        <option value="mango">Mango</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default UserForm;
