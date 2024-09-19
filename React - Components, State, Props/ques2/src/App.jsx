import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

   const inc = () =>{
      setCount(count+1)
    }
   const dec = () =>{
      setCount(count-1)
    }
  return (
   <>
      <div className='app'>
          <h1>Counter App</h1>
          <h4>{count}</h4>
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
      </div>
   </>
  )
}

export default App
