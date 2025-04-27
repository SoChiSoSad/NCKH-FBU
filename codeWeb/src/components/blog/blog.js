import React, { useEffect } from 'react';
import styles from './blog.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Blog() {
  return (
    <div>
        <Header/>
        <div className={styles.container}>
        <div className={styles.loadingContainer}>
            <div className={styles.loadingThumb}></div>
            <div className={styles.loadingThumb}></div>
            <div className={styles.loadingThumb}></div>
        </div>
        <div>
            <p>Chưa có cập nhật ....</p>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Blog;
