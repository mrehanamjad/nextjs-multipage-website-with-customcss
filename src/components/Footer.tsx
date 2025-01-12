import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaBookOpen } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Courses Column */}
        <div className={styles.column}>
          <div className={styles.brand}>
            <FaBookOpen  size={34}/>
            <h2 className={styles.brandName}>Courses</h2>
          </div>
          <p className={styles.brandDescription}>
            The automated process starts as soon as your clothes go into the machine.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.43.04-3.47l1.42-6.04s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.57-.99 3.99-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.89 2.73.1.11.11.21.08.32l-.34 1.36c-.05.22-.17.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.77 2.74-7.25 7.9-7.25 4.14 0 7.36 2.95 7.36 6.9 0 4.12-2.6 7.43-6.2 7.43-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Our Solutions Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Our solutions</h3>
          <nav className={styles.columnLinks}>
            <a href="#">Design & creatives</a>
            <a href="#">Telecommunication</a>
            <a href="#">Restaurant</a>
            <a href="#">Programing</a>
            <a href="#">Architecture</a>
          </nav>
        </div>

        {/* Support Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Support</h3>
          <nav className={styles.columnLinks}>
            <a href="#">Design & creatives</a>
            <a href="#">Telecommunication</a>
            <a href="#">Restaurant</a>
            <a href="#">Programing</a>
            <a href="#">Architecture</a>
          </nav>
        </div>

        {/* Company Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Company</h3>
          <nav className={styles.columnLinks}>
            <a href="#">Design & creatives</a>
            <a href="#">Telecommunication</a>
            <a href="#">Restaurant</a>
            <a href="#">Programing</a>
            <a href="#">Architecture</a>
          </nav>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          Copyright ©2025 All rights reserved | This template is made with{' '}
          <span className={styles.heart}>♥</span> by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;