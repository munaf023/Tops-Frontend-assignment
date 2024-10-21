import React, { useContext } from 'react'
import { ThemeContext } from './App';

function Login() {

    const {theme, setTheme} = useContext(ThemeContext)
    
console.log(theme);
const switchTheme = (e) => {
    setTheme((e)?'dark': 'light')
       console.log(e);

   }
  return (
    <div>
    <div className={theme} >
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" id="login-input" />
        <input type="password" placeholder="Password" id="login-input" />
        <button type="submit" id="login-button ">
          Login
        </button>
      </form>
    </div>
    <div className="theme-toggle">
      <h2 />
      <label className="switch">
        <input type="checkbox" onChange={(e)=>{
            switchTheme(e.target.checked)
        }} />
        <span className="slider" />
      </label>
    </div>
  </div>
  )
}

export default Login