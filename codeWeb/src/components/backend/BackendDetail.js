import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt, FaSun, FaMoon } from 'react-icons/fa';

function BackendDetail() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '50px 30px',
    borderRadius: '16px',
    color: darkMode ? '#ecf0f1' : '#2c3e50',
    background: darkMode
      ? 'linear-gradient(to right, #2c3e50, #34495e)'
      : 'linear-gradient(to right, #fdfbfb, #ebedee)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.4s ease',
  };

  const headingStyle = {
    fontSize: '2.8rem',
    marginBottom: '1rem',
    textAlign: 'center',
    fontWeight: '700',
    color: darkMode ? '#f1c40f' : '#34495e',
  };

  const sectionHeading = {
    fontSize: '1.8rem',
    marginTop: '2.5rem',
    marginBottom: '1rem',
    fontWeight: '600',
    color: darkMode ? '#9b59b6' : '#8e44ad',
    borderBottom: '2px solid #ccc',
    paddingBottom: '6px',
  };

  const listItem = {
    marginBottom: '8px',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

//   const toggleBtnStyle = {
//     position: 'fixed',
//     top: '20px',
//     right: '30px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '1.6rem',
//     cursor: 'pointer',
//     color: darkMode ? '#f1c40f' : '#2c3e50',
//     zIndex: 1000,
//   };

  return (
    <div style={{ background: darkMode ? '#1c1c1c' : '#f4f6f7', minHeight: '100vh' }}>
      {/* <button onClick={() => setDarkMode(!darkMode)} style={toggleBtnStyle}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button> */}

      <Header />
      <div style={containerStyle}>
        <h1 style={headingStyle}>🚀 Lộ trình chi tiết: Back-end Developer</h1>
        <p data-aos="fade-up">
          Back-end Developer chịu trách nhiệm xử lý logic, lưu trữ dữ liệu, bảo mật và vận hành hệ thống phía máy chủ.
          Dưới đây là các bước bạn nên đi qua nếu muốn trở thành Back-end chuyên nghiệp.
        </p>

        <h2 style={sectionHeading}>📌 Giai đoạn 1: Nắm vững kiến thức nền tảng</h2>
        <ul>
          <li style={listItem} data-aos="fade-right">HTTP, RESTful API, Client - Server</li>
          <li style={listItem} data-aos="fade-right">Hiểu về cách hoạt động của Web & Internet</li>
        </ul>

        <h2 style={sectionHeading}>📌 Giai đoạn 2: Chọn một ngôn ngữ lập trình</h2>
        <ul>
          <li style={listItem} data-aos="fade-left"><FaNodeJs /> Node.js: Xử lý bất đồng bộ, Express.js</li>
          <li style={listItem} data-aos="fade-left"><FaPython /> Python: Flask, Django</li>
          <li style={listItem} data-aos="fade-left"><FaJava /> Java: Spring Boot</li>
        </ul>

        <h2 style={sectionHeading}>📌 Giai đoạn 3: Làm việc với cơ sở dữ liệu</h2>
        <ul>
          <li style={listItem} data-aos="fade-up"><FaDatabase /> SQL: MySQL, PostgreSQL</li>
          <li style={listItem} data-aos="fade-up">NoSQL: MongoDB, Redis</li>
          <li style={listItem} data-aos="fade-up">ORM: Sequelize, Mongoose, Hibernate</li>
        </ul>

        <h2 style={sectionHeading}>📌 Giai đoạn 4: Công cụ và kỹ năng nâng cao</h2>
        <ul>
          <li style={listItem} data-aos="fade-right"><FaGitAlt /> Git & GitHub: quản lý phiên bản</li>
          <li style={listItem} data-aos="fade-right">Authentication (JWT, OAuth2)</li>
          <li style={listItem} data-aos="fade-right">Deploy: Docker, CI/CD, cloud (VPS, Heroku, AWS)</li>
        </ul>

        <h2 style={{ ...sectionHeading, color: darkMode ? '#2ecc71' : '#27ae60' }}>🎯 Kết quả đạt được:</h2>
        <p
          data-aos="zoom-in"
          style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            backgroundColor: darkMode ? '#2e7d32' : '#ecf9f1',
            color: darkMode ? '#ecf9f1' : '#2e7d32',
            padding: '20px',
            borderRadius: '12px',
            marginTop: '30px',
            boxShadow: '0 0 12px rgba(0,0,0,0.1)',
          }}
        >
          Sau lộ trình này, bạn sẽ có thể xây dựng hệ thống backend hoàn chỉnh, tối ưu hiệu suất và đảm bảo bảo mật,
          tích hợp dễ dàng với các dịch vụ khác.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default BackendDetail;
