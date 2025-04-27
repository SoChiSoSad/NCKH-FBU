import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const handleIntroClick = () => {
    navigate('/intro')
  }
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#">Khóa học thịnh hành</a>
          <a href="#" onClick={handleIntroClick}>Giới thiệu</a>
          <a href="#">Liên hệ</a>
          <a href="#">Điều khoản</a>
          <a href="#">Bảo mật</a>
        </div>
        <div className={styles.footerAbout}>
          <br />
          <p>Về chúng tôi</p>
          <p>P3L là nơi giúp các bạn học tập, bổ sung kiến thức và cải thiện kĩ năng lập trình cho người mới bắt đầu. Cập nhật liên tục, chính xác và đầy đủ.</p>
          <p>Liên hệ chúng tôi: <a href="mailto:c1se61capstone@gmail.com" className={styles.email}>c1se61capstone@gmail.com</a></p>
        </div>
        <div className={styles.footerFollow}>
          <p>Theo dõi chúng tôi</p>
          <a href="https://www.facebook.com/profile.php?id=61570116823389" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="mailto:c1se61capstone@gmail.com" aria-label="Google" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://github.com/orgs/Capstone1-C1SE61-Org/teams/capstone1-c1se61" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <p className={styles.copyright}>© Copyright 2025 P3L. All rights reserved</p>
    </footer>
  );
};

export default Footer;
