import styles from '../styles/App.module.css';
import '../styles/global.css';
import { createContext, useState } from 'react';
import { useRef } from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import ToBe from '../components/ToBe.js';
import ToLove from '../components/ToLove';
import ToWork from '../components/ToWork';
import ToContact from '../components/toContact';
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
      <div className={styles.App} id={theme}>
        <NavBar ref={{ toBe, toLove, toWork, toContact }} />
        {/* <ThemeSwitch /> */}
        <Intro />
        <div ref={toBe}>
          <ToBe />
        </div>
        <div ref={toLove}>
          <ToLove />
        </div>
        <div ref={toWork}>
          <ToWork />
        </div>
        <div ref={toContact}>
          <ToContact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
