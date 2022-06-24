import React, { useContext } from 'react';
import styles from '../styles/App.module.css';
import stylesBtn from '../styles/buttons.module.css';
import { ThemeContext } from '../pages/App';
import HighlightPhrase from './HighlightPhrase.js';

const NavBar = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.topBar}>
      <h1 className={styles.logo}>Phillip Nguy</h1>
      <nav className={styles.navBar}>
        <li
          onClick={() => scrollToSection(ref.toBe)}
          className={styles.link}
          id={styles[theme]}
        >
          <HighlightPhrase phrase='toBe' />
        </li>
        <li
          onClick={() => scrollToSection(ref.toLove)}
          className={styles.link}
          id={styles[theme]}
        >
          <HighlightPhrase phrase='toLove' />
        </li>
        <li
          onClick={() => scrollToSection(ref.toWork)}
          className={styles.link}
          id={styles[theme]}
        >
          <HighlightPhrase phrase='toWork' />
        </li>
        <li
          onClick={() => scrollToSection(ref.toContact)}
          className={styles.link}
          id={styles[theme]}
        >
          <HighlightPhrase phrase='toContact' />
        </li>
        <button className={stylesBtn.mainButton} id={stylesBtn[theme]}>
          Resume
        </button>
      </nav>
    </div>
  );
});

export default NavBar;
