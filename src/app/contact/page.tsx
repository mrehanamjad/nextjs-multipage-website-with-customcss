'use client'
import React, { useState } from 'react';
import styles from '@/styles/ContactPage.module.css';
import { FiMail } from 'react-icons/fi';
import { FaClock, FaMapPin } from 'react-icons/fa';
import { BiPhone, BiSend } from 'react-icons/bi';
import Top from '@/components/Top';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
    <Top name='Contact Us' />

      <div className={styles.content}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <BiPhone className={styles.icon} />
                <div>
                  <h3>Call Us</h3>
                  <p>+92 123 4567890</p>
                  <p>+92 321 0987654</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <FiMail className={styles.icon} />
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                  <p>support@example.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <FaMapPin className={styles.icon} />
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Business Avenue</p>
                  <p>Karachi.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <FaClock className={styles.icon} />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Rehan Amjad"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="rehan@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
            >
                  Send Message
                  <BiSend className={styles.sendIcon} />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}