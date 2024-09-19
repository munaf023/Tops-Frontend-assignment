import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("login")

  const change = () =>{
    setCount(prevCount => (prevCount === "login" ? "logout" : "login"));
  }

  return (
    <>
    <div className="reactapp">
      <div className="nav">
        <nav>Navigation</nav>
        <button className='btn' onClick={change}>{count}</button>
      </div>
      <div className="main">
          <h2>Public Views</h2>
      </div>
      <div className="footer">
        <h3>Footer</h3>
      </div>
      </div>
    </>
  )
}

export default App
