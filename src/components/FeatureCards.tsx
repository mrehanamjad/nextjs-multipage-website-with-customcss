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
//   const renderIcon = () => {
//     switch (icon) {
//       case 'books':
//         return (
//           <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         );
//       case 'instructor':
//         return (
//           <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <circle cx="12" cy="8" r="5" strokeWidth="2"/>
//             <path d="M3 21v-2a7 7 0 0114 0v2" strokeWidth="2"/>
//           </svg>
//         );
//       case 'clock':
//         return (
//           <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <circle cx="12" cy="12" r="10" strokeWidth="2"/>
//             <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         );
//     }
//   };

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