import React, { useContext } from 'react';
import styles from '../styles/App.module.css';
import stylesBtn from '../styles/buttons.module.css';
import { ThemeContext } from '../pages/App';

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
      <h1>Logo Here</h1>
      <nav className={styles.navBar}>
        <ul>
          <li
            onClick={() => scrollToSection(ref.toBe)}
            className={styles.link}
            id={styles[theme]}
          >
            <span className={styles.highlight} id={styles[theme]}>
              .
            </span>
            <span>toBe</span>
            <span className={styles.highlight} id={styles[theme]}>
              ()
            </span>
          </li>
          <li
            onClick={() => scrollToSection(ref.toLove)}
            className={styles.link}
            id={styles[theme]}
          >
            .toLove()
          </li>
          <li
            onClick={() => scrollToSection(ref.toWork)}
            className={styles.link}
            id={styles[theme]}
          >
            .toWork()
          </li>
          <li
            onClick={() => scrollToSection(ref.toContact)}
            className={styles.link}
            id={styles[theme]}
          >
            .toContact()
          </li>
        </ul>
        <button className={stylesBtn.mainButton} id={stylesBtn[theme]}>
          Resume
        </button>
      </nav>
    </div>
  );
});

export default NavBar;
