import React, { useContext } from 'react';
import styles from '../styles/App.module.css';
import stylesBtn from '../styles/buttons.module.css';
import { ThemeContext } from '../pages/App';
import NavLink from './NavLink.js';

const NavBar = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.topBar}>
      <img src={require('../assets/logo.png')} className={styles.logo}/>
      <nav className={styles.navBar}>
        <NavLink ref={ref.toBe} refId='toBe' />
        <NavLink ref={ref.toLove} refId='toLove' />
        <NavLink ref={ref.toWork} refId='toWork' />
        <NavLink ref={ref.toContact} refId='toContact' />
        <button className={stylesBtn.mainButton} id={stylesBtn[theme]}>
          Resume
        </button>
      </nav>
    </div>
  );
});

export default NavBar;
