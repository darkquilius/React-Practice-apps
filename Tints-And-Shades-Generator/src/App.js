import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("purple").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false)
      let colors = new Values(color).all(10)
      setList(colors)
    }
    catch (error){
      setError(true)
      console.log(error)
      // ADD A TOAST THAT SAYS ERROR. MAYBE THAT REWARDS PACKAGE W FROWNY FACES
    }
  }

  return (
    <>
      <section className="container">
        <h3>Shades And Tints Color Generator</h3>
        <form onSubmit={handleSubmit}> 
          <input type="text" value={color} placeholder="#f15025" onChange={(e) => {setColor(e.target.value)}} className={`${error?"error":null}`}></input>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
         return < SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>
  )
}

export default App
