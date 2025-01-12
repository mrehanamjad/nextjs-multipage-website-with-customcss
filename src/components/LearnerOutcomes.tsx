import React from 'react';
import styles from '../styles/LearnerOutcomes.module.css';
import Image from 'next/image';

const outcomes = [
  {
    id: 1,
    text: 'Techniques to engage effectively with vulnerable children and young people.'
  },
  {
    id: 2,
    text: 'Join millions of people from around the world learning together.'
  },
  {
    id: 3,
    text: 'Join millions of people from around the world learning together. Online learning is as easy and natural.'
  }
];

const LearnerOutcomes: React.FC = () => {
  return (
    <section className={styles.cover}>
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image 
          src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_640.jpg" 
          alt="Student working on laptop" 
          width={1000}
          height={1000}
          className={styles.image}
        />
        <div className={styles.imageBg}></div>
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>
          Learner outcomes on courses you will take
        </h2>
        
        <ul className={styles.outcomesList}>
          {outcomes.map((outcome) => (
            <li key={outcome.id} className={styles.outcomeItem}>
              <svg 
                className={styles.checkIcon} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              {outcome.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </section>
  );
};

export default LearnerOutcomes;