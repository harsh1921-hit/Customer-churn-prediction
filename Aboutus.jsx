import React from "react";
import "./Aboutus.css"; // Import CSS for styling

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Harsh Kumar</strong>, an aspiring Data Scientist currently pursuing B.Tech in Computer Science & Engineering (Data Science) at Haldia Institute of Technology. I have a strong foundation in Python, Machine Learning, Data Structures, SQL, OOPs, and more.
        </p>

        <h2>My Expertise</h2>
        <ul className="skills-list">
          <li>✔ Data Structures & Algorithms</li>
          <li>✔ Machine Learning</li>
          <li>✔ Python & SQL</li>
          <li>✔ Web Development (HTML, CSS, JavaScript)</li>
          <li>✔ Cloud Computing (AWS)</li>
          <li>✔ Problem-Solving & Leadership</li>
        </ul>

        <h2>Professional Experience</h2>
        <p>
          I was the Team Leader at UDG Esports, where I managed a 20+ member team, handled 19 million+ views, and worked with global brands like Supercell & ESPL. I also streamlined operations to improve workflow efficiency by 98.1%.
        </p>

        <h2>Connect With Me</h2>
        <p>
          Feel free to reach out via:
          <br />
          📧 Email: <a href="mailto:harshkumar01062001@gmail.com">harshkumar01062001@gmail.com</a>
          <br />
          🔗 LinkedIn: <a href="https://www.linkedin.com/in/harsh-kumar-631737219/" target="_blank" rel="noopener noreferrer">linkedin.com/in/harsh-kumar-631737219/</a>
          <br />
          💻 GitHub: <a href="https://github.com/harsh1921-hit" target="_blank" rel="noopener noreferrer">github.com/harsh1921-hit</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
