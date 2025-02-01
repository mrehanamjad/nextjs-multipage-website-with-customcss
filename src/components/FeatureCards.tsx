import React, { ReactNode } from 'react';
import styles from '../styles/FeatureCards.module.css';
import { RiBookShelfLine } from 'react-icons/ri';
import { FcAlarmClock, FcBusinesswoman } from 'react-icons/fc';

interface FeatureCardProps {
  icon: ReactNode
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <RiBookShelfLine size={200} color='black'/>,
      title: '60+ UX courses',
      description: 'The automated process all your website tasks.'
    },
    {
      icon: <FcBusinesswoman size={200}/>,
      title: 'Expert instructors',
      description: 'The automated process all your website tasks.'
    },
    {
      icon: <FcAlarmClock size={200} />,
      title: 'Life time access',
      description: 'The automated process all your website tasks.'
    }
  ];

  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureCards;