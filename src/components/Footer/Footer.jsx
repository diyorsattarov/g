import React from 'react';
import './Footer.css';

function Footer({ darkMode }) {
  return (
    <div className={`footer ${darkMode ? 'dark' : ''}`}>
      <h2>GAZA GENOCIDE</h2>
    </div>
    
  );
}

export default Footer;
