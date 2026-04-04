import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';
import Logo from '../media/logo';
function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* الشعار */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
        <Logo/>
        </Link>

        {/* زر القائمة للجوال */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* الروابط - للشاشات الكبيرة */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink 
                to="/" 
                exact 
                className="nav-link" 
                activeClassName="active"
                onClick={closeMenu}
              >
                {t('nav.home')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className="nav-link" 
                activeClassName="active"
                onClick={closeMenu}
              >
                {t('nav.about')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/blog" 
                className="nav-link" 
                activeClassName="active"
                onClick={closeMenu}
              >
                {t('nav.services')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/products" 
                className="nav-link" 
                activeClassName="active"
                onClick={closeMenu}
              >
                {t('nav.products')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className="nav-link" 
                activeClassName="active"
                onClick={closeMenu}
              >
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>

          {/* أزرار اللغة */}
          <div className="nav-language">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;