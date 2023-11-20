"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ArgentinaFlag from '../assets/Icons/argentina.svg';
import USAFlag from '../assets/Icons/usa.svg';
import language from '../assets/Icons/language.png';
import './Styles/LanguagesDropdown.css';
import {Link} from '../../../navigation';

function LanguageDropdown(props) {
 const [selectedLanguage, setSelectedLanguage] = useState(props.initialLanguage); // Initialize with the selected language from props
 const [isDropdownOpen, setDropdownOpen] = useState(false);
 const dropdownRef = useRef(null);

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

 useEffect(() => {
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

 return (
  <div className={`language-dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
    <div
      className="language-selector-icon"
      onClick={() => setDropdownOpen(!isDropdownOpen)}
    >
      <Image src={language} alt="Flag" className="flag-icon" width={50} height={50} />
    </div>
    {isDropdownOpen && (
      <div className="language-options">
        <Link
            href={props.reflink} locale='en'
            className={`language-link ${selectedLanguage === 'en' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <Image src={ArgentinaFlag} width={25} alt="Argentinian Flag" className="flag-icon" style={{ padding: '5px' }} />
            English
        </Link>
        
        <Link
          href={props.reflink} locale='es'
          className={`language-link ${selectedLanguage === 'es' ? 'selected' : ''}`}
          onClick={() => handleLanguageChange('en')}
        >
          <Image src={USAFlag} alt="USA Flag" width={25} className="flag-icon" style={{ padding: '5px' }} />
            Español
        </Link>
      </div>
    )}
  </div>
 );
}

export default LanguageDropdown;
