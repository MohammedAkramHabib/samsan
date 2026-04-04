// src/pages/About.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import './About.css';
import SEO from '../components/SEO';
function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('mission');

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

  // في صفحة About.js - تحديث مصفوفة stats
  const stats = [
    { number: '7+', label: 'سنوات من الخبرة', icon: '📅' },
    { number: '15+', label: 'دولة حول العالم', icon: '🌍' },
    { number: '50K+', label: 'عميل سعيد', icon: '😊' },
    { number: '9+', label: 'منتج طبيعي', icon: '💊' },
    { number: '98%', label: 'رضا العملاء', icon: '⭐' },
    { number: '500+', label: 'اختبار جودة سنوياً', icon: '🔬' }
  ];

  // تحديث مصفوفة certificates
  const certificates = [
    { name: 'FDA', description: 'إدارة الغذاء والدواء الأمريكية', icon: '🇺🇸' },
    { name: 'HALAL', description: 'شهادة حلال عالمية', icon: '☪️' },
    { name: 'GMP', description: 'ممارسات التصنيع الجيدة', icon: '🏭' },
    { name: 'ISO 9001', description: 'نظام إدارة الجودة', icon: '📋' },
  ];

  // فريق العمل
  const team = [
    {
      name: t('about.team.ceo.name'),
      position: t('about.team.ceo.position'),
      positionEn: 'CEO',
      image: '👨‍⚕️',
      bio: t('about.team.ceo.bio')
    },
    {
      name: t('about.team.rd.name'),
      position: t('about.team.rd.position'),
      positionEn: 'R&D Director',
      image: '👩‍🔬',
      bio: t('about.team.rd.bio')
    },
    {
      name: t('about.team.quality.name'),
      position: t('about.team.quality.position'),
      positionEn: 'Quality Manager',
      image: '👨‍🔬',
      bio: t('about.team.quality.bio')
    },
    {
      name: t('about.team.nutrition.name'),
      position: t('about.team.nutrition.position'),
      positionEn: 'Nutrition Consultant',
      image: '👩‍⚕️',
      bio: t('about.team.nutrition.bio')
    }
  ];

  return (
    <>
      <SEO
        title={{
          ar: 'من نحن',
          en: 'About Us',
          fr: 'À propos',
          es: 'Sobre Nosotros'
        }}
        description={{
          ar: 'تعرف على شركة Samsan الرائدة في صناعة المكملات الغذائية الطبيعية، رؤيتنا ورسالتنا وقيمنا منذ 2018.',
          en: 'Learn about Samsan, the leading company in natural nutritional supplements, our vision, mission, and values since 2018.',
          fr: 'Découvrez Samsan, l\'entreprise leader en compléments nutritionnels naturels, notre vision, mission et valeurs depuis 2018.',
          es: 'Conozca Samsan, la empresa líder en suplementos nutricionales naturales, nuestra visión, misión y valores desde 2018.'
        }}
        url="/about"
        type="website"
      />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">

            <h1 className="fade-up">{t('about.hero.title') || 'شركة تطبيقي للصناعات الدوائية'}</h1>
            <p className="fade-up">{t('about.hero.subtitle') || 'ريادة في صناعة المكملات الغذائية منذ عام 2010'}</p>
          </div>
          <div className="hero-wave-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
              <path fill="white" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-content fade-left">
                <span className="section-badge">{t('about.story.badge') || 'قصتنا'}</span>
                <h2>{t('about.story.title') || 'قصة نجاح تمتد لأكثر من 15 عاماً'}</h2>
                <p>{t('about.story.text1') || 'بدأت رحلتنا في عام 2010 برؤية واضحة: توفير مكملات غذائية طبيعية وعالية الجودة بأسعار معقولة. انطلقنا من مصر ووسعنا نطاق عملنا لتغطية أكثر من 20 دولة حول العالم.'}</p>
                <p>{t('about.story.text2') || 'نحن نؤمن بأن الصحة الجيدة تبدأ من التغذية السليمة. لذلك، نلتزم بأعلى معايير الجودة العالمية في تصنيع منتجاتنا، من اختيار المواد الخام إلى مراقبة الجودة النهائية.'}</p>
                <div className="story-features">
                  <div className="story-feature">
                    <span className="feature-icon">🎯</span>
                    <div>
                      <h4>{t('about.story.mission') || 'رسالتنا'}</h4>
                      <p>{t('about.story.missionText') || 'تحسين جودة حياة الناس من خلال منتجات طبيعية فعالة'}</p>
                    </div>
                  </div>
                  <div className="story-feature">
                    <span className="feature-icon">👁️</span>
                    <div>
                      <h4>{t('about.story.vision') || 'رؤيتنا'}</h4>
                      <p>{t('about.story.visionText') || 'أن نكون الشركة الرائدة عالمياً في المكملات الغذائية'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-image fade-right">
                <div className="story-image-wrapper">
                  <div className="image-glow"></div>
                  <div className="image-content">
                    <span className="main-icon">🏭</span>
                    <div className="year-badge">2010</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Tabs */}
        <section className="tabs-section">
          <div className="container">
            <div className="tabs-wrapper fade-up">
              <div className="tabs-header">
                <button
                  className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mission')}
                >
                  <span>🎯</span> {t('about.tabs.mission') || 'رسالتنا'}
                </button>
                <button
                  className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                  onClick={() => setActiveTab('vision')}
                >
                  <span>👁️</span> {t('about.tabs.vision') || 'رؤيتنا'}
                </button>
                <button
                  className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`}
                  onClick={() => setActiveTab('values')}
                >
                  <span>💎</span> {t('about.tabs.values') || 'قيمنا'}
                </button>
              </div>
              <div className="tabs-content">
                {activeTab === 'mission' && (
                  <div className="tab-pane mission-pane">
                    <div className="pane-icon">🎯</div>
                    <h3>{t('about.mission.title') || 'رسالتنا'}</h3>
                    <p>{t('about.mission.text') || 'نسعى جاهدين لتحسين جودة حياة الناس من خلال توفير مكملات غذائية طبيعية، آمنة، وفعالة بأسعار معقولة. نلتزم بالبحث المستمر والتطوير لتقديم منتجات مبتكرة تلبي احتياجات عملائنا.'}</p>
                    <ul>
                      <li>✓ {t('about.mission.point1') || 'جودة عالية بأسعار مناسبة'}</li>
                      <li>✓ {t('about.mission.point2') || 'ابتكار مستمر في المنتجات'}</li>
                      <li>✓ {t('about.mission.point3') || 'خدمة عملاء استثنائية'}</li>
                      <li>✓ {t('about.mission.point4') || 'التزام بالمعايير العالمية'}</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'vision' && (
                  <div className="tab-pane vision-pane">
                    <div className="pane-icon">👁️</div>
                    <h3>{t('about.vision.title') || 'رؤيتنا'}</h3>
                    <p>{t('about.vision.text') || 'نتطلع لأن نكون الشركة الرائدة عالمياً في صناعة المكملات الغذائية الطبيعية، معترفاً بنا كمعيار للجودة والابتكار والثقة. نهدف إلى توسيع نطاق وصولنا لتشمل جميع أنحاء العالم.'}</p>
                    <ul>
                      <li>✓ {t('about.vision.point1') || 'ريادة عالمية بحلول 2030'}</li>
                      <li>✓ {t('about.vision.point2') || 'توسع في 50 دولة'}</li>
                      <li>✓ {t('about.vision.point3') || 'أكثر من 200 منتج مبتكر'}</li>
                      <li>✓ {t('about.vision.point4') || 'مركز أبحاث عالمي المستوى'}</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'values' && (
                  <div className="tab-pane values-pane">
                    <div className="pane-icon">💎</div>
                    <h3>{t('about.values.title') || 'قيمنا الأساسية'}</h3>
                    <div className="values-grid">
                      <div className="value-card">
                        <span className="value-icon">🔬</span>
                        <h4>{t('about.values.quality') || 'الجودة أولاً'}</h4>
                        <p>{t('about.values.qualityText') || 'نلتزم بأعلى معايير الجودة في كل خطوة'}</p>
                      </div>
                      <div className="value-card">
                        <span className="value-icon">💡</span>
                        <h4>{t('about.values.innovation') || 'الابتكار'}</h4>
                        <p>{t('about.values.innovationText') || 'نسعى دائماً للتطوير والتحسين المستمر'}</p>
                      </div>
                      <div className="value-card">
                        <span className="value-icon">🤝</span>
                        <h4>{t('about.values.trust') || 'الثقة'}</h4>
                        <p>{t('about.values.trustText') || 'نبني علاقات قائمة على الصدق والشفافية'}</p>
                      </div>
                      <div className="value-card">
                        <span className="value-icon">🌿</span>
                        <h4>{t('about.values.sustainability') || 'الاستدامة'}</h4>
                        <p>{t('about.values.sustainabilityText') || 'نحرص على حماية البيئة ومصادرنا الطبيعية'}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-header fade-up">
              <span className="section-badge">{t('about.stats.badge') || 'إنجازاتنا'}</span>
              <h2>{t('about.stats.title') || 'شركة تطبيقي بالأرقام'}</h2>
              <p>{t('about.stats.subtitle') || 'أرقام تعكس التزامنا بالجودة والتميز'}</p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="quality-section">
          <div className="container">
            <div className="quality-grid">
              <div className="quality-content fade-left">
                <span className="section-badge">{t('about.quality.badge') || 'الجودة والسلامة'}</span>
                <h2>{t('about.quality.title') || 'نضع الجودة والسلامة في مقدمة أولوياتنا'}</h2>
                <p>{t('about.quality.text') || 'نطبق أشد معايير الجودة والسلامة في جميع مراحل التصنيع، بدءاً من اختيار المواد الخام وصولاً إلى المنتج النهائي. مختبراتنا مجهزة بأحدث التقنيات لضمان نقاء وفعالية كل منتج.'}</p>
                <div className="quality-features">
                  <div className="quality-feature">
                    <span className="quality-icon">✅</span>
                    <div>
                      <h4>{t('about.quality.raw') || 'مواد خام مختارة بعناية'}</h4>
                      <p>{t('about.quality.rawText') || 'نختار أفضل المصادر الطبيعية'}</p>
                    </div>
                  </div>
                  <div className="quality-feature">
                    <span className="quality-icon">🔬</span>
                    <div>
                      <h4>{t('about.quality.testing') || 'اختبارات متعددة المراحل'}</h4>
                      <p>{t('about.quality.testingText') || 'نضمن الجودة في كل خطوة'}</p>
                    </div>
                  </div>
                  <div className="quality-feature">
                    <span className="quality-icon">📋</span>
                    <div>
                      <h4>{t('about.quality.certified') || 'معايير عالمية معتمدة'}</h4>
                      <p>{t('about.quality.certifiedText') || 'نلتزم بأعلى المعايير الدولية'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quality-image fade-right">
                <div className="quality-image-wrapper">
                  <div className="image-glow"></div>
                  <div className="image-content">
                    <span className="main-icon">🔬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <div className="team-header fade-up">
              <span className="section-badge">{t('about.team.badge') || 'فريقنا'}</span>
              <h2>{t('about.team.title') || 'خبراء في خدمتكم'}</h2>
              <p>{t('about.team.subtitle') || 'فريق من العلماء والخبراء المخلصين لضمان أفضل المنتجات'}</p>
            </div>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="member-image">
                    <span className="member-icon">{member.image}</span>
                  </div>
                  <h3>{member.name}</h3>
                  <p className="member-position">{isArabic ? member.position : member.positionEn}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    <span className="social-icon">🔗</span>
                    <span className="social-icon">📧</span>
                    <span className="social-icon">💼</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content fade-up">
              <h2>{t('about.cta.title') || 'انضم إلى عائلة تطبيقي'}</h2>
              <p>{t('about.cta.text') || 'كن جزءاً من رحلتنا نحو حياة أكثر صحة. تواصل معنا اليوم لمعرفة المزيد عن منتجاتنا وخدماتنا.'}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-primary">
                  {t('about.cta.contact') || 'اتصل بنا'} →
                </Link>
                <Link to="/products" className="btn-outline">
                  {t('about.cta.products') || 'تصفح منتجاتنا'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div></>
  );
}

export default About;