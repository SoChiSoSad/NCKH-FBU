import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faBook, faComments, faUsersCog, faLifeRing, faBars, faEye, faTrash, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from './ManageUserAccount.module.css';
import { useNavigate } from 'react-router-dom';

function ManageUserAccount() {
  const [customers, setCustomers] = useState([]); 
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage]);

  const fetchCustomers = async (page) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found. Redirect to login or handle authentication.');
        return;
      }

      const response = await axios.get(`http://localhost:8080/api/v1/customer?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.content) {
        setCustomers(response.data.content);
        setTotalPages(response.data.totalPages);
      } else {
        console.error('Invalid response format:', response.data);
        setCustomers([]);
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
      setCustomers([]);
    }
  };

  const openModal = (customer) => {
    setModalData(customer);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
  };

  const handleAdminManageCourse = () => {
    navigate('/adminmanagecourse');
  };

  return (
    <div className={styles.manageUserAccount}>
      <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ""}`}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>P3L</h1>
        <a href="#" onClick={handleAdminPage}>
          <FontAwesomeIcon icon={faTachometerAlt} style={{marginRight:"10px"}} /> Dashboard
        </a>
        <a href="#" onClick={toggleSubmenu}>
          <FontAwesomeIcon icon={faUsers} style={{marginRight:"10px"}}/> Manage account
        </a>
        <div className={`${styles.submenu} ${isSubmenuVisible ? styles.visible : ""}`}>
          <a href="#" onClick={handleManageUser}>User account</a>
          <a href="#" onClick={handleManageInstructor}>Instructor account</a>
        </div>
        <a href="#" onClick={handleAdminManageCourse}>
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
              style={{ cursor: "pointer" }}
              onClick={handleAdminPage}
            />
            <span>
              P3L<br />Admin
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <h1>User Account Management</h1>
          <div className={styles.filters}>
            <input type="text" placeholder="Search..." />
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.length > 0 ? (
                customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.customerId}</td>
                    <td>{customer.customerName}</td>
                    <td>
                      <img 
                        src={customer.customerImg} 
                        alt={customer.customerName} 
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                      />
                    </td>
                    <td>{customer.customerPhone}</td>
                    <td>{customer.customerEmail}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faEye}
                        onClick={() => openModal(customer)}
                        style={{ cursor: 'pointer' }}
                      />
                      <FontAwesomeIcon icon={faTrash} className={styles.delete} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No customers found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className={styles.pagination}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous Page
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next Page
            </button>
          </div>
        </div>

        {modalData && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>User Details</h2>
                <span className={styles.close} onClick={closeModal}>
                  &times;
                </span>
              </div>
              <div className={styles.modalBody}>
                <div>
                  <strong>Avatar:</strong>
                  <br />
                  <img 
                    src={modalData.customerImg} 
                    alt={modalData.customerName} 
                    style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
                  />
                </div>
                <p>
                  <strong>Name:</strong> {modalData.customerName}
                </p>
                <p>
                  <strong>Phone:</strong> {modalData.customerPhone}
                </p>
                <p>
                  <strong>Email:</strong> {modalData.customerEmail}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageUserAccount;
