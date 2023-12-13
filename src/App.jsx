import React from 'react'
import { useState } from 'react'


function App() {

  const [inputText, setInputText] = useState("")
 

  return (
    <div className = "container">
      <div className="heading">
        <h1>TO-DO-LIST</h1>
      </div>

      <div>
        <input type="text" value = {inputText} />
        <button>
          <span>Add</span>
        </button>

        <button>
          <span>Edit</span>
        </button>

      </div>

      <div>
        <ol>
          <li>A Item</li>
        </ol>
      </div>



      
    </div>
  )
}

export default App
