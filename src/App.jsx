import React from 'react';
import { useState } from 'react';


function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  //handle change event
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  //add items to list using spread operators and array
  function addItem() {
    setItems(prevItems => [...prevItems, { text: inputText, completed: false }]);
    
    //inorder to clear field, set input text to empty string after clicking add button to add items to list
    setInputText("");
  } 

  //toggle the completion status of an item that is added
  function toggleComplete(index) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], completed: !newItems[index].completed };
      return newItems;
    })
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
          {items.map((todoItem, index) => ( 
          <li key={index}>
            <input 

            //add checkbox to list items
              type="checkbox"
              checked={todoItem.completed}
              onChange={() => toggleComplete(index)} 
              />
              {todoItem.text}
          </li>
          ))}
  
        </ol>
      </div>

      
    </div>
  )
}

export default App
