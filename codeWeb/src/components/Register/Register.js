import React, { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { registerUser } from '../../redux/apiRequest';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const usernameRegex = /^[a-zA-Z0-9_]{6,20}$/; // Tên tài khoản chỉ được chứa chữ, số và dấu gạch dưới, từ 3-15 ký tự
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Mật khẩu ít nhất 8 ký tự, gồm chữ cái và số
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Chỉ chấp nhận email có đuôi @gmail.com
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/; // Số điện thoại Việt Nam hợp lệ (bắt đầu bằng 03, 05, 07, 08, 09 và dài 10 số)
    
    if (!usernameRegex.test(username)) {
      alert("Tên tài khoản không hợp lệ. Chỉ cho phép chữ cái, số, và dấu gạch dưới, độ dài 3-15 ký tự.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Mật khẩu không hợp lệ. Phải có ít nhất 8 ký tự, bao gồm chữ cái và số, không được chứa ký tự đặc biệt.");
      return;
    }

    if (password !== repassword) {
      alert("Mật khẩu nhập lại không khớp.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Email không hợp lệ. Vui lòng nhập email có đuôi @gmail.com.");
      return;
    }
  
    if (!phoneRegex.test(phone)) {
      alert("Số điện thoại không hợp lệ. Số điện thoại phải bắt đầu bằng 03, 05, 07, 08, 09 và gồm 10 chữ số.");
      return;
    }
    const newUser = {
      email: email,
      username: username,
      password: password,
      phone: phone,
      name: name,
    };
    registerUser (newUser, dispatch, navigate);
};
  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h2>Đăng Ký</h2>
          <form onSubmit={handleRegister}>
          <div className={styles.inputField}>
            <input 
            type="text" 
            placeholder="Full Name" 
            onChange={(e)=>setName(e.target.value)}
            required />
            <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
          </div>
          <div className={styles.inputField}>
            <input 
            type="text" 
            placeholder="Username" 
            onChange={(e)=>setUsername(e.target.value)}
            required />
            <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
          </div>
          <div className={styles.inputField}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your password" 
              onChange={(e)=>setPassword(e.target.value)}
              required 
            />
            <span className={styles.icon}><FontAwesomeIcon icon={faLock} /></span>
            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className={styles.inputField}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Re-enter password" 
              onChange={(e)=>setRepassword(e.target.value)}
              required 
            />
            <span className={styles.icon}><FontAwesomeIcon icon={faLock} /></span>
            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className={styles.inputField}>
            <input 
            type="email" 
            placeholder="Email" 
            onChange={(e)=>setEmail(e.target.value)}
            required />
            <span className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
          <div className={styles.inputField}>
            <input 
            type="tel" 
            placeholder="Enter your phone number" 
            onChange={(e)=>setPhone(e.target.value)}
            required />
            <span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>
          </div>
          <button type="submit" className={styles.btn}>Đăng ký</button>
          </form>
          <div className={styles.loginLink}>
            <p>Bạn đã có tài khoản, <a href="#" onClick={handleLoginClick}>Đăng Nhập</a>.</p>
          </div>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms"> Đồng các điều khoản bởi <a href="#">P3L</a></label>
          </div>
      </div>
    </div>
  );
}

export default Register;
