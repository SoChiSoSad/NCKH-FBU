import React from 'react';
import styles from '../VerifyCode/VerifyCode.module.css';
import { useNavigate } from 'react-router-dom';

const VerifyCode = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/')
    };
  return (
    <div className={styles.container}>
      <div className={styles.verifyBox}>
        <h2>Verify Code</h2>
        <div className={styles.inputBox}>
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>
        <button className={styles.verifyButton} onClick={handleLogoClick}>Verify</button>
      </div>
    </div>
  );
};

export default VerifyCode;
