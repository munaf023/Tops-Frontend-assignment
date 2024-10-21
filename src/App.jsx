import { createContext, useState } from "react";
import "./App.css";
import Login from "./Login";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <div>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <Login />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
