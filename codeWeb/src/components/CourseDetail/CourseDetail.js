import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CourseDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function CourseDetail() {
  const { id: courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Không có token, vui lòng đăng nhập.');
          return;
        }

        const headers = { Authorization: `Bearer ${token}` };

        const courseResponse = await axios.get(`http://localhost:8080/api/v1/course/${courseId}`, { headers });
        setCourse(courseResponse.data);

        const lessonsResponse = await axios.get(`http://localhost:8080/api/v1/lessons/course/${courseId}`, { headers });
        if (Array.isArray(lessonsResponse.data)) {
          setLessons(lessonsResponse.data);
        } else {
          setLessons([]);
        }
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu khóa học:', error);
        setLessons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleRegisterClick = () => {
    if (course && course.coursePrice > 0) {
      alert('Bạn cần phải mua khóa học này để đăng ký học!');
      return;
    }

    const firstLessonsMap = {
      1: 1,
      2: 17,
      3: 47,
      4: 75,
      5: 101,
      6: 120,
      7: 149,
    };

    const id = parseInt(courseId);
    const firstLessonId = firstLessonsMap[id] || (lessons.length > 0 && lessons[0].lessonId);

    if (firstLessonId) {
      navigate(`/learn/${firstLessonId}`, { state: { courseId: id } });
    } else {
      alert('Khóa học này chưa có bài học nào!');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found.</div>;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.content}>
            <h1>{course.courseName}</h1>
            <div className={styles.courseContent}>
              <h2>Nội dung khóa học</h2>
              <ul className={styles.lessonList}>
                {lessons.length > 0 ? (
                  lessons.map((lesson, index) => (
                    <li key={lesson.lessonId} className={styles.lessonItem}>
                      <strong>Bài học {index + 1}:</strong> {lesson.lessonContent}
                    </li>
                  ))
                ) : (
                  <li>Không có bài học nào trong khóa học này.</li>
                )}
              </ul>
            </div>
          </div>
          <div className={styles.courseInfo}>
            <h3>Thông tin bài học</h3>
            <img src={course.image} alt={course.courseName} />
            <button className={styles.Button} onClick={handleRegisterClick}>
              Đăng ký học
            </button>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /><span>Giá: {course.coursePrice} VND</span></li>
              <li><FontAwesomeIcon icon={faCheck} /><span>Trạng thái: {course.status ? 'Active' : 'Inactive'}</span></li>
              <li><FontAwesomeIcon icon={faCheck} /><span>Instructor: {course.instructorId}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CourseDetail;
