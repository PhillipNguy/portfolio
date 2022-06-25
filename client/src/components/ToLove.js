import styles from '../styles/ToBe.module.css';
import React, { useContext } from 'react';
import ToSection from './ToSection';

const ToLove = () => {
  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toLove' />
        <hr classmae={styles.hr}/>
      </div>
    </div>
  )
}

export default ToLove;