import React from 'react';
import styles from './RegisteredCourses.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';

const RegisteredCourse = () => {
  const navigate = useNavigate();
  const handleCourseDescriptionClick = () => {
    navigate('/registeredcourse');
  }

  return (
    <div>
      <Header/>
      <ProfileSidebar/>
      <div className={styles.content}>
      <main className={styles.content2}>
        <h2>Khóa học của tôi</h2>
        <p>Bạn chưa hoàn thành khóa học nào.</p>
        <div className={styles.courseCard} onClick={handleCourseDescriptionClick}>
          <div className={styles.courseImage}>
            <div className={styles.courseTitle} >HTML từ zero đến hero</div>
          </div>
          <div className={styles.courseInfo}>
            <div>HTML từ zero đến hero</div>
            <div>Học cách đây 30 ngày trước</div>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} onClick={handleCourseDescriptionClick}>
        <div className={styles.courseCSS}>
          <div className={styles.courseImage}>
            <div className={styles.courseTitle}>CSS từ zero đến hero</div>
          </div>
          </div>
          <div className={styles.courseInfo}>
            <div>CSS từ zero đến hero</div>
            <div>Học cách đây 17 ngày trước</div>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} onClick={handleCourseDescriptionClick}>
        <div className={styles.courseJavaScript}>
          <div className={styles.courseImage}>
            <div className={styles.courseTitle}>JavaScript từ zero đến hero</div>
          </div>
          </div>
          <div className={styles.courseInfo}>
            <div>JavaScript từ zero đến hero</div>
            <div>Học cách đây 7 ngày trước</div>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '35%' }}></div>
            </div>
          </div>
        </div>
      </main>
      </div>

      <Footer/>
    </div>
  );
};

export default RegisteredCourse;
