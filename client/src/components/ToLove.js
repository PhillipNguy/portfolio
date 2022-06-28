import styles from '../styles/ToLove.module.css';
import React, { useContext } from 'react';
import ToSection from './ToSection';
import HobbieSection from './HobbieSection'

const ToLove = () => {
  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <ToSection type='toLove' />
      </div>
      <div className={styles.hobbiesSection}>
        <div className={styles.leftSide}>
          <h2 className={styles.subHeading}>
          Anime & Volleyball</h2>
          <h1 className={styles.heading}>Have You Seen Haikyu?</h1>
          <div className={styles.pBox}>
            <p className={styles.paragraph}>
            Through its unique method of storytelling, Anime can make anything exciting, in a way that I can only dream of as a cinematagrapher. <br/> <br/>Some of my favorites of all time are Naruto, Sword Art Online, Charlotte, Food Wars, ReLife, ReZero, Haikyu, and so many more! All of these shows has had a massive impact on some aspect of my values and beliefs.
            </p>
            </div>
        </div>
        <img src={require('../assets/giphy.gif')} className={styles.image}/>
      </div>
    </div>
  )
}

export default ToLove;