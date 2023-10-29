"use state"

// import React, { useState } from 'react';
// import { ReactComponent as ArgentinaFlag } from '../assets/Icons/argentina.svg'; // Use your actual SVG file for the Argentina flag
// import { ReactComponent as USAFlag } from '../assets/Icons/usa.svg'; // Use your actual SVG file for the USA flag

// const LanguageDropdown = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('es'); // 'es' for Spanish, 'en' for English

//   const handleLanguageChange = (language) => {
//     // You can implement logic here to change the language in your app
//     setSelectedLanguage(language);
//   };

//   return (
//     <div className="language-dropdown">
//       <div className="language-selector">
//         <button
//           className={`language-button ${selectedLanguage === 'es' ? 'selected' : ''}`}
//           onClick={() => handleLanguageChange('es')}
//         >
//           <ArgentinaFlag className="flag-icon" />
//           Español
//         </button>
//         <button
//           className={`language-button ${selectedLanguage === 'en' ? 'selected' : ''}`}
//           onClick={() => handleLanguageChange('en')}
//         >
//           <USAFlag className="flag-icon" />
//           English
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LanguageDropdown;

import React, { useState } from 'react';
import { ReactComponent as ArgentinaFlag } from '../assets/Icons/argentina.svg'; // Use your actual SVG file for the Argentina flag
import { ReactComponent as USAFlag } from '../assets/Icons/usa.svg'; // Use your actual SVG file for the USA flag

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // 'es' for Spanish, 'en' for English
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    // You can implement logic here to change the language in your app
    setSelectedLanguage(language);
    setDropdownOpen(false); // Close the dropdown after language selection
  };

  return (
    <div className="language-dropdown">
      <div
        className={`language-selector-icon ${isDropdownOpen ? 'open' : ''}`}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {selectedLanguage === 'es' ? <ArgentinaFlag className="flag-icon" /> : <USAFlag className="flag-icon" />}
      </div>
      {isDropdownOpen && (
        <div className="language-options">
          <button
            className={`language-button ${selectedLanguage === 'es' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('es')}
          >
            <ArgentinaFlag className="flag-icon" />
            Español
          </button>
          <button
            className={`language-button ${selectedLanguage === 'en' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <USAFlag className="flag-icon" />
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
