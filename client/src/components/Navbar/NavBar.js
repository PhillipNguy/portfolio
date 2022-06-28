import React, { useContext, useState, useEffect } from 'react';
import styles from '../../styles/App.module.css';
import stylesBtn from '../../styles/buttons.module.css';
import { ThemeContext } from '../../pages/App';
import NavLink from '../NavLink.js';
import {Nav, Bars, NavMenu} from './NavbarElements'

const NavBar = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);



  return (
    <Nav className={styles.topBar}>
      <img src={require('../../assets/logo.png')} className={styles.logo}/>
      <Bars />
      <NavMenu className={styles.navBar}>
        <NavLink ref={ref.toBe} refId='toBe' onClick={closeMobileMenu} />
        <NavLink ref={ref.toLove} refId='toLove' onClick={closeMobileMenu} />
        <NavLink ref={ref.toWorkd} refId='toWork' onClick={closeMobileMenu} />
        <NavLink ref={ref.toContact} refId='toContact' onClick={closeMobileMenu} />
        <button className={stylesBtn.mainButton} id={stylesBtn[theme]}>
          Resume
        </button>
      </NavMenu>
    </Nav>
  );
});

export default NavBar;
