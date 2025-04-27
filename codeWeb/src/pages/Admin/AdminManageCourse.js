import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCog } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt, faUsers, faBook, faComments, faUsersCog, faLifeRing, faBars, faEye, faTrash, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from './AdminManageCourse.module.css';

function AdminManageCourse() {
  const [courses, setCourses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    courseName: '',
    coursePrice: '',
    createDate: '',
    image: '',
    status: 'active',
    updateDate: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/course');
      // Kiểm tra nếu phản hồi là một mảng hợp lệ
      if (Array.isArray(response.data)) {
        setCourses(response.data);
      } else {
        console.error('Dữ liệu không phải là mảng:', response.data);
      }
    } catch (error) {
      console.error('Lỗi khi tải danh sách khóa học:', error);
    }
  };

  const confirmDelete = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/courses/${courseId}`);
        fetchCourses(); // Refresh the course list
      } catch (error) {
        console.error('Lỗi khi xóa khóa học:', error);
      }
    }
  };

  const openModal = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setModalVisible(false);
  };
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
    setFormData({
      courseName: '',
      coursePrice: '',
      createDate: '',
      image: '',
      status: 'active',
      updateDate: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/courses', formData);
      closeCreateModal();
      fetchCourses(); // Refresh the course list
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/api/v1/courses/${selectedCourse.courseId}`, selectedCourse);
      fetchCourses(); // Refresh the course list
      closeModal();
    } catch (error) {
      console.error('Lỗi khi cập nhật khóa học:', error);
    }
  };

  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setSubmenuVisible((prev) => !prev);
  };

  const handleManageUser = () => {
    navigate('/manageuser');
  };

  const handleAdminPage = () => {
    navigate('/admin');
  };
  
  const handleManageInstructor = () => {
    navigate('/manageinstructor');
  }

  return (
    <div className={styles.content}>
      <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ""}`}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>P3L</h1>
        <a href="#" onClick={handleAdminPage}>
          <FontAwesomeIcon icon={faTachometerAlt} style={{marginRight:"10px"}} /> Dashboard
        </a>
        <a href="#" onClick={toggleSubmenu}>
          <FontAwesomeIcon icon={faUsers} style={{marginRight:"10px"}} /> Manage account
        </a>
        <div className={`${styles.submenu} ${isSubmenuVisible ? styles.visible : ""}`}>
          <a href="#" onClick={handleManageUser}>User account</a>
          <a href="#" onClick={handleManageInstructor}>Instructor account</a>
        </div>
        <a href="#">
          <FontAwesomeIcon icon={faBook} style={{marginRight:"10px"}} /> Manage course
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faComments} style={{marginRight:"10px"}} /> Manage feedback
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLifeRing} style={{marginRight:"10px"}} /> Support
        </a>
      </div>
      
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.fullWidth : ""}`}>
      <div className={styles.header}>
          <h2>
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} /> Dashboard
          </h2>
          <div className={styles.userInfo}>
            <img
              src={require("../../images/logo.png")}
              alt="Logo"
              height="100"
              width="100"
              style={{ cursor: "pointer"}}
              onClick={handleAdminPage}
            />
            <span>
              P3L<br />Admin
            </span>
          </div>
        </div>
        <div className={styles.tableContainer}>
        <h1>Course Management</h1> <br />
        <div className={styles.filters}>
            <input type="text" placeholder="Search..." />
            <button className={styles.btn} onClick={openCreateModal}>
              Create
            </button>
          </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Create Date</th>
              <th>Image</th>
              <th>Price</th>
              <th>Status</th>
              <th>Update Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Kiểm tra nếu courses là mảng và render */}
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map(course => (
                <tr key={course.courseId}>
                  <td>{course.courseId}</td>
                  <td>{course.courseName}</td>
                  <td>{course.createDate}</td>
                  <td><img src={course.image} alt={course.courseName} style={{width:"100px", height:"100px"}} /></td>
                  <td>{course.coursePrice}</td>
                  <td>{course.status}</td>
                  <td>{course.updateDate}</td>
                  <td className={styles.actionButtons}>
                    <FontAwesomeIcon icon={faTimes} onClick={() => confirmDelete(course.courseId)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <FontAwesomeIcon icon={faCog} onClick={() => openModal(course)} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No courses available</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
        {modalVisible && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>Edit Course</h2>
                <span className={styles.close} onClick={closeModal}>&times;</span>
              </div>
              <div className={styles.modalBody}>
              <label>
                Course Name:
                <input
                  type="text"
                  value={selectedCourse.courseName}
                  onChange={(e) => setSelectedCourse({ ...selectedCourse, courseName: e.target.value })}
                />
              </label>

              <label>
                Course Price:
                <input
                  type="number"
                  value={selectedCourse.coursePrice}
                  onChange={(e) => setSelectedCourse({ ...selectedCourse, coursePrice: e.target.value })}
                />
              </label>

              <label>
                Creation Date:
                <input
                  type="date"
                  value={selectedCourse.createDate}
                  onChange={(e) => setSelectedCourse({ ...selectedCourse, createDate: e.target.value })}
                />
              </label>

              <label>
                Course Image URL:
                <input
                  type="text"
                  value={selectedCourse.image}
                  onChange={(e) => setSelectedCourse({ ...selectedCourse, image: e.target.value })}
                />
              </label>

              <label>
                Status:
                <select
                  value={selectedCourse.status}
                  onChange={(e) => setSelectedCourse({ ...selectedCourse, status: e.target.value })}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </label>

              <label>
                Update Date:
                <input
                  type="date"
                  value={selectedCourse.updateDate}
                  onChange={(e) => setSelectedCourse({ ...selectedCourse, updateDate: e.target.value })}
                />
              </label>
                <button onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        )}
        {isCreateModalOpen && (
        <div className={styles.modal} onClick={closeCreateModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2>Create New Course</h2>
              <span className={styles.close} onClick={closeCreateModal}>
                &times;
              </span>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="courseName">Course Name:</label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="coursePrice">Course Price:</label>
                <input
                  type="number"
                  id="coursePrice"
                  name="coursePrice"
                  value={formData.coursePrice}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="createDate">Course Creation Date:</label>
                <input
                  type="date"
                  id="createDate"
                  name="createDate"
                  value={formData.createDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="image">Course Image URL:</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="status">Course Status:</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="updateDate">Course Update Date:</label>
                <input
                  type="date"
                  id="updateDate"
                  name="updateDate"
                  value={formData.updateDate}
                  onChange={handleChange}
                  required
                />
              </div>
                <div className={styles.formGroup}>
                  <button type="submit" className={styles.btnSubmit}>
                    Submit
                  </button>
                  <button
                    type="button"
                    className={styles.btnCancel}
                    onClick={closeCreateModal}
                    style={{marginLeft: '155px'}}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default AdminManageCourse;