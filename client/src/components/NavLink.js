import React, { useContext } from 'react';
import styles from '../styles/App.module.css';
import { ThemeContext } from '../pages/App';
import HighlightPhrase from './HighlightPhrase.js';

const NavLink = React.forwardRef((props, ref) => {
  const { refId, closeMobile } = props;
  const { theme } = useContext(ThemeContext);
  const scrollToSection = (elementRef) => {
    closeMobile();
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <li
      onClick={() => scrollToSection(ref)}
      className={styles.link}
      id={styles[theme]}
    >
      <HighlightPhrase phrase={refId} />
    </li>
  );
});

export default NavLink;
