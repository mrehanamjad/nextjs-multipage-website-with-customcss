import React from 'react';
import styles from '../styles/CommunityExperts.module.css';

interface Expert {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: 'Mr. Urela',
    description: 'The automated process all your website tasks.',
    imageUrl: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Mr. Uttom',
    description: 'The automated process all your website tasks.',
    imageUrl: 'https://images.pexels.com/photos/8679908/pexels-photo-8679908.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Mr. Shakil',
    description: 'The automated process all your website tasks.',
    imageUrl: 'https://images.pexels.com/photos/3888025/pexels-photo-3888025.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Mr. Arafat',
    description: 'The automated process all your website tasks.',
    imageUrl: 'https://images.pexels.com/photos/19141894/pexels-photo-19141894/free-photo-of-man-in-a-peaked-cap-standing-outside-at-sunset-and-smoking-a-cigarette.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const CommunityExperts: React.FC = () => {
  return (
    <div className={styles.cover}>
    <section className={styles.container}>
      <h2 className={styles.title}>Community experts</h2>
        <div className={styles.expertsGrid}>
          {experts.map((expert) => (
            <div key={expert.id} className={styles.expertCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={expert.imageUrl} 
                  alt={expert.name} 
                  className={styles.expertImage}
                />
              </div>
              <h3 className={styles.expertName}>{expert.name}</h3>
              <p className={styles.expertDescription}>{expert.description}</p>
            </div>
          ))}
        </div>
    </section>
    </div>
  );
};

export default CommunityExperts;