"use client"
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { FaBookOpen, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.topBar}>
          <Link href="/" className={styles.logo}>
            <FaBookOpen size={34} />
            <span className={styles.logoText}>Courses</span>
          </Link>
          
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.isOpen : ''}`}>
          <nav className={styles.navMenu}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/courses" className={styles.navLink}>Courses</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>

          <div className={styles.authButtons}>
            <button className={`${styles.btn} ${styles.btnJoin}`}>Join</button>
            <button className={`${styles.btn} ${styles.btnLogin}`}>Log In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;