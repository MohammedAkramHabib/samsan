// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import './Footer.css';
import Logo from '../media/logo';
import Call from '../media/call';
import Email from '../media/mail';
import Whatsapp from '../media/whatsapp';
import X from '../media/x';
import Facebook from '../media/facebook';
import Instagram from '../media/instagram';
import Location from '../media/location';

function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* القسم الأول: معلومات عن الموقع */}
                <div className="footer-section">
                    <h3 className="footer-title">
                        <Logo />
                    </h3>
                    <p className="footer-description">
                        {t('app.description')}
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61579022993992&rdid=4SFiakJn0Lv7e7x1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AxzxCuHMd%2F#" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="social-icon"><Facebook /></i>
                        </a>
                        <a href="https://www.instagram.com/samsan_inc?igsh=MXhkMXJ3Z3UwcWVndw==" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="social-icon"><Instagram /></i>
                        </a>
                        <a href="https://wa.me/17736287321" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="social-icon"><Whatsapp /></i>
                        </a>
                    </div>
                </div>

                {/* القسم الثاني: روابط سريعة */}
                <div className="footer-section">
                    <h3 className="footer-title">{t('footer.quickLinks') || 'روابط سريعة'}</h3>
                    <ul className="footer-links">
                        <li><Link to="/">{t('nav.home')}</Link></li>
                        <li><Link to="/about">{t('nav.about')}</Link></li>
                        <li><Link to="/blog">{t('nav.services')}</Link></li>
                        <li><Link to="/products">{t('nav.products')}</Link></li>
                        <li><Link to="/contact">{t('nav.contact')}</Link></li>
                    </ul>
                </div>

                {/* القسم الثالث: معلومات الاتصال */}
                <div className="footer-section">
                    <h3 className="footer-title">{t('footer.contact') || 'اتصل بنا'}</h3>
                    <ul className="footer-contact">
                        <li>
                            <span className="contact-icon"><Email /></span>
                            <a href="mailto:info@samsan.com">info@samsan.com</a>
                        </li>
                        <li>
                            <span className="contact-icon"><Location /></span>
                            <span>4362 N Elston Ave, Chicago, IL 60618, USA</span>
                        </li>
                        <li>
                            <span className="contact-icon"><Call /></span>
                            <a href="tel:+17736287321">+1 773 628 7321</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* القسم السفلي */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="copyright">
                        © {currentYear} {t('app.title')}. {t('footer.rights')}
                    </p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">{t('footer.privacy')}</Link>
                        <Link to="/terms">{t('footer.terms')}</Link>
                        <Link to="/cookies">{t('footer.cookies') || 'سياسة ملفات الارتباط'}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;