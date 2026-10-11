import React from 'react';
import styles from './loader.module.css';

const Loader = ({ fullScreen = false, text = "Loading ReelForge..." }) => {
  return (
    <div className={`${styles.loaderContainer} ${fullScreen ? styles.fullScreen : ''}`}>
      <div className={styles.main}>
        <div className={styles.innerCircle} />
        <div className={styles.coreDot} />
      </div>
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  );
};

export default Loader;