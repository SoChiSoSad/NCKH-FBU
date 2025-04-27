import React from 'react';
import styles from'./Homepage.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function HomePage() {
  const user = useSelector((state)=> state.auth.login.currentUser)
  const navigate = useNavigate();
  const handleLearnClick = () => {
    navigate('/learn');
  }
  return (
    <div>
      <Header/>
      <section className={styles.htmlSection}>
        <div className={styles.titleBox}>
        <h1>HTML</h1>
        <p>The language for building web pages</p>
        <button className={styles.learnBtn} onClick={handleLearnClick}>Learn HTML</button>
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
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>

      <section className={styles.cssSection}>
        <div className={styles.titleBox}>
        <h1>CSS</h1>
        <p>The language for styling web pages</p>
        <button className={styles.learnBtn} onClick={handleLearnClick}>Learn CSS</button>
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
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>

      <section className={styles.JavaScriptSection}>
        <div className={styles.titleBox}>
        <h1>JavaScript</h1>
        <p>The language for programming web pages</p>
        <button className={styles.learnBtn} onClick={handleLearnClick}>Learn JavaScript</button>
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
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>

      <section className={styles.JavaSection}>
        <div className={styles.titleBox}>
        <h1>Java</h1>
        <p>A programming language</p>
        <button className={styles.learnBtn}>Learn Java</button>
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
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>
      <Footer/>

    </div>
  );
}

export default HomePage;
