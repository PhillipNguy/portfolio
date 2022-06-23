import '../styles/App.css';
import '../styles/globals.css';
import { createContext, useState } from 'react';
import { useRef } from 'react';

import NavBar from '../components/NavBar';
import ThemeSwitch from '../components/ThemeSwitch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('night');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'day' ? 'night' : 'day'));
  };

  const toBe = useRef(null);
  const toLove = useRef(null);
  const toWork = useRef(null);
  const toContact = useRef(null);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <NavBar ref={{ toBe, toLove, toWork, toContact }} />
        <ThemeSwitch />
        <div className='section' ref={toBe}>
          toBe
        </div>
        <div className='section' ref={toLove}>
          toLove
        </div>
        <div className='section' ref={toWork}>
          toWork
        </div>
        <div className='section' ref={toContact}>
          toContact
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
