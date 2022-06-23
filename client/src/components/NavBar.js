import React, { useContext } from 'react';
import '../styles/App.css';
import stylesBtn from '../styles/buttons.module.css';
import { ThemeContext } from '../pages/App';

const NavBar = React.forwardRef((props, ref) => {
  const context = useContext(ThemeContext);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='topBar'>
      <h1>Logo Here</h1>
      <nav className='navBar'>
        <ul>
          <li onClick={() => scrollToSection(ref.toBe)} className='link'>
            .toBe()
          </li>
          <li onClick={() => scrollToSection(ref.toLove)} className='link'>
            .toLove()
          </li>
          <li onClick={() => scrollToSection(ref.toWork)} className='link'>
            .toWork()
          </li>
          <li onClick={() => scrollToSection(ref.toContact)} className='link'>
            .toContact()
          </li>
        </ul>
        <button className={stylesBtn.mainButton}>Resume</button>
      </nav>
    </div>
  );
});

export default NavBar;
