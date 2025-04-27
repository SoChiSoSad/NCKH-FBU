import React from 'react';
import styles from'./Homepage.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  const user = useSelector((state)=> state.auth.login.currentUser)
  const navigate = useNavigate();
  const goToCompiler = () => {
    window.open('http://localhost:4000/compiler', '_blank');
  };

  return (
    <div>
      <Header/>
      <section className={styles.htmlSection}>
        <div className={styles.titleBox}>
        <h1>HTML</h1>
        <p>The language for building web pages</p>
        <button className={styles.learnBtn} onClick={() => navigate('/course/5')}>Learn HTML</button>
        </div>
        <div className={styles.codeExample}>
          <h3>HTML Example:</h3>
          <pre>
            &lt;!DOCTYPE html&gt;<br/>
            &lt;html&gt;<br/>
            &lt;head&gt;<br/>
                &lt;title&gt;HTML Tutorial&lt;/title&gt;<br/>
            &lt;/head&gt;<br/>
            &lt;body&gt;<br/>
                &lt;h1&gt;This is a heading&lt;/h1&gt;<br/>
                &lt;p&gt;This is a paragraph.&lt;/p&gt;<br/>
            &lt;/body&gt;<br/>
            &lt;/html&gt;<br/>
          </pre>
          <button className={styles.tryBtn} onClick={goToCompiler}>
            Try it Yourself
          </button>
        </div>
      </section>

      <section className={styles.cssSection}>
        <div className={styles.titleBox}>
        <h1>CSS</h1>
        <p>The language for styling web pages</p>
        <button className={styles.learnBtn} onClick={() => navigate('/course/5')}>Learn CSS</button>
        </div>
        <div className={styles.codeExample}>
          <h3>CSS Example:</h3>
          <pre>
            body {'{'}<br/>
              background-color: lightblue;<br/>
            {'}'}<br/>
            h1 {'{'}<br/>
              color: white;<br/>
              text-align: center;<br/>
            {'}'}<br/>
            p {'{'}<br/>
              font-family: verdana;<br/>
              font-size: 20px;<br/>
            {'}'}<br/>
          </pre>
          <button className={styles.tryBtn} onClick={goToCompiler}>
            Try it Yourself
          </button>
        </div>
      </section>

      <section className={styles.JavaScriptSection}>
        <div className={styles.titleBox}>
        <h1>JavaScript</h1>
        <p>The language for programming web pages</p>
        <button className={styles.learnBtn} onClick={() => navigate('/course/6')}>Learn JavaScript</button>
        </div>
        <div className={styles.codeExample}>
          <h3>JavaScript Example:</h3>
          <pre>
            &lt;button onclick="myFunction()"&gt;<br/>Click Me!&lt;/button&gt;<br/>
            &lt;script&gt;<br/>
            function myFunction() {'{'}<br/>
            &nbsp;&nbsp;let x = document.getElementById("demo");<br/>
            &nbsp;&nbsp;x.style.fontSize = "25px";<br/>
            &nbsp;&nbsp;x.style.color = "red";<br/>
            {'}'}<br/>
            &lt;/script&gt;
          </pre>
          <button className={styles.tryBtn} onClick={goToCompiler}>
              Try it Yourself
            </button>
        </div>
      </section>

      <section className={styles.JavaSection}>
        <div className={styles.titleBox}>
        <h1>Java</h1>
        <p>A programming language</p>
        <button className={styles.learnBtn} onClick={() => navigate('/course/3')}>Learn Java</button>
        </div>
        <div className={styles.codeExample}>
          <h3>Java Example:</h3>
          <pre>
            public class Main {'{'}<br/>
            &nbsp;&nbsp;public static void main(String[] args) {''}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br/>
            &nbsp;&nbsp;{'}'}<br/>
            {'}'} <br/>
          </pre>
          <button className={styles.tryBtn} onClick={goToCompiler}>
            Try it Yourself
          </button>
        </div>
      </section>

      <div className={styles.featuredPosts}>
        <h2>Bài viết nổi bật</h2>
        <p className={styles.subheading}>
          Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
        </p>
        <div className={styles.postsGrid}>
          {[
            {
              title: "Hành trình tự học lập trình",
              desc: "Chia sẻ kinh nghiệm học lập trình từ con số 0.",
              tag: "Lập trình",
              time: "2 giờ trước",
              readTime: "5 phút đọc",
              url: "https://cafedev.vn/tong-hop-cac-bai-viet-chia-se-kinh-nghiem-cuc-huu-ich-cho-nguoi-moi-bat-dau-lap-trinh-tu-con-so-0/"
            },
            {
              title: "Cách học hiệu quả",
              desc: "Những mẹo nhỏ giúp bạn học lập trình nhanh hơn.",
              tag: "Phát triển bản thân",
              time: "5 giờ trước",
              readTime: "7 phút đọc",
              url: "https://cafedev.vn/chia-se-kho-tai-lieu-it-va-ebook-lap-trinh-cuc-hay/"
            },
            {
              title: "Tại sao nên học React Native?",
              desc: "Giới thiệu về React Native và lý do bạn nên học.",
              tag: "Mobile",
              time: "1 ngày trước",
              readTime: "6 phút đọc",
              url: "https://cafedev.vn/mot-su-so-sanh-nhe-nhung-day-du-moi-thu-ve-react-native-voi-flutter-trong-nen-cong-nghiep-da-nen-tang/"
            },
          ].map((post, index) => (
            <div key={index} className={styles.postCard}>
              <img
                src="https://cafedev.vn/wp-content/uploads/2020/07/logo-web-1000-300x99.png"
                alt="Cafe dev"
              />
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.author}>Cafe dev</span>
                  <span className={styles.verified}>✔</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className={styles.meta}>
                  <span className={styles.tag}>{post.tag}</span>
                  <span>{post.time}</span>
                  <span>{post.readTime}</span>
                </div>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  Đọc tiếp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default HomePage;
