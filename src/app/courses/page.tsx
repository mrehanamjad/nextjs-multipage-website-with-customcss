'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/CoursesPage.module.css';
import {  FaSearch} from 'react-icons/fa';
import Top from '@/components/Top';
import CourseCard from '@/components/CourseCard';

interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  duration: string;
}

const courses: Course[] = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Mr. Urela",
      category: "Programming",
      level: "Beginner",
      rating: 4.8,
      students: 15430,
      price: 99.99,
      image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
      duration: "48 hours",
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      instructor: "Mr. Uttom",
      category: "Programming",
      level: "Advanced",
      rating: 4.9,
      students: 8920,
      price: 79.99,
      image: "https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_640.jpg",
      duration: "32 hours",
    },
    {
      id: 3,
      title: "Mastering React and Redux",
      instructor: "Ms. Farah",
      category: "Web Development",
      level: "Intermediate",
      rating: 4.7,
      students: 10320,
      price: 119.99,
      image: "https://cdn.pixabay.com/photo/2020/12/16/17/48/computer-5837248_640.jpg",
      duration: "40 hours",
    },
    {
      id: 4,
      title: "Python for Data Science and Machine Learning",
      instructor: "Dr. Khan",
      category: "Data Science",
      level: "Beginner",
      rating: 4.9,
      students: 14230,
      price: 129.99,
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "60 hours",
    },
    {
      id: 5,
      title: "UI/UX Design Masterclass",
      instructor: "Mr. Adeel",
      category: "Design",
      level: "All Levels",
      rating: 4.8,
      students: 7400,
      price: 89.99,
      image: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "36 hours",
    },
    {
      id: 6,
      title: "Introduction to Cybersecurity",
      instructor: "Ms. Neha",
      category: "Cybersecurity",
      level: "Beginner",
      rating: 4.6,
      students: 5320,
      price: 74.99,
      image: "https://cdn.pixabay.com/photo/2019/11/08/10/34/cyber-4610993_640.jpg",
      duration: "28 hours",
    },
    {
      id: 7,
      title: "Mobile App Development with Flutter",
      instructor: "Mr. Yusuf",
      category: "Mobile Development",
      level: "Intermediate",
      rating: 4.7,
      students: 6800,
      price: 99.99,
      image: "https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_640.jpg",
      duration: "50 hours",
    },
    {
      id: 8,
      title: "Artificial Intelligence for Beginners",
      instructor: "Dr. Zahid",
      category: "Artificial Intelligence",
      level: "Beginner",
      rating: 4.8,
      students: 9200,
      price: 149.99,
      image: "https://cdn.pixabay.com/photo/2023/05/08/08/41/ai-7977960_640.jpg",
      duration: "45 hours",
    },
    {
      id: 9,
      title: "Cloud Computing with AWS",
      instructor: "Mr. Asim",
      category: "Cloud Computing",
      level: "Advanced",
      rating: 4.7,
      students: 4800,
      price: 199.99,
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "55 hours",
    },
    {
      id: 10,
      title: "Building RESTful APIs with Node.js",
      instructor: "Ms. Sarah",
      category: "Web Development",
      level: "Intermediate",
      rating: 4.8,
      students: 8700,
      price: 89.99,
      image: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "38 hours",
    },
    {
      id: 11,
      title: "Mastering Adobe Photoshop",
      instructor: "Mr. Kamran",
      category: "Design",
      level: "All Levels",
      rating: 4.9,
      students: 5400,
      price: 59.99,
      image: "/course11.jpg",
      duration: "25 hours",
    },
    {
      id: 12,
      title: "Big Data Analytics with Hadoop",
      instructor: "Dr. Hina",
      category: "Data Science",
      level: "Advanced",
      rating: 4.6,
      students: 4300,
      price: 169.99,
      image: "https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158_640.jpg",
      duration: "70 hours",
    }
  ];
  

const categories = ["All", "Programming", "Design", "Business", "Marketing"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    const filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLevel]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className={styles.container}>
     <Top name={"Our Courses"} />

      <main className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterSection}>
            <h3>Categories</h3>
            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3>Level</h3>
            <div className={styles.filterButtons}>
              {levels.map((level) => (
                <button
                  key={level}
                  className={`${styles.filterBtn} ${selectedLevel === level ? styles.active : ''}`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.courseGrid}>
            {currentCourses.map((course) => (
             <CourseCard {...course} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageBtn}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className={styles.pageBtn}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}