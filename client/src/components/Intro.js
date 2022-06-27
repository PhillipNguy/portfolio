import styles from '../styles/Intro.module.css';
import stylesBtn from '../styles/buttons.module.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';

const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className={styles.Intro}>
        <h3 className={styles.JapPhrase}>
          こんにちは はじめまして! (Hello, Nice to meet you! )
        </h3>
        <h1 className={styles.Name}>Phillip Nguy</h1>
        <h2 className={styles.SubHead}>Developer, Traveler, & Cinematographer</h2>
        <div className={styles.bodyBox}>
          <p className={styles.Paragraph}>
            I’m a traveling software engineer that is based in California, but
            will often work remotely from Vietnam, Japan, and anywhere else that
            life may take me.
          </p>
          <p className={styles.Paragraph}>
            Freedom and creativity reigns supreme, and I intend on using it to
            build innovative products that could provide a more sustainable
            future!
          </p>
        </div>
        <button
          className={[stylesBtn.mainButton, stylesBtn.contact].join(' ')}
          id={stylesBtn[theme]}
        >
          Contact Me!
        </button>
      </div>
      {/* <img src={require('../assets/halfLogo.png')} className={styles.halfLogo} /> */}
    </div>
  );
};

export default Intro;
