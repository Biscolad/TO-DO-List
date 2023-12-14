import React from 'react';
import { useState } from 'react';
import './index.css'


function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  //track the index and texts that are edited
  const [editIndex, setEditIndex] = useState(null)
  const [editText, setEditText] = useState("");

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


  //allow editing of an item in a list
  function editItem(index, newText) {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = {...newItems[index], text: newText};
      return newItems; 
    });
    setEditIndex(null);
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
        <ol>
          {[...items].reverse().map((todoItem, index) => ( 


            //change color of completed items and mark gray
            <li key={index} style={{textDecoration: todoItem.completed ? 'line-through' : 'none', color: todoItem.completed ? 'gray' : 'black' }}>
              <input 

              //add checkbox to list items
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => toggleComplete(items.length - 1 - index)} 
              />
              {editIndex === index ? (
                <>
                  <input 
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)} 
                  />
                  <button onClick={() => editItem(index, editText)}>Save</button>
                </>
              ) : (

                <>
             
                  {/* add edit and delete buttons */}
                  <span>{todoItem.text}</span>
                  <button onClick={() => {setEditIndex(index); setEditText (todoItem.text); }}>Edit</button>
                  <button onClick={() => removeItem(index)} disabled={!todoItem.completed}>Delete</button>
                </>
              )}
            </li>
          ))}
  
        </ol>
      </div>

      
    </div>
  )
}

export default App
