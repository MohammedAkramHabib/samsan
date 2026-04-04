// src/pages/Home.js
import React, { useEffect } from 'react';
import { useTranslation } from '../useTranslation';
import { Link } from 'react-router-dom';
import { getLatestArticles } from '../data/articles';
import { products, getFeaturedProducts } from '../data/products';
import itemFero from '../media/samNerveHealth.jpg';
import sanJointFlex from '../media/sanJointFlex.jpg';
import samVitaminD3 from '../media/samVitaminD3.jpg';
import samFero from '../media/sam-fero.jpg';
import samGery from '../media/samGery.jpg';
import samNerveHealth from '../media/samNerveHealth.jpg';
import samQ10 from '../media/samQ10.jpg';
import samCalciumD3 from '../media/samCalciumD3.jpg';
import samCollagen from '../media/samCollagen.jpg';
import FDA from '../media/FDA';
import './Home.css';
import SEO from '../components/SEO';

// خريطة الصور للمنتجات
const productImages = {
  1: sanJointFlex,
  2: '🐟',
  3: samVitaminD3,
  4: samFero,
  5: samGery,
  6: samNerveHealth,
  7: samQ10,
  8: samCalciumD3,
  9: samCollagen,
};

function Home() {
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

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  // الحصول على اللغة الحالية بشكل صحيح
  const currentLang = document.documentElement.lang || 'en';
  // دالة للحصول على الترجمة حسب اللغة
  const getLocalizedText = (obj) => {
    if (!obj) return '';
    if (obj[currentLang]) return obj[currentLang];
    if (obj.en) return obj.en;
    if (obj.ar) return obj.ar;
    return '';
  };

  // جلب آخر 3 مقالات من البيانات المركزية مع الترجمة
  const latestArticles = getLatestArticles(3);

  // تحويل المقالات إلى الصيغة المطلوبة للعرض مع دعم جميع اللغات
  const articles = latestArticles.map(article => ({
    id: article.id,
    slug: article.slug,
    title: getLocalizedText(article.title),
    titleEn: article.title.en,
    date: article.date,
    excerpt: getLocalizedText(article.excerpt).length > 80
      ? getLocalizedText(article.excerpt).substring(0, 80) + '...'
      : getLocalizedText(article.excerpt),
    excerptEn: article.excerpt.en,
    category: getLocalizedText(article.category),
    categoryEn: article.category.en,
    image: article.image
  }));

  // جلب المنتجات المميزة مع الترجمة
  const featuredProducts = getFeaturedProducts();

  // تحويل المنتجات المميزة إلى الصيغة المطلوبة مع دعم جميع اللغات
  const localizedFeaturedProducts = featuredProducts.map(product => ({
    id: product.id,
    name: getLocalizedText({ ar: product.nameAr, en: product.name, fr: product.nameFr || product.name, es: product.nameEs || product.name }),
    nameAr: product.nameAr,
    description: getLocalizedText({ ar: product.descriptionAr, en: product.description, fr: product.descriptionFr || product.description, es: product.descriptionEs || product.description }),
    descriptionAr: product.descriptionAr,
    size: getLocalizedText({ ar: product.size, en: product.sizeEn, fr: product.sizeFr || product.sizeEn, es: product.sizeEs || product.sizeEn }),
    sizeEn: product.sizeEn,
    image: product.image
  }));

  // تنسيق التاريخ
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (currentLang === 'ar') {
      return date.toLocaleDateString('ar-EG');
    } else if (currentLang === 'fr') {
      return date.toLocaleDateString('fr-FR');
    } else if (currentLang === 'es') {
      return date.toLocaleDateString('es-ES');
    }
    return date.toLocaleDateString('en-US');
  };

  // شهادات العملاء مع الترجمة
  const testimonials = [
    {
      name: t('home.testimonials.1.name') || 'د. أحمد حسن',
      nameAr: t('home.testimonials.1.name') || 'د. أحمد حسن',
      nameEn: 'Dr. Ahmed Hassan',
      nameFr: 'Dr. Ahmed Hassan',
      nameEs: 'Dr. Ahmed Hassan',
      position: t('home.testimonials.1.position') || 'أخصائي تغذية',
      positionAr: t('home.testimonials.1.position') || 'أخصائي تغذية',
      positionEn: 'Nutrition Specialist',
      positionFr: 'Spécialiste en nutrition',
      positionEs: 'Especialista en Nutrición',
      text: t('home.testimonials.1.text') || 'منتجات Samsan ذات جودة عالية وفعالة. أوصي بها لمرضاي.',
      rating: 5
    },
    {
      name: t('home.testimonials.2.name') || 'سارة محمود',
      nameAr: t('home.testimonials.2.name') || 'سارة محمود',
      nameEn: 'Sarah Mahmoud',
      nameFr: 'Sarah Mahmoud',
      nameEs: 'Sarah Mahmoud',
      position: t('home.testimonials.2.position') || 'مدربة لياقة',
      positionAr: t('home.testimonials.2.position') || 'مدربة لياقة',
      positionEn: 'Fitness Trainer',
      positionFr: 'Entraîneuse sportive',
      positionEs: 'Entrenadora de Fitness',
      text: t('home.testimonials.2.text') || 'أستخدم مكملات Samsan منذ 6 أشهر، نتائج رائعة وجودة ممتازة.',
      rating: 5
    },
    {
      name: t('home.testimonials.3.name') || 'د. منى خليل',
      nameAr: t('home.testimonials.3.name') || 'د. منى خليل',
      nameEn: 'Dr. Mona Khalil',
      nameFr: 'Dr. Mona Khalil',
      nameEs: 'Dra. Mona Khalil',
      position: t('home.testimonials.3.position') || 'صيدلانية',
      positionAr: t('home.testimonials.3.position') || 'صيدلانية',
      positionEn: 'Pharmacist',
      positionFr: 'Pharmacienne',
      positionEs: 'Farmacéutica',
      text: t('home.testimonials.3.text') || 'معتمدة من FDA وحلال، وتلتزم بأعلى معايير الجودة. شركة موثوقة.',
      rating: 5
    }
  ];

  // دالة للحصول على النص المترجم للشهادة
  const getLocalizedTestimonial = (testimonial, field) => {
    if (currentLang === 'ar') return testimonial[`${field}Ar`] || testimonial[field];
    if (currentLang === 'fr') return testimonial[`${field}Fr`] || testimonial[field];
    if (currentLang === 'es') return testimonial[`${field}Es`] || testimonial[field];
    return testimonial[`${field}En`] || testimonial[field];
  };

  return (<>
    <SEO
      title={{
        ar: 'الرئيسية',
        en: 'Home',
        fr: 'Accueil',
        es: 'Inicio'
      }}
      description={{
        ar: 'أفضل المكملات الغذائية والفيتامينات الطبيعية بمعايير عالمية معتمدة من FDA وحلال. منتجات Samsan لصحتك وحيويتك.',
        en: 'Best natural nutritional supplements and vitamins with global FDA & Halal certified standards. Samsan products for your health and vitality.',
        fr: 'Meilleurs compléments nutritionnels et vitamines naturels avec des normes mondiales certifiées FDA et Halal. Produits Samsan pour votre santé et vitalité.',
        es: 'Los mejores suplementos nutricionales y vitaminas naturales con estándares globales certificados FDA y Halal. Productos Samsan para su salud y vitalidad.'
      }}
      keywords={{
        ar: 'مكملات غذائية, فيتامينات, صحة, تغذية, SAM, Samsan, FDA, حلال',
        en: 'nutritional supplements, vitamins, health, nutrition, SAM, Samsan, FDA, Halal',
        fr: 'compléments nutritionnels, vitamines, santé, nutrition, SAM, Samsan, FDA, Halal',
        es: 'suplementos nutricionales, vitaminas, salud, nutrición, SAM, Samsan, FDA, Halal'
      }}
      url="/"
      type="website"
    />

    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-bg-animation"></div>

        <div className="hero-content">
          <h1 className="hero-title fade-up">
            <span className="title-line-1">{t('home.hero.titleLine1') || 'صحتك'}</span>
            <span className="title-line-2">{t('home.hero.titleLine2') || 'أمان وجودة'}</span>
          </h1>

          <p className="hero-subtitle fade-up">
            {t('home.hero.subtitle') || 'فيتامينات ومكملات غذائية طبيعية بمعايير عالمية - معتمدة من FDA وحلال'}
          </p>

          <div className="hero-buttons fade-up">
            <Link to="/products" className="btn-primary">
              <span>{t('about.cta.products') || 'تسوق الآن'}</span>
              <span className="btn-icon">→</span>
            </Link>
            <Link to="/about" className="btn-outline-hero">
              <span className="play-icon">▶</span>
              <span>{t('home.hero.learnMore') || 'اعرف أكثر'}</span>
            </Link>
          </div>

          <div className="hero-stats fade-up">
            <div className="stat">
              <div className="stat-number-wrapper">
                <span className="stat-number">50</span>
                <span className="stat-plus">K+</span>
              </div>
              <span className="stat-label">{t('home.hero.customers') || 'عميل سعيد'}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number-wrapper">
                <span className="stat-number">9</span>
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">{t('home.hero.products') || 'منتج متطور'}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number-wrapper">
                <span className="stat-number">7</span>
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">{t('home.hero.years') || 'سنوات من التميز'}</span>
            </div>
          </div>

          <div className="hero-scroll-indicator fade-up">
            <span className="scroll-text">{t('home.hero.scroll') || 'اكتشف المزيد'}</span>
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
          </div>
        </div>

        <div className="hero-floating-elements">
          <div className="floating-element elem-1">💊</div>
          <div className="floating-element elem-2">🔬</div>
          <div className="floating-element elem-3">🌿</div>
          <div className="floating-element elem-4">⭐</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-visual fade-left">
              <div className="floating-card card-1">
                <span className="card-icon">🏆</span>
                <span className="card-text">{t('home.floating.experience') || '٧+ سنوات خبرة'}</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🔬</span>
                <span className="card-text">{t('home.floating.labs') || 'مختبرات متطورة'}</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">🌍</span>
                <span className="card-text">{t('home.floating.products') || '٩ منتجات'}</span>
              </div>
              <div className="floating-card card-4">
                <span className="card-icon">⭐</span>
                <span className="card-text">{t('home.floating.satisfaction') || '٩٨% رضا العملاء'}</span>
              </div>

              <div className="about-image-wrapper">
                <div className="image-glow"></div>
                <div className="image-container">
                  <img
                    src={itemFero}
                    alt="Samsan Pharmaceuticals"
                    className="about-company-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                  <div className="image-caption">
                    <span className="caption-text">SAM NERVE HEALTH</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-content fade-right">
              <div className="about-header">
                <span className="section-badge">
                  <span className="badge-dot"></span>
                  {t('home.about.badge') || 'من نحن'}
                </span>
                <h2 className="section-title">
                  {t('home.about.title') || 'شركة Samsan للصناعات الدوائية'}
                </h2>
                <div className="title-line"></div>
              </div>

              <p className="section-text">
                {t('home.about.text') || 'في شركة Samsan، نهتم بصحتك قبل أن تحتاج إلى العلاج. نقدم فيتامينات ومكملات غذائية مبتكرة مصممة لتعزيز المناعة وزيادة النشاط ودعم الجسم بأسلوب آمن وفعال. نلتزم بأعلى معايير الجودة العالمية.'}
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-circle">
                    <span className="stat-number">50K+</span>
                  </div>
                  <span className="stat-label">{t('home.stats.customers') || 'عميل حول العالم'}</span>
                </div>
                <div className="stat-item">
                  <div className="stat-circle">
                    <span className="stat-number">9</span>
                  </div>
                  <span className="stat-label">{t('home.stats.products') || 'منتج مبتكر'}</span>
                </div>
                <div className="stat-item">
                  <div className="stat-circle">
                    <span className="stat-number">7+</span>
                  </div>
                  <span className="stat-label">{t('home.stats.years') || 'سنوات من التميز'}</span>
                </div>
              </div>

              <div className="about-features">
                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">🔬</span>
                  </div>
                  <div className="feature-info">
                    <h4>{t('home.about.research') || 'بحث وتطوير متقدم'}</h4>
                    <p>{t('home.about.researchDesc') || 'فريق من العلماء والخبراء'}</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">🏭</span>
                  </div>
                  <div className="feature-info">
                    <h4>{t('home.about.gmp') || 'منشآت معتمدة'}</h4>
                    <p>{t('home.about.gmpDesc') || 'معايير عالمية FDA & Halal'}</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">🌿</span>
                  </div>
                  <div className="feature-info">
                    <h4>{t('home.about.natural') || 'مكونات طبيعية'}</h4>
                    <p>{t('home.about.naturalDesc') || 'خالية من المواد الضارة'}</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="about-btn">
                {t('home.about.button') || 'تعرف على قصتنا'}
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - عرض المنتجات المميزة مع الترجمة */}
      <section className="products-section">
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-badge">{t('home.products.badge') || 'منتجات SAM'}</span>
            <h2 className="section-title">{t('home.products.title') || 'أفضل المكملات الغذائية'}</h2>
            <p className="section-subtitle">{t('home.products.subtitle') || 'نقدم لكم منتجات عالية الجودة بمعايير عالمية'}</p>
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(252px, 1fr))' }}>
            {localizedFeaturedProducts.map((product, index) => (
              <div key={product.id} className="product-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="product-image-container">
                  <img
                    src={productImages[product.id]}
                    alt={product.name}
                    className="product-image-img"
                    loading="lazy"
                  />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">
                  {product.description.length > 80 ? product.description.substring(0, 80) + '...' : product.description}
                </p>
                <Link to="/products" className="product-btn">
                  {t('home.products.details') || 'تفاصيل'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-certificates fade-left">
              <div className="certificate-badge fda-logo">
                <FDA />
              </div>
            </div>
            <div className="trust-content fade-right">
              <span className="section-badge">{t('home.trust.badge') || 'الثقة والجودة'}</span>
              <h2 className="section-title">{t('home.trust.title') || 'شركة موثوقة ومعتمدة عالمياً'}</h2>
              <p className="section-text">
                {t('home.trust.text') || 'نحن فخورون بحصولنا على شهادة FDA الأمريكية وشهادة حلال، وهي أعلى شهادات الجودة في صناعة المكملات الغذائية. جميع منتجاتنا تخضع لأشد معايير الجودة والسلامة.'}
              </p>
              <div className="trust-stats">
                <div className="trust-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">{t('home.trust.natural') || 'مكونات طبيعية'}</span>
                </div>
                <div className="trust-stat">
                  <span className="stat-number">0%</span>
                  <span className="stat-label">{t('home.trust.additives') || 'مواد حافظة'}</span>
                </div>
                <div className="trust-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">{t('home.trust.tests') || 'اختبار جودة سنوياً'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-badge">{t('home.testimonials.badge') || 'توصيات'}</span>
            <h2 className="section-title">{t('home.testimonials.title') || 'ماذا يقول عملاؤنا'}</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="testimonial-rating">{'⭐'.repeat(testimonial.rating)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{getLocalizedTestimonial(testimonial, 'name')}</strong>
                  <span>{getLocalizedTestimonial(testimonial, 'position')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section - عرض أحدث المقالات مع الترجمة */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-badge">{t('home.articles.badge') || 'مدونة'}</span>
            <h2 className="section-title">{t('home.articles.title') || 'أحدث المقالات'}</h2>
            <p className="section-subtitle">{t('home.articles.subtitle') || 'نصائح ومعلومات صحية من خبرائنا'}</p>
          </div>
          <div className="articles-grid">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <Link to={`/blog/${article.slug}`} key={article.id} className="article-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="article-category">{article.category}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="article-date">{formatDate(article.date)}</span>
                    <span className="article-btn">{t('home.articles.readMore') || 'اقرأ المزيد'} →</span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-articles">
                <p>{t('blog.noResults') || 'لا توجد مقالات حالياً'}</p>
              </div>
            )}
          </div>
          <div className="articles-more fade-up">
            <Link to="/blog" className="btn-outline">{t('home.articles.allArticles') || 'جميع المقالات'}</Link>
          </div>
        </div>
      </section>
    </div></>
  );
}

export default Home;