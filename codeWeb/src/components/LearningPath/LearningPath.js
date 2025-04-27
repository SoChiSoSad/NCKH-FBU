import React from 'react';
import styles from'./LearningPath.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faJava,} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function LearningPath() {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <body>
      <div className={styles.Container}>
        <h1>Lộ trình học</h1>
        <p>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm
          với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".
        </p>
        <div className={styles.card}>
          <img
            alt="Front-end Image"
            height="100"
            src={require('../../images/FE_icon.jpg')}
            width="100"
          />
          <div>
            <h2>Lộ trình học Front-end</h2>
            <p>
              Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ
              chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
            </p>
            <div className={styles.icons}>
                <a href="#">
                <FontAwesomeIcon icon={faHtml5} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faCss3Alt} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faJs} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faReact} />
                </a>
            </div>
            <button onClick={() => navigate('/learningpath/frontend')}>XEM CHI TIẾT</button>
          </div>
        </div>
        <div className={styles.card}>
          <img
            alt="Back-end Image"
            height="100"
            src={require('../../images/BE_icon.jpg')}
            width="100"
          />
          <div>
            <h2>Lộ trình học Back-end</h2>
            <p>
              Lập trình viên Back-end là người làm việc với dữ liệu, công việc
              thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end
              nhé.
            </p>
            <div className={styles.icons}>
                <a href="#">
                <FontAwesomeIcon icon={faNodeJs} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faPython} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faJava} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faDatabase} />
                </a>
            </div>
            <button onClick={() => navigate('/learningpath/backend')}>XEM CHI TIẾT</button>
          </div>
        </div>
      </div>
    </body>
    <Footer/>
    </div>
    );
}
export default LearningPath;