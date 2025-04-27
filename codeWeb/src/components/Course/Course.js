import React, { useState, useEffect } from 'react';
import styles from './Course.module.css'; // Import CSS module
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Course = () => {
  const navigate = useNavigate();
  const [coursesFree, setCoursesFree] = useState([]);
  const [coursesPaid, setCoursesPaid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch free and paid courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const [freeResponse, paidResponse] = await Promise.all([
          fetch('http://localhost:8080/api/v1/course/free'),
          fetch('http://localhost:8080/api/v1/course/paid'),
        ]);

        if (!freeResponse.ok || !paidResponse.ok) {
          throw new Error('Failed to fetch courses');
        }

        const freeCourses = await freeResponse.json();
        const paidCourses = await paidResponse.json();

        setCoursesFree(freeCourses);
        setCoursesPaid(paidCourses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const renderCourseCard = (course) => (
    <div key={course.courseId} className={styles.courseCard}>
      <img src={course.image} alt={course.courseName} className={styles.courseImage} />
      <div className={styles.courseInfo}>
        <h4 className={styles.courseTitle}>{course.courseName}</h4>
        <p className={styles.coursePrice}>
          Giá: {course.coursePrice ? `${course.coursePrice} VND` : 'Miễn phí'}
        </p>
        <p className={styles.courseStatus}>
          Trạng thái: {course.status ? 'Hoạt động' : 'Ngừng hoạt động'}
        </p>
        <p className={styles.courseDates}>
          Ngày tạo: {new Date(course.createDate).toLocaleDateString()}
          <br />
          Ngày cập nhật: {new Date(course.updateDate).toLocaleDateString()}
        </p>
        <button
          className={styles.enrollButton}
          onClick={() => navigate(`/course/${course.courseId}`)}
        >
          Chi tiết khóa học
        </button>
      </div>
    </div>
  );

  if (loading) {
    return <div className={styles.loading}>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className={styles.error}>Đã xảy ra lỗi: {error}</div>;
  }

  return (
    <div>
        <Header/>
      <div className={styles.content}>
        {/* Free Courses Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Khóa học miễn phí</h2>
          <div className={styles.courseContainer}>
            {coursesFree.map(renderCourseCard)}
          </div>
        </div>

        {/* Paid Courses Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle} style={{marginTop:"10px"}}>Khóa học trả phí</h2>
          <div className={styles.courseContainer}>
            {coursesPaid.map(renderCourseCard)}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Course;
