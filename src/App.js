// useState is a variable name we want in react
import React, { useState } from 'react'

function App(){
  let [ counter, setCounter ] = useState(1);
  let increaseCount = () => setCounter(counter + 1);
  let decreaseCount = () => setCounter(counter - 1);
  // window.changeCounter = setCounter
    return (<div>
       <h1>{counter}</h1>
      <button onClick={increaseCount}>Add</button>
      <button onClick={decreaseCount}>Subtract</button>
      </div>)
}

export default App;
