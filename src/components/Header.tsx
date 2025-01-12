import React from 'react';
import styles from '../styles/Header.module.css';
import { FaBookOpen } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <FaBookOpen size={34} />
          <span className={styles.logoText}>Courses</span>
        </Link>

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
    </header>
  );
};

export default Header;