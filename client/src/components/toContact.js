import styles from '../styles/ToBe.module.css';
import React, { useContext } from 'react';
import ToSection from './ToSection';

const ToContact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toContact' />
      </div>
    </div>
  )
}

export default ToContact;