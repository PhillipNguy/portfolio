import styles from '../styles/ToBe.module.css';
import React, { useContext } from 'react';
import ToSection from './ToSection';

const ToWork = () => {
  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toWork' />
        <hr classmae={styles.hr}/>
      </div>
    </div>
  )
}

export default ToWork;