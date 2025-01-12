import React from 'react';
import styles from '../styles/ExploreTopics.module.css';

interface TopicCard {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const topics: TopicCard[] = [
  { id: 1, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg', link: '#' },
  { id: 2, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_640.jpg', link: '#' },
  { id: 3, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2015/05/18/02/54/ui-771829_640.jpg', link: '#' },
  { id: 4, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2017/10/31/11/30/binary-2904980_640.jpg', link: '#' },
  { id: 5, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_640.jpg', link: '#' },
  { id: 6, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2021/11/04/06/27/artificial-intelligence-6767502_640.jpg', link: '#' },
  { id: 7, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2023/10/21/12/35/ai-generated-8331364_640.jpg', link: '#' },
  { id: 8, title: 'Programming', imageUrl: 'https://cdn.pixabay.com/photo/2022/06/16/11/14/web-development-7265717_640.png', link: '#' },
];

const ExploreTopics: React.FC = () => {
  return (
    <section className={styles.cover}>
    <div className={styles.exploreSection}>
      <h2 className={styles.sectionTitle}>Explore top subjects</h2>
      
      <div className={styles.topicsGrid}>
        {topics.map((topic) => (
          <a key={topic.id} href={topic.link} className={styles.topicCard}>
            <img src={topic.imageUrl} alt={topic.title} />
            <div className={styles.topicOverlay}>
              <span className={styles.topicTitle}>{topic.title}</span>
            </div>
          </a>
        ))}
      </div>
      
      <a href="#" className={styles.viewMoreBtn}>
        View More Subjects
      </a>
    </div>
    </section>
  );
};

export default ExploreTopics;