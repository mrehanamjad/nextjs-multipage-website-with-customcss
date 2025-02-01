import React from 'react'
import { FaBookOpen, FaClock, FaStar, FaUserSecret } from 'react-icons/fa'
import styles from "@/styles/CourseCard.module.css"

interface Course {
    id: number;
    title: string;
    instructor: string;
    category: string;
    rating: number;
    students: number;
    price: number;
    image: string;
    duration: string;
  }

function CourseCard({image,title,duration,category,instructor,rating,students,price}:Course){
  return (
    <article className={styles.courseCard}>
    <div className={styles.courseImage}>
      <img src={image} alt={title} />
      <span className={styles.duration}>
        <FaClock className={styles.icon} />
        {duration}
      </span>
    </div>
    <div className={styles.courseContent}>
      <span className={styles.category}>{category}</span>
      <h2>{title}</h2>
      <p className={styles.instructor}>
        <FaBookOpen className={styles.icon} />
        {instructor}
      </p>
      <div className={styles.courseInfo}>
        <div className={styles.stats}>
          <span className={styles.rating}>
            <FaStar className={styles.icon} />
            {rating}
          </span>
          <span className={styles.students}>
            <FaUserSecret className={styles.icon} />
            {(students / 1000).toFixed(1)}k
          </span>
        </div>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  </article>
  )
}

export default CourseCard