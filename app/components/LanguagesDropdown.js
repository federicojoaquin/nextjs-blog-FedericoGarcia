"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArgentinaFlag from '../assets/Icons/argentina.svg';
import USAFlag from '../assets/Icons/usa.svg';
import language from '../assets/Icons/language.png';
import './Styles/LanguagesDropdown.css';

function LanguageDropdown(props) {
  const [selectedLanguage, setSelectedLanguage] = useState(props.initialLanguage); // Initialize with the selected language from props
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    // You can implement logic here to change the language in your app
    console.log('ejecutado');
    setSelectedLanguage(language);
    setDropdownOpen(false); // Close the dropdown after language selection
    // Call the parent component's function
    if (props.onLanguageChange) {
      props.onLanguageChange(language);
    }
  };

  useEffect(() => {
    // Update selected language when the initialLanguage prop changes (e.g., when navigating back)
    setSelectedLanguage(props.initialLanguage);
  }, [props.initialLanguage]);

  return (
    <div className="language-dropdown">
      <div
        className={`language-selector-icon ${isDropdownOpen ? 'open' : ''}`}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <Image src={language} alt="Flag" className="flag-icon" width={60} height={60} />
      </div>
      {isDropdownOpen && (
        <div className="language-options">
          <button
            className={`language-button ${selectedLanguage === 'en' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <Image src={ArgentinaFlag} width={25} alt="Argentinian Flag" className="flag-icon" style={{ padding: '5px' }} />
            English
          </button>
          <button
            className={`language-button ${selectedLanguage === 'es' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('es')}
          >
            <Image src={USAFlag} alt="USA Flag" width={25} className="flag-icon" style={{ padding: '5px' }} />
            Español
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
