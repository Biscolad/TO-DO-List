import React from 'react'
import { useState } from 'react'


function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  //handle change event
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

 

  return (
    <div className = "container">
      <div className="heading">
        <h1>TO-DO-LIST</h1>
      </div>

      <div>
        <input onChange={handleChange} type="text" value = {inputText} />
        <button onClick = {addItem} >
          <span>Add</span>
        </button>

        {/* <button>
          <span>Edit</span>
        </button> */}

      </div>

      <div>
        <ol>
          {items.map(todoItem => <li>{todoItem}</li>)}
  
        </ol>
      </div>

      
    </div>
  )
}

export default App
