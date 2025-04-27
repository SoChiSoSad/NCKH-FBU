import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import { useAuth } from '../../AuthContext'
import { request } from '../../utils/axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPencilAlt, faLock, faBook, faShareAlt, faLanguage, faFileAlt, faInfoCircle, faCamera } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';

function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const res = await request.get('/customer/detail')
            setUserData(res)
        } catch (error) {
            console.log("Error fetching user information", error);
        }
    }

    if (user) {
        fetchUserData();
    }
}, [user])

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Header/>

      <div className={styles.profilePage}>
        <ProfileSidebar/>
        <div className={styles.content}>
          <div className={styles.profileHeader}>
            <div className={styles.changeAvatar}>
            <img
              component="img"
              src={ userData.customerImg || ''}
              alt="avatar"
              height="100"
              width="100"
            />
            <button><FontAwesomeIcon icon={faCamera} /> </button>
            </div>
            <h2>{userData.customerName}</h2>
          </div>

          <div className={styles.profileInfo}>
            <h2 style={{ textAlign: 'center' }}>Thông tin cá nhân</h2>
              <div className={styles.infoBox}>
                <div variant="h5" component="div" className={styles.customer_name}>
                <h2 className={styles.info_title_tag}>Tên người dùng</h2>
                  {userData.customerName || ''}
                </div>
              </div>
              <div className={styles.infoBox}>
                <div component="div" variant="body2">
                  <h2 className={styles.info_title_tag}>Email</h2>
                  <h1 className={styles.info_title_item}>{userData.accountEmail || ''}</h1>
                </div>
              </div>
              <div className={styles.infoBox}>
              <div component="div" variant="body2">
                <h2 className={styles.info_title_tag}>Số điện thoại</h2>
                <h1 className={styles.info_title_item}>{userData.customerPhone || ''}</h1>
              </div>
              </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Profile;