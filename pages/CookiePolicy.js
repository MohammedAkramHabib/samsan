// src/pages/CookiePolicy.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../useTranslation';
import './Policies.css';
import SEO from '../components/SEO';
function CookiePolicy() {
  const { t } = useTranslation();
  const lastUpdated = new Date().toLocaleDateString();
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  // تحميل الإعدادات المحفوظة
  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      setCookiePreferences(JSON.parse(saved));
    }
  }, []);

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert(t('cookie.preferencesSaved'));
  };

  const acceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }));
    alert(t('cookie.allAccepted'));
  };

  const rejectAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }));
    alert(t('cookie.allRejected'));
  };

  return (
     <>
      <SEO 
        title={{
          ar: 'سياسة الخصوصية',
          en: 'Privacy Policy',
          fr: 'Politique de confidentialité',
          es: 'Política de privacidad'
        }}
        description={{
          ar: 'سياسة الخصوصية لموقع Samsan - كيف نحمي بياناتك الشخصية ونستخدمها.',
          en: 'Privacy policy of Samsan website - How we protect and use your personal data.',
          fr: 'Politique de confidentialité du site Samsan - Comment nous protégeons et utilisons vos données personnelles.',
          es: 'Política de privacidad del sitio web de Samsan - Cómo protegemos y usamos sus datos personales.'
        }}
        keywords="سياسة الخصوصية, Samsan, حماية البيانات, خصوصية"
        url="/privacy"
        type="website"
      />
      
    <div className="policy-container">
      <div className="policy-header">
        <h1>🍪 {t('cookie.title')}</h1>
        <p className="last-updated">{t('cookie.lastUpdated')}: {lastUpdated}</p>
        <div className="policy-badge">GDPR & ePrivacy Compliant</div>
      </div>

      <div className="policy-content">
        {/* مقدمة */}
        <section className="policy-section">
          <h2>{t('cookie.introduction.title')}</h2>
          <p>{t('cookie.introduction.content')}</p>
          <p>{t('cookie.introduction.scope')}</p>
        </section>

        {/* ما هي ملفات الارتباط */}
        <section className="policy-section">
          <h2>{t('cookie.whatAre.title')}</h2>
          <p>{t('cookie.whatAre.content')}</p>
          <div className="info-box">
            <strong>📌 {t('cookie.whatAre.note')}</strong>
            <p>{t('cookie.whatAre.noteText')}</p>
          </div>
        </section>

        {/* أنواع ملفات الارتباط */}
        <section className="policy-section">
          <h2>{t('cookie.types.title')}</h2>
          <div className="cookie-types">
            <div className="cookie-type">
              <div className="cookie-type-icon">🔒</div>
              <h3>{t('cookie.types.necessary')}</h3>
              <p>{t('cookie.types.necessaryDesc')}</p>
              <span className="cookie-badge always-active">{t('cookie.alwaysActive')}</span>
            </div>
            <div className="cookie-type">
              <div className="cookie-type-icon">⚙️</div>
              <h3>{t('cookie.types.functional')}</h3>
              <p>{t('cookie.types.functionalDesc')}</p>
            </div>
            <div className="cookie-type">
              <div className="cookie-type-icon">📊</div>
              <h3>{t('cookie.types.analytics')}</h3>
              <p>{t('cookie.types.analyticsDesc')}</p>
            </div>
            <div className="cookie-type">
              <div className="cookie-type-icon">🎯</div>
              <h3>{t('cookie.types.marketing')}</h3>
              <p>{t('cookie.types.marketingDesc')}</p>
            </div>
          </div>
        </section>

        {/* جدول ملفات الارتباط */}
        <section className="policy-section">
          <h2>{t('cookie.weUse.title')}</h2>
          <div className="cookie-table">
            <div className="cookie-row header">
              <span>{t('cookie.table.name')}</span>
              <span>{t('cookie.table.provider')}</span>
              <span>{t('cookie.table.purpose')}</span>
              <span>{t('cookie.table.duration')}</span>
            </div>
            <div className="cookie-row">
              <span>session_id</span>
              <span>{t('app.title')}</span>
              <span>{t('cookie.table.essentialPurpose')}</span>
              <span>{t('cookie.table.session')}</span>
            </div>
            <div className="cookie-row">
              <span>preferences</span>
              <span>{t('app.title')}</span>
              <span>{t('cookie.table.preferencesPurpose')}</span>
              <span>365 {t('cookie.table.days')}</span>
            </div>
            <div className="cookie-row">
              <span>_ga</span>
              <span>Google Analytics</span>
              <span>{t('cookie.table.analyticsPurpose')}</span>
              <span>730 {t('cookie.table.days')}</span>
            </div>
            <div className="cookie-row">
              <span>_fbp</span>
              <span>Facebook</span>
              <span>{t('cookie.table.marketingPurpose')}</span>
              <span>90 {t('cookie.table.days')}</span>
            </div>
          </div>
        </section>

        {/* إدارة التفضيلات */}
        <section className="policy-section preferences-section">
          <h2>{t('cookie.preferences.title')}</h2>
          <p>{t('cookie.preferences.content')}</p>
          
          <div className="preferences-card">
            <div className="preference-item">
              <div className="preference-info">
                <h4>{t('cookie.types.necessary')}</h4>
                <p>{t('cookie.types.necessaryDesc')}</p>
              </div>
              <div className="preference-toggle">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.necessary} 
                  disabled 
                  className="toggle-disabled"
                />
                <span className="toggle-label">{t('cookie.alwaysActive')}</span>
              </div>
            </div>
            
            <div className="preference-item">
              <div className="preference-info">
                <h4>{t('cookie.types.functional')}</h4>
                <p>{t('cookie.types.functionalDesc')}</p>
              </div>
              <div className="preference-toggle">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={cookiePreferences.functional}
                    onChange={(e) => setCookiePreferences({...cookiePreferences, functional: e.target.checked})}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="preference-item">
              <div className="preference-info">
                <h4>{t('cookie.types.analytics')}</h4>
                <p>{t('cookie.types.analyticsDesc')}</p>
              </div>
              <div className="preference-toggle">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={cookiePreferences.analytics}
                    onChange={(e) => setCookiePreferences({...cookiePreferences, analytics: e.target.checked})}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="preference-item">
              <div className="preference-info">
                <h4>{t('cookie.types.marketing')}</h4>
                <p>{t('cookie.types.marketingDesc')}</p>
              </div>
              <div className="preference-toggle">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={cookiePreferences.marketing}
                    onChange={(e) => setCookiePreferences({...cookiePreferences, marketing: e.target.checked})}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="preferences-buttons">
            <button onClick={acceptAll} className="btn-primary">{t('cookie.acceptAll')}</button>
            <button onClick={rejectAll} className="btn-secondary">{t('cookie.rejectAll')}</button>
            <button onClick={savePreferences} className="btn-save">{t('cookie.savePreferences')}</button>
          </div>
        </section>

        {/* كيفية التحكم */}
        <section className="policy-section">
          <h2>{t('cookie.control.title')}</h2>
          <p>{t('cookie.control.content')}</p>
          <ul>
            <li>🔧 {t('cookie.control.browser')}</li>
            <li>🔧 {t('cookie.control.thirdParty')}</li>
            <li>🔧 {t('cookie.control.optOut')}</li>
          </ul>
        </section>

        {/* تحديثات السياسة */}
        <section className="policy-section">
          <h2>{t('cookie.updates.title')}</h2>
          <p>{t('cookie.updates.content')}</p>
        </section>

        {/* الاتصال */}
        <section className="policy-section contact-section">
          <h2>{t('cookie.contact.title')}</h2>
          <div className="contact-info">
            <p><strong> {t('cookie.contact.email')}:</strong>info@samsan.com</p>
            <p><strong> {t('cookie.contact.phone')}:</strong>+1 773 628 7321</p>
          </div>
        </section>
      </div>
    </div></>
  );
}

export default CookiePolicy;