// src/components/LanguageSwitcher.js
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation, availableLanguages } from '../useTranslation';
import './LanguageSwitcher.css';

// استيراد أعلام SVG لجميع اللغات
import saFlag from '../media/SA';
import usFlag from '../media/US';
import frFlag from '../media/FR';
import esFlag from '../media/ES';
// src/components/LanguageSwitcher.js
// خريطة الأعلام
const flagMap = {
  'ar': saFlag,
  'en': usFlag,
  'fr': frFlag,
  'es': esFlag
};

// أسماء اللغات للعرض
const languageNames = {
  'ar': 'العربية',
  'en': 'English',
  'fr': 'Français',
  'es': 'Español'
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLangCode = i18n.language;
  const CurrentFlag = flagMap[currentLangCode];
  const currentLangName = languageNames[currentLangCode];

  // تغيير اللغة
  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };
  
  // تبديل القائمة المنسدلة
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button className="lang-selector" onClick={toggleDropdown}>
        <div className="lang-flag-img-wrapper">
          <CurrentFlag className="lang-flag-img" />
        </div>
        <span className="lang-name">{currentLangName}</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown">
          {availableLanguages.map((lang) => {
            const FlagComponent = flagMap[lang.code];
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`lang-option ${currentLangCode === lang.code ? 'active' : ''}`}
              >
                <div className="lang-option-flag-wrapper">
                  <FlagComponent className="lang-option-flag" />
                </div>
                <span className="lang-option-name">{lang.name}</span>
                {currentLangCode === lang.code && <span className="check-mark">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;