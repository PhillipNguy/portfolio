import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';
import styles from '../styles/App.module.css';

const ToSection = (props) => {
  const { type } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <span
        className={[styles.highlight, styles.sectionHighlight].join(' ')}
        id={styles[theme]}
      >
        .
      </span>
      <span className={styles.sectionMain} id={styles[theme]}>
        {type}
      </span>
      <span
        className={[styles.highlight, styles.sectionHighlight].join(' ')}
        id={styles[theme]}
      >
        () &#123;
      </span>
    </div>
  );
};

export default ToSection;
