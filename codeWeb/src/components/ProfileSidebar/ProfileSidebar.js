import React from 'react';
import styles from './ProfileSidebar.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faBook, faShareAlt, faLanguage, faFileAlt, faInfoCircle, faQuestion } from '@fortawesome/free-solid-svg-icons';

function ProfileSidebar() {
    const navigate = useNavigate();
    const handleRegisterCourse = () => {
        navigate('/registeredcourse');
    };
    const handleProfile = () => {
      navigate('/profile');
    }

  return (
    <div className={styles.sidebar}>
      <a href="#" onClick={handleProfile}>
        <FontAwesomeIcon icon={faUser} />
        Profile
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLock} />
        Privacy and security
      </a>
      <a href="#" onClick={handleRegisterCourse}>
        <FontAwesomeIcon icon={faBook} />
        Registered courses
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faShareAlt} />
        Blog posts
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLanguage} />
        Language
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFileAlt} />
        Terms &amp; Policies
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faQuestion} />
        Support
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInfoCircle} />
        About
      </a>
    </div>
  );
}
export default ProfileSidebar;