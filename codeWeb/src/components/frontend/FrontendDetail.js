import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaTools,
  FaSun,
  FaMoon,
} from 'react-icons/fa';

function FrontendDetail() {
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
    color: darkMode ? '#f39c12' : '#2c3e50',
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
        <h1 style={headingStyle}>✨ Lộ trình chi tiết: Front-end Developer</h1>
        <p data-aos="fade-up">
          Đây là lộ trình giúp bạn trở thành một Front-end Developer chuyên nghiệp. Từ kiến thức nền tảng đến các thư viện hiện đại như ReactJS.
        </p>

        <h2 style={sectionHeading}>📌 Giai đoạn 1: Nền tảng web</h2>
        <ul>
          <li style={listItem} data-aos="fade-right"><FaHtml5 /> HTML5: thẻ sematic, form, media</li>
          <li style={listItem} data-aos="fade-right"><FaCss3Alt /> CSS3: Flexbox, Grid, Animation</li>
          <li style={listItem} data-aos="fade-right"><FaJsSquare /> JavaScript cơ bản: biến, hàm, điều kiện</li>
        </ul>

        <h2 style={sectionHeading}>📌 Giai đoạn 2: JavaScript nâng cao</h2>
        <ul>
          <li style={listItem} data-aos="fade-left">DOM, Event, Callback, Closure, Promise, Async/Await</li>
          <li style={listItem} data-aos="fade-left">Fetch API, làm việc với JSON, thao tác dữ liệu</li>
        </ul>

        <h2 style={sectionHeading}>📌 Giai đoạn 3: ReactJS</h2>
        <ul>
          <li style={listItem} data-aos="zoom-in"><FaReact /> JSX, Component, Props & State</li>
          <li style={listItem} data-aos="zoom-in">Hooks (useState, useEffect...), React Router</li>
          <li style={listItem} data-aos="zoom-in">State nâng cao: Redux, Context API</li>
        </ul>

        <h2 style={sectionHeading}>📌 Giai đoạn 4: Công cụ & best practices</h2>
        <ul>
          <li style={listItem} data-aos="fade-up"><FaTools /> Git, GitHub, Chrome DevTools</li>
          <li style={listItem} data-aos="fade-up">Responsive Web Design, SEO cơ bản</li>
          <li style={listItem} data-aos="fade-up">Deploy website: Vercel, Netlify, Firebase</li>
        </ul>

        <h2 style={{ ...sectionHeading, color: darkMode ? '#2ecc71' : '#27ae60' }}>🎯 Kết quả đạt được:</h2>
        <p
          data-aos="flip-left"
          style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            backgroundColor: darkMode ? '#1abc9c' : '#ecf9f1',
            color: darkMode ? '#ecf9f1' : '#2e7d32',
            padding: '20px',
            borderRadius: '12px',
            marginTop: '30px',
            boxShadow: '0 0 12px rgba(0,0,0,0.1)',
          }}
        >
          Sau khi hoàn thành, bạn có thể tự tin xây dựng website hiện đại, responsive và triển khai sản phẩm ra môi trường thực tế.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default FrontendDetail;
