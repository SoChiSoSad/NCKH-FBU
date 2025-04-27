import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { request } from '../../utils/axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
    const token = localStorage.getItem('token');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const [userData, setUserData] = useState({});
    
    // Xác định tab active dựa trên pathname
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await request.get('/customer/detail');
                setUserData(res);
            } catch (error) {
                console.log("Error fetching user information", error);
            }
        };

        if (user) {
            fetchUserData();
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.clear();
        navigate('/');
    };

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div>
            <header>
                <div className={styles.logo} onClick={() => navigate('/')}>  
                    <img src={require('../../images/logo.png')} alt="Logo" className={styles.logoImg} />
                </div>
                <div className={styles.searchBar}>
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <span className={styles.searchIcon}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </form>
                </div>
                <div className={styles.authButtons}>
                    {token ? (
                        <>
                            <div className={styles.icons}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faBell} />
                                </a>
                                <a href="#" onClick={() => navigate('/profile')}>
                                    <img
                                        src={userData.customerImg || ''}
                                        alt="avatar"
                                        height="30"
                                        width="30"
                                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                </a>
                                <span>{userData.customerName}</span>
                            </div>
                            <Link to="/" className={styles.navbarLogout} onClick={handleLogout}>Đăng xuất</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className={styles.loginBtn}>Đăng Nhập</Link>
                            <Link to="/register" className={styles.signupBtn}>Đăng Ký</Link>
                        </>
                    )}
                </div>
            </header>
            <nav>
                <ul>
                    <li className={activeTab === "/" ? styles.active : ""} onClick={() => navigate('/')}>Trang chủ</li>
                    <li
                    className={activeTab === "/course" ? styles.active : ""}
                    onClick={() => token ? navigate('/course') : navigate('/login')}
                    >
                    Khóa học
                    </li>
                    <li
                    className={activeTab === "/learnpath" ? styles.active : ""}
                    onClick={() => token ? navigate('/learnpath') : navigate('/login')}
                    >
                    Lộ trình học tập
                    </li>
                    <li
                    className={activeTab === "/Blog" ? styles.active : ""}
                    onClick={() => token ? navigate('/Blog') : navigate('/login')}
                    >
                    Blog
                    </li>
                    <li
                    className={activeTab === "/compiler" ? styles.active : ""}
                    onClick={() => {
                        if (token) {
                        window.location.href = "http://localhost:4000/compiler";
                        } else {
                        navigate('/login');
                        }
                    }}
                    >
                    Compiler (beta Java)
                    </li>
                </ul>
                </nav>
        </div>
    );
};

export default Header;