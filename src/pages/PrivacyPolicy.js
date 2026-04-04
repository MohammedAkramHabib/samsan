// src/pages/PrivacyPolicy.js
import React from 'react';
import { useTranslation } from '../useTranslation';
import './Policies.css';
import SEO from '../components/SEO';
function PrivacyPolicy() {
  const { t } = useTranslation();
  const lastUpdated = new Date().toLocaleDateString();

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
          <h1>{t('privacy.title')}</h1>
          <p className="last-updated">{t('privacy.lastUpdated')}: {lastUpdated}</p>
          <div className="policy-badge">GDPR & CCPA Compliant</div>
        </div>

        <div className="policy-content">
          {/* مقدمة */}
          <section className="policy-section">
            <h2>{t('privacy.introduction.title')}</h2>
            <p>{t('privacy.introduction.content')}</p>
            <p>{t('privacy.introduction.scope')}</p>
          </section>

          {/* المعلومات التي نجمعها */}
          <section className="policy-section">
            <h2>{t('privacy.dataCollection.title')}</h2>
            <h3>{t('privacy.dataCollection.personalData')}</h3>
            <ul>
              <li>• {t('privacy.dataCollection.name')}</li>
              <li>• {t('privacy.dataCollection.email')}</li>
              <li>• {t('privacy.dataCollection.phone')}</li>
              <li>• {t('privacy.dataCollection.address')}</li>
              <li>• {t('privacy.dataCollection.ip')}</li>
              <li>• {t('privacy.dataCollection.browser')}</li>
            </ul>

            <h3>{t('privacy.dataCollection.automatedData')}</h3>
            <ul>
              <li>• {t('privacy.dataCollection.cookies')}</li>
              <li>• {t('privacy.dataCollection.analytics')}</li>
              <li>• {t('privacy.dataCollection.usage')}</li>
            </ul>
          </section>

          {/* كيفية استخدام معلوماتك */}
          <section className="policy-section">
            <h2>{t('privacy.dataUsage.title')}</h2>
            <ul>
              <li>✓ {t('privacy.dataUsage.provide')}</li>
              <li>✓ {t('privacy.dataUsage.improve')}</li>
              <li>✓ {t('privacy.dataUsage.communicate')}</li>
              <li>✓ {t('privacy.dataUsage.security')}</li>
              <li>✓ {t('privacy.dataUsage.legal')}</li>
            </ul>
          </section>

          {/* مشاركة البيانات */}
          <section className="policy-section">
            <h2>{t('privacy.dataSharing.title')}</h2>
            <p>{t('privacy.dataSharing.content')}</p>
            <div className="info-box">
              <strong>🔒 {t('privacy.dataSharing.thirdParties')}</strong>
              <p>{t('privacy.dataSharing.thirdPartiesNote')}</p>
            </div>
            <div className="info-box">
              <strong>⚖️ {t('privacy.dataSharing.legalRequirements')}</strong>
              <p>{t('privacy.dataSharing.legalRequirementsNote')}</p>
            </div>
          </section>

          {/* حقوقك */}
          <section className="policy-section">
            <h2>{t('privacy.userRights.title')}</h2>
            <div className="rights-grid">
              <div className="right-card">
                <span className="right-icon">🔍</span>
                <h4>{t('privacy.userRights.access')}</h4>
                <p>{t('privacy.userRights.accessDesc')}</p>
              </div>
              <div className="right-card">
                <span className="right-icon">✏️</span>
                <h4>{t('privacy.userRights.rectify')}</h4>
                <p>{t('privacy.userRights.rectifyDesc')}</p>
              </div>
              <div className="right-card">
                <span className="right-icon">🗑️</span>
                <h4>{t('privacy.userRights.erase')}</h4>
                <p>{t('privacy.userRights.eraseDesc')}</p>
              </div>
              <div className="right-card">
                <span className="right-icon">⛔</span>
                <h4>{t('privacy.userRights.restrict')}</h4>
                <p>{t('privacy.userRights.restrictDesc')}</p>
              </div>
              <div className="right-card">
                <span className="right-icon">📥</span>
                <h4>{t('privacy.userRights.portability')}</h4>
                <p>{t('privacy.userRights.portabilityDesc')}</p>
              </div>
              <div className="right-card">
                <span className="right-icon">⚡</span>
                <h4>{t('privacy.userRights.object')}</h4>
                <p>{t('privacy.userRights.objectDesc')}</p>
              </div>
            </div>
          </section>

          {/* سياسة ملفات الارتباط */}
          <section className="policy-section">
            <h2>{t('privacy.cookies.title')}</h2>
            <p>{t('privacy.cookies.content')}</p>
            <div className="cookie-table">
              <div className="cookie-row header">
                <span>{t('privacy.cookies.cookieName')}</span>
                <span>{t('privacy.cookies.purpose')}</span>
                <span>{t('privacy.cookies.duration')}</span>
              </div>
              <div className="cookie-row">
                <span>samsan_session</span>
                <span>{t('privacy.cookies.essential')}</span>
                <span>{t('privacy.cookies.session')}</span>
              </div>
              <div className="cookie-row">
                <span>samsan_preferences</span>
                <span>{t('privacy.cookies.preferences')}</span>
                <span>365 {t('privacy.cookies.days')}</span>
              </div>
              <div className="cookie-row">
                <span>_ga</span>
                <span>{t('privacy.cookies.analytics')}</span>
                <span>730 {t('privacy.cookies.days')}</span>
              </div>
              <div className="cookie-row">
                <span>_fbp</span>
                <span>{t('privacy.cookies.marketing')}</span>
                <span>90 {t('privacy.cookies.days')}</span>
              </div>
            </div>
          </section>

          {/* أمن البيانات */}
          <section className="policy-section">
            <h2>{t('privacy.dataSecurity.title')}</h2>
            <p>{t('privacy.dataSecurity.content')}</p>
            <ul>
              <li>🔐 {t('privacy.dataSecurity.encryption')}</li>
              <li>🛡️ {t('privacy.dataSecurity.accessControl')}</li>
              <li>📊 {t('privacy.dataSecurity.monitoring')}</li>
              <li>💾 {t('privacy.dataSecurity.backup')}</li>
            </ul>
          </section>

          {/* خصوصية الأطفال */}
          <section className="policy-section">
            <h2>{t('privacy.children.title')}</h2>
            <p>{t('privacy.children.content')}</p>
          </section>

          {/* نقل البيانات الدولي */}
          <section className="policy-section">
            <h2>{t('privacy.international.title')}</h2>
            <p>{t('privacy.international.content')}</p>
          </section>

          {/* فترة الاحتفاظ بالبيانات */}
          <section className="policy-section">
            <h2>{t('privacy.retention.title')}</h2>
            <p>{t('privacy.retention.content')}</p>
          </section>

          {/* تغييرات السياسة */}
          <section className="policy-section">
            <h2>{t('privacy.changes.title')}</h2>
            <p>{t('privacy.changes.content')}</p>
          </section>

          {/* الاتصال بنا */}
          <section className="policy-section contact-section">
            <h2>{t('privacy.contact.title')}</h2>
            <div className="contact-info">
              <p><strong> {t('privacy.contact.email')}:</strong> privacy@samsan.com</p>
              <p><strong> {t('privacy.contact.address')}:</strong> 4362 N Elston Ave, Chicago, IL 60618, USA</p>
              <p><strong> {t('privacy.contact.phone')}:</strong> +1 773 628 7321</p>
              <p><strong> {t('privacy.contact.dpo')}:</strong> {t('privacy.contact.dpoName')}</p>
            </div>

          </section>
        </div>
      </div></>
  );
}

export default PrivacyPolicy;