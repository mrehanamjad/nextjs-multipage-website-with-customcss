import React from 'react';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';



const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.cloudLeft} />
      <div className={styles.cloudRight} />
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Online learning <br/> platform
          </h1>
          <p className={styles.subtitle}>
            Build skills with courses, certificates, and degrees online from world-class universities and companies
          </p>
          <button className={styles.joinButton}>
            Join For Free
          </button>
        </div>

        <div className={styles.illustration}>
          <Image src={"https://cdn.pixabay.com/photo/2021/04/24/15/37/online-6204349_640.jpg"} alt="hero image" width="500" height="500" className={styles.img} />
        </div>
      </div>
     
    </section>
  );
};

export default Hero;