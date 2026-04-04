// src/pages/NotFoundPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import './NotFoundPage.css';

function NotFoundPage() {
  const { t } = useTranslation();

  // تأثير ظهور العناصر عند التمرير
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // الحصول على اللغة الحالية
  const currentLang = document.documentElement.lang || 'en';
  const isArabic = currentLang === 'ar';

  // عناصر متحركة عائمة
  const floatingElements = [
    { icon: '🔍', top: '10%', left: '5%', delay: '0s', duration: '15s' },
    { icon: '💊', top: '20%', right: '8%', delay: '2s', duration: '18s' },
    { icon: '🔬', bottom: '25%', left: '10%', delay: '4s', duration: '20s' },
    { icon: '🌿', bottom: '15%', right: '12%', delay: '6s', duration: '16s' },
    { icon: '⚡', top: '60%', left: '3%', delay: '1s', duration: '14s' },
    { icon: '✨', top: '40%', right: '5%', delay: '3s', duration: '17s' },
    { icon: '🏭', bottom: '40%', left: '15%', delay: '5s', duration: '19s' },
    { icon: '⭐', top: '75%', right: '15%', delay: '7s', duration: '13s' },
  ];

  return (
    <div className="not-found-page">
      {/* خلفية متحركة */}
      <div className="not-found-bg">
        <div className="bg-gradient"></div>
        <div className="bg-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* العناصر العائمة */}
      <div className="floating-elements">
        {floatingElements.map((el, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{
              top: el.top,
              left: el.left,
              right: el.right,
              bottom: el.bottom,
              animationDelay: el.delay,
              animationDuration: el.duration,
            }}
          >
            {el.icon}
          </div>
        ))}
      </div>

      {/* المحتوى الرئيسي */}
      <div className="not-found-container">
        <div className="not-found-content">

          {/* الرقم 404 بتأثير ثلاثي الأبعاد */}
          <div className="error-code-container fade-up">
            <div className="error-code">
              <span className="digit digit-1">4</span>
              <span className="digit digit-2">0</span>
              <span className="digit digit-3">4</span>
            </div>
            <div className="error-code-shadow">404</div>
          </div>

          {/* العنوان */}
          <h1 className="error-title fade-up">
            {t('notFound.title') || 'الصفحة غير موجودة'}
          </h1>

          {/* الوصف */}
          <p className="error-description fade-up">
            {t('notFound.description') || 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.'}
          </p>

          {/* الاقتراحات */}
          <div className="error-suggestions fade-up">
            <p className="suggestions-title">
              {t('notFound.suggestions') || 'قد تجد ما تبحث عنه في:'}
            </p>
            <div className="suggestions-links">
              <Link to="/" className="suggestion-link">
                <span className="suggestion-icon">🏠</span>
                {t('nav.home') || 'الرئيسية'}
              </Link>
              <Link to="/products" className="suggestion-link">
                <span className="suggestion-icon">💊</span>
                {t('nav.products') || 'المنتجات'}
              </Link>
              <Link to="/blog" className="suggestion-link">
                <span className="suggestion-icon">📝</span>
                {t('nav.services') || 'المدونة'}
              </Link>
              <Link to="/contact" className="suggestion-link">
                <span className="suggestion-icon">📞</span>
                {t('nav.contact') || 'اتصل بنا'}
              </Link>
            </div>
          </div>

          {/* زر العودة */}
          <div className="error-actions fade-up">
            <Link to="/" className="btn-home">
              <span className="btn-icon">←</span>
              {t('notFound.backHome') || 'العودة إلى الرئيسية'}
            </Link>
            <button 
              className="btn-back"
              onClick={() => window.history.back()}
            >
              <span className="btn-icon">↺</span>
              {t('notFound.goBack') || 'الصفحة السابقة'}
            </button>
          </div>

          {/* نص مساعد */}
          <p className="error-help fade-up">
            {t('notFound.help') || 'إذا كنت تعتقد أن هناك خطأ، يرجى التواصل معنا للمساعدة.'}
          </p>
        </div>
      </div>

      {/* موجة سفلية */}
      <div className="error-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#f8faff" 
            fillOpacity="1" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default NotFoundPage;