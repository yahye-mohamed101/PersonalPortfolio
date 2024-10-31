import React from 'react';
import '../assets/styles/footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2024 Yahye Mohamed</p> {/* Copyright notice */}
      <div className="social-links"> {/* Container for social media links */}
        <a href="https://github.com/yahye-mohamed101">GitHub</a> {/* Link to GitHub profile */}
        <a href="https://www.linkedin.com/in/yahye-mohamed-306988329/">LinkedIn</a> {/* Link to LinkedIn profile */}
        <a href="https://stackoverflow.com/users/yourusername">Stack Overflow</a> {/* Link to Stack Overflow profile */}
      </div>
    </footer>
  );
}


export default Footer;