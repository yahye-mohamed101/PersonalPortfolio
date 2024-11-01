import React from 'react';
import profilePicture from '../../assets/Dev_pic.jpg'
import '../../assets/styles/aboutMe.css';


function AboutMe() {
  return (
    <section>
      <div className='about-me'>
      <h2>About Me</h2>
      <img src={profilePicture} alt="Developer Profile" className="profile-image"/>
      <p>My name is Yahye Mohamed, and I'm passionate about programming and solving complex problems. I enjoy the process of thinking analytically and tackling challenges through code.
        With a strong drive to improve, I aim to grow into a skilled software engineer.
      I'm dedicated to continuously learning and refining my skills, especially in creating efficient and effective solutions.
      Whether it's building web applications or diving into algorithms, I'm excited to apply my technical abilities and creativity to make a meaningful impact.
      I'm always looking to expand my knowledge and am eager to contribute to projects that challenge me to grow. In my programming journey, I constantly seek to expand my skills and explore new technologies, driven by a passion for problem-solving and creating impactful solutions. I enjoy the challenge of breaking down complex problems and finding the most efficient, innovative ways to solve them. Every new project offers a chance to apply what I've learned and push myself to become a stronger software engineer.

      As I work towards my goal, I'm particularly focused on deepening my understanding of both front-end and back-end development. This well-rounded approach allows me to appreciate the full development cycle and create seamless, user-centered applications. With each step forward, I am dedicated to not only building my technical skills but also honing a mindset of adaptability, curiosity, and continuous improvement in my field.
      </p>
      </div>
    </section>
  );
}

export default AboutMe;