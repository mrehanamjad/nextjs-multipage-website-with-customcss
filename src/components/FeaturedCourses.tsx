import React from 'react';
import styles from '../styles/FeaturedCourses.module.css';
import Image from 'next/image';

interface CourseProps {
  image: string;
  category: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`${styles.star} ${star <= rating ? styles.filled : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const CourseCard: React.FC<CourseProps> = ({
  image,
  category,
  title,
  description,
  rating,
  reviews,
  price,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image height={400} width={800} src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <div className={styles.ratingContainer}>
            <StarRating rating={rating} />
            <span className={styles.reviews}>{reviews} based on</span>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${price}</span>
          </div>
        </div>
        <button className={styles.button}>Find Out More</button>
      </div>
    </div>
  );
};

const FeaturedCourses: React.FC = () => {
    const courses = [
        {
            image: "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg",
            category: "User Experience",
            title: "Fundamental of UX for Application design",
            description: "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
            rating: 4.5,
            reviews: 120,
            price: 135,
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png",
            category: "Web Development",
            title: "Advanced JavaScript Mastery",
            description: "Master advanced JavaScript concepts to become a better web developer. Dive deep into ES6+ features and asynchronous programming.",
            rating: 4.7,
            reviews: 200,
            price: 149,
        },
        {
            image: "https://cdn.pixabay.com/photo/2018/07/24/16/36/seo-3559564_640.jpg",
            category: "Data Science",
            title: "Data Analysis with Python",
            description: "Learn how to manipulate, visualize, and analyze data using Python. Gain insights into real-world applications of data science.",
            rating: 4.8,
            reviews: 310,
            price: 199,
        }
    ];
    
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our featured courses</h2>
      <div className={styles.container}>
        <button className={`${styles.navButton} ${styles.prevButton}`}>
          &#8249;
        </button>
        <div className={styles.coursesList}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <button className={`${styles.navButton} ${styles.nextButton}`}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default FeaturedCourses;