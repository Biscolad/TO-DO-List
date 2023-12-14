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

  //to allow an item to be removed from the list
  function removeItem(index) {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems
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
      </div>

      <div>
        <ul>
          {items.map((todoItem, index) => ( 

            //change color of completed items and mark gray
          <li key={index} style={{textDecoration: todoItem.completed ? 'line-through' : 'none', color: todoItem.completed ? 'gray' : 'black' }}>
            <input 

            //add checkbox to list items
              type="checkbox"
              checked={todoItem.completed}
              onChange={() => toggleComplete(index)} 
            />


            {/* add edit and delete buttons */}
            <span>{todoItem.text}</span>
            <button onClick={() => editItem(index, prompt("Edit item:", todoItem.text))}>Edit</button>
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
          ))}
  
        </ul>
      </div>

      
    </div>
  )
}

export default App
