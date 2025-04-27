import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function Login() {
    const { user, setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSignupClick = () => {
        navigate('/register');
      };
    const handleLogin = async (e) => {
        e.preventDefault();
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Mật khẩu ít nhất 8 ký tự, gồm chữ cái và số
        // if (!passwordRegex.test(password)) {
        //     alert("Mật khẩu không hợp lệ. Phải có ít nhất 8 ký tự, bao gồm chữ cái và số, không được chứa ký tự đặc biệt.");
        //     return;
        //   }
        try {
            const response = await axios.post('http://localhost:8080/api/v1/public/login', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                setUser(token);
                console.log('Đăng nhập thành công', token);
                if (response.data.roles === 'ROLE_ADMIN') {
                    navigate('/admin')
                } else {
                    navigate('/')
                }
            } else {
                setUsernameError('Username không hợp lệ')
                setPasswordError('Password không hợp lệ')
                console.error('Đăng nhập không thành công');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };
    useEffect(() => {
        if (user) {
            navigate('/login');
        }
    }, [navigate, user]);

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                    <div className={styles.inputField}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username}
                            autoFocus
                            error={!!usernameError}
                            helperText={usernameError}
                            required
                        />
                        <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
                    </div>
                    <div className={styles.inputField}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            autoComplete="current-password"
                            error={!!passwordError}
                            helperText={passwordError}
                            required
                        />
                        <span className={styles.icon}><FontAwesomeIcon icon={faLock} /></span>
                        <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>
                    <button type="submit" className={styles.btn}>Login</button>
                    </form>
                    <a href="#" className={styles.forgot}>Forgot password?</a>
                    <div className={styles.socialLogin}>
                        <p>Another app</p>
                        <div className={styles.socialIcon}>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: '#0941ec' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faGoogle} style={{ color: 'crimson' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#000000' }} /></a>
                        </div>
                    </div>
                    <div className={styles.signup}>
                        <p>Bạn chưa có tài khoản, <a href="#" onClick={handleSignupClick}>Đăng Ký</a>.</p>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">
                            Đồng các điều khoản bởi <a href="#">P3L</a>
                        </label>
                    </div>
            </div>
        </div>
        
    );
}

export default Login;