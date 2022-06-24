import styles from '../styles/App.module.css';
import '../styles/global.css';
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
      <div className={styles.App} id={theme}>
        <NavBar ref={{ toBe, toLove, toWork, toContact }} />
        {/* <ThemeSwitch /> */}
        <div className={styles.section} ref={toBe}>
          toBe
        </div>
        <div className={styles.section} ref={toLove}>
          toLove
        </div>
        <div className={styles.section} ref={toWork}>
          toWork
        </div>
        <div className={styles.section} ref={toContact}>
          toContact
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
