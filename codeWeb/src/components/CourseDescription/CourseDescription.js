import React, { useEffect, useState } from 'react';
import styles from './CourseDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';

function CourseDescription() {
  const { lessonId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [allLessons, setAllLessons] = useState([]);
  const [videoWatched, setVideoWatched] = useState(false);
  const [learnedLessons, setLearnedLessons] = useState({});
  const courseId = location.state?.courseId || 2;

  // Lấy danh sách bài học
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        const res = await axios.get(`http://localhost:8080/api/v1/lessons/course/${courseId}`, { headers });
        setAllLessons(res.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách bài học:', error);
      }

      const stored = JSON.parse(localStorage.getItem('learnedLessons')) || {};
      setLearnedLessons(stored);
    };

    fetchLessons();
  }, [courseId]);

  // Reset trạng thái khi chuyển bài
  useEffect(() => {
    setVideoWatched(false);
  }, [lessonId]);

  const currentLesson = allLessons.find(l => l.lessonId === parseInt(lessonId));

  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (video.duration && video.currentTime / video.duration >= 0.75 && !videoWatched) {
      setVideoWatched(true);
      saveLearnedLesson(lessonId);
    }
  };

  const saveLearnedLesson = (lessonId) => {
    const currentCourse = learnedLessons[courseId] || [];
    if (currentCourse.includes(parseInt(lessonId))) return;

    const updated = {
      ...learnedLessons,
      [courseId]: [...currentCourse, parseInt(lessonId)],
    };

    setLearnedLessons(updated);
    localStorage.setItem('learnedLessons', JSON.stringify(updated));
  };

  const handleNextLesson = () => {
    if (!videoWatched) {
      alert("Bạn cần xem ít nhất 75% video để tiếp tục.");
      return;
    }
    const currentIndex = allLessons.findIndex(lesson => lesson.lessonId === parseInt(lessonId));
    if (currentIndex === -1 || currentIndex >= allLessons.length - 1) {
      alert("Bạn đã hoàn thành tất cả bài học.");
      return;
    }
    const nextLesson = allLessons[currentIndex + 1];
    navigate(`/learn/${nextLesson.lessonId}`, { state: { courseId } });
  };

  if (!currentLesson) {
    return <div>Đang tải nội dung bài học...</div>;
  }

  const learnedList = learnedLessons[courseId] || [];

  return (
    <div>
      <Header />
      <div className={styles.Container}>
        <div className={styles.mainContent}>
          <div className={styles.lessonHeader}></div>
          <div className={styles.lesson}>
            {currentLesson.video ? (
              <video
                key={currentLesson.lessonId}
                controls
                onTimeUpdate={handleTimeUpdate}
              >
                <source src={currentLesson.video} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            ) : (
              <div>Không có video cho bài học này.</div>
            )}
          </div>
          <div className={styles.lessonTitle}>
            <h2>{currentLesson.lessonName}</h2>
            <span>Thời lượng: {currentLesson.lessonDuration} phút</span>
            <a href="#"><FontAwesomeIcon icon={faPencil} /></a>
          </div>
          <div className={styles.lessonContent}>
            <p>{currentLesson.lessonContent}</p>
          </div>
        </div>

        <div className={styles.sidebar}>
          <h3>Tiến độ khóa học</h3>
          <ul>
            {allLessons.map((lesson, index) => (
              <li key={lesson.lessonId}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/learn/${lesson.lessonId}`, { state: { courseId } });
                  }}
                >
                  <strong>Bài {index + 1}:</strong> {lesson.lessonName}
                  {learnedList.includes(lesson.lessonId) && <span> ✔️</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.navBut}>
        <div className={styles.navButtons}>
          <button onClick={() => navigate(-1)}>&lt; Quay lại</button>
          <button onClick={handleNextLesson}>Bài tiếp &gt;</button>
        </div>
        <span className={styles.help}>Bạn cần trợ giúp?</span>
      </div>
      <Footer />
    </div>
  );
}

export default CourseDescription;
