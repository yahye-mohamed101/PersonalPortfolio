import React from 'react';
import '../../assets/footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2023 Yahye Mohamed</p> {/* Copyright notice */}
      <div className="social-links"> {/* Container for social media links */}
        <a href="https://github.com/yahye-mohamed101">GitHub</a> {/* Link to GitHub profile */}
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a> {/* Link to LinkedIn profile */}
        <a href="https://stackoverflow.com/users/yourusername">Stack Overflow</a> {/* Link to Stack Overflow profile */}
      </div>
    </footer>
  );
}


export default Footer;