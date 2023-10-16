import React from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="header-content"> {/* Create a container for centering */}
        <DarkThemeToggle onClick={toggleDarkMode} className={darkMode ? 'dark' : ''} />
        <h1>GAZA GENOCIDE</h1>
      </div>
    </div>
  );
}

export default Header;
