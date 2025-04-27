import React, { useState } from 'react';
import styles from './ManageInstructorAccount.module.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUsers, faBook, faComments, faUsersCog, faLifeRing, faBars, faEye, faTrash, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ManageInstructorAccount() {
  const [modalData, setModalData] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const openModal = (name, username, phone, email, avatar) => {
    setModalData({ name, username, phone, email, avatar });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const openCreateModal = (name, username , password, phone, email) => {
    setCreateModalOpen({ name, username , password, phone, email });
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to handle form submission (e.g., API call)
    closeCreateModal();
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
    const handleAdminManageCourse = () => {
      navigate('/adminmanagecourse');
    }

  const users = [
    {
      name: 'SoChi',
      username: 'SoChi',
      phone: '0328625484',
      email: 'binzinzim@gmail.com',
      avatar: 'https://placehold.co/100x100',
    },
    {
      name: 'Phương Chí',
      username: 'Tuitenphuong',
      phone: '+84998320582',
      email: 'kingg.holbrook@gmail.com',
      avatar: 'https://placehold.co/100x100',
    },
  ];

  return (
    <div className={styles.accountManagement}>
      <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ""}`}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>P3L</h1>
        <a href="#" onClick={handleAdminPage}>
          <FontAwesomeIcon icon={faTachometerAlt}z /> Dashboard
        </a>
        <a href="#" onClick={toggleSubmenu}>
          <FontAwesomeIcon icon={faUsers} /> Manage account
        </a>
        <div className={`${styles.submenu} ${isSubmenuVisible ? styles.visible : ""}`}>
          <a href="#" onClick={handleManageUser}>User account</a>
          <a href="#" onClick={handleManageInstructor}>Instructor account</a>
        </div>
        <a href="#" onClick={handleAdminManageCourse}>
          <FontAwesomeIcon icon={faBook} /> Manage course
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faComments} /> Manage feedback
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLifeRing} /> Support
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

        <div className={styles.content}>
          <h1>Instructor Account Management</h1>
          <div className={styles.filters}>
            <input type="text" placeholder="Search..." />
            <button className={styles.btn} onClick={openCreateModal}>
              Create
            </button>
          </div>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Actions</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className={styles.actions}>
                      <FontAwesomeIcon
                        icon={faEye}
                        onClick={ () =>
                          openModal(
                            user.name,
                            user.username,
                            user.phone,
                            user.email,
                            user.avatar
                          )
                        }
                        style={{ cursor: "pointer" }}
                      />
                      <FontAwesomeIcon icon={faTrash} className={styles.delete} />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
              <div className="info">1-25 of 100</div>
              <div className="controls">
                <FontAwesomeIcon icon={faAngleLeft} />
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
        </div>

        {modalData && (
          <div className={styles.modal} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2>User Details</h2>
                <span className={styles.close} onClick={closeModal}>
                  &times;
                </span>
              </div>
              <div className={styles.modalBody}>
                <img
                  src={modalData.avatar}
                  alt="User avatar"
                  height="100"
                  width="100"
                />
                <p>
                  <strong>Name:</strong> {modalData.name}
                </p>
                <p>
                  <strong>Username:</strong> {modalData.username}
                </p>
                <p>
                  <strong>Phone:</strong> {modalData.phone}
                </p>
                <p>
                  <strong>Email:</strong> {modalData.email}
                </p>
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
                <h2>Create New Account</h2>
                <span className={styles.close} onClick={closeCreateModal}>
                  &times;
                </span>
              </div>
              <div className={styles.modalBody}>
                {/* Nội dung tạo mới tài khoản */}
                <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                </div>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
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
                  style={{ marginLeft: "190px" }}
                >
                  Cancel
                </button>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageInstructorAccount;
