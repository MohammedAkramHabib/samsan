// src/pages/Products.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import { products, getFeaturedProducts } from '../data/products';
import { getArticlesByProductId } from '../data/articles';
import './Products.css';
import SEO from '../components/SEO';

function Products() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // الفئات المتاحة
  const categories = [
    { id: 'all', name: 'الكل', nameEn: 'All', nameFr: 'Tous', nameEs: 'Todos', icon: '📦' },
    { id: 'vitamins', name: 'فيتامينات', nameEn: 'Vitamins', nameFr: 'Vitamines', nameEs: 'Vitaminas', icon: '💊' },
    { id: 'minerals', name: 'معادن', nameEn: 'Minerals', nameFr: 'Minéraux', nameEs: 'Minerales', icon: '🔬' },
    { id: 'supplements', name: 'مكملات', nameEn: 'Supplements', nameFr: 'Compléments', nameEs: 'Suplementos', icon: '🌿' },
    { id: 'joints', name: 'المفاصل', nameEn: 'Joints', nameFr: 'Articulations', nameEs: 'Articulaciones', icon: '🦴' },
    { id: 'beauty', name: 'الجمال', nameEn: 'Beauty', nameFr: 'Beauté', nameEs: 'Belleza', icon: '✨' }
  ];

  // الحصول على اللغة الحالية
  const currentLang = document.documentElement.lang || 'en';
  const isArabic = currentLang === 'ar';
  const isFrench = currentLang === 'fr';
  const isSpanish = currentLang === 'es';

  // دالة للحصول على النص المترجم للفئة
  const getLocalizedCategoryName = (cat) => {
    if (isArabic) return cat.name;
    if (isFrench) return cat.nameFr || cat.nameEn;
    if (isSpanish) return cat.nameEs || cat.nameEn;
    return cat.nameEn;
  };

  // دالة للحصول على المنتج مترجم بالكامل
  const getLocalizedProduct = (product) => {
    const localized = { ...product };

    if (isArabic) {
      localized.displayName = product.nameAr;
      localized.displayDescription = product.descriptionAr;
      localized.displaySize = product.size;
      localized.displayCategory = product.categoryAr;
      localized.displaySizeOptions = product.sizeOptions;
    }
    else if (isFrench) {
      localized.displayName = product.nameFr || product.name;
      localized.displayDescription = product.descriptionFr || product.description;
      localized.displaySize = product.sizeFr || product.sizeEn;
      localized.displayCategory = product.categoryFr || product.categoryEn;
      localized.displaySizeOptions = product.sizeOptionsFr || product.sizeOptionsEn;
    }
    else if (isSpanish) {
      localized.displayName = product.nameEs || product.name;
      localized.displayDescription = product.descriptionEs || product.description;
      localized.displaySize = product.sizeEs || product.sizeEn;
      localized.displayCategory = product.categoryEs || product.categoryEn;
      localized.displaySizeOptions = product.sizeOptionsEs || product.sizeOptionsEn;
    }
    else {
      localized.displayName = product.name;
      localized.displayDescription = product.description;
      localized.displaySize = product.sizeEn;
      localized.displayCategory = product.categoryEn;
      localized.displaySizeOptions = product.sizeOptionsEn;
    }

    return localized;
  };

  // دالة للحصول على النص المترجم للمنتج في القائمة
  const getProductDisplay = (product) => {
    if (isArabic) {
      return {
        name: product.nameAr,
        description: product.descriptionAr,
        size: product.size,
        category: product.categoryAr
      };
    } else if (isFrench) {
      return {
        name: product.nameFr || product.name,
        description: product.descriptionFr || product.description,
        size: product.sizeFr || product.sizeEn,
        category: product.categoryFr || product.categoryEn
      };
    } else if (isSpanish) {
      return {
        name: product.nameEs || product.name,
        description: product.descriptionEs || product.description,
        size: product.sizeEs || product.sizeEn,
        category: product.categoryEs || product.categoryEn
      };
    }
    return {
      name: product.name,
      description: product.description,
      size: product.sizeEn,
      category: product.categoryEn
    };
  };

  // فلترة المنتجات
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

    const searchLower = searchTerm.toLowerCase();
    const productDisplay = getProductDisplay(product);
    const productName = productDisplay.name.toLowerCase();
    const productDesc = productDisplay.description.toLowerCase();

    const matchesSearch = searchTerm === '' ||
      productName.includes(searchLower) ||
      productDesc.includes(searchLower) ||
      product.hashtags.some(tag => tag.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  // المنتجات المميزة مع ترجمتها
  const featuredProducts = getFeaturedProducts();
  const localizedFeaturedProducts = featuredProducts.map(product => getProductDisplay(product));

  // دالة للحصول على مقالات المنتج مترجمة
  const getProductArticles = (productId) => {
    const articles = getArticlesByProductId(productId);
    return articles.map(article => ({
      id: article.id,
      slug: article.slug,
      title: isArabic ? article.title.ar : (isFrench ? article.title.fr : (isSpanish ? article.title.es : article.title.en)),
      excerpt: isArabic ? article.excerpt.ar : (isFrench ? article.excerpt.fr : (isSpanish ? article.excerpt.es : article.excerpt.en)),
      image: article.image,
      date: article.date,
      readTime: article.readTime
    }));
  };

  // فتح المودال
  const openModal = (product) => {
    const localizedProduct = getLocalizedProduct(product);
    setSelectedProduct(localizedProduct);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  // إغلاق المودال
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (<>
    <SEO
      title={{
        ar: 'المنتجات',
        en: 'Products',
        fr: 'Produits',
        es: 'Productos'
      }}
      description={{
        ar: 'اكتشف مجموعة منتجات Samsan من المكملات الغذائية والفيتامينات الطبيعية المعتمدة من FDA وحلال.',
        en: 'Discover Samsan\'s range of natural nutritional supplements and vitamins certified by FDA and Halal.',
        fr: 'Découvrez la gamme de compléments nutritionnels naturels de Samsan certifiés FDA et Halal.',
        es: 'Descubra la gama de suplementos nutricionales naturales de Samsan certificados por FDA y Halal.'
      }}
      url="/products"
      type="website"
    />
    <div className="products-page">
      {/* Hero Section */}
      <div className="products-hero">
        <div className="hero-bg-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
        </div>

        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="white" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="products-hero-content">
          <h1 className="hero-title">
            <span className="title-gradient">{t('products.title') || 'منتجات SAM'}</span>
          </h1>

          <p className="hero-subtitle">
            {t('products.subtitle') || 'مكملات غذائية طبيعية بتركيبات متكاملة ومعايير عالمية'}
          </p>

          <div className="hero-search-wrapper">
            <div className="hero-search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder={t('products.search') || 'ابحث عن منتج...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="search-clear" onClick={() => setSearchTerm('')}>
                  ✕
                </button>
              )}
            </div>

            <div className="hero-categories">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`hero-cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-name">{getLocalizedCategoryName(cat)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* جميع المنتجات */}
      <div className="all-products-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('products.allProducts') || 'جميع المنتجات'}</h2>
            {filteredProducts.length !== products.length && (
              <div className="results-count">
                {t('products.showing') || 'عرض'} {filteredProducts.length} {t('products.of') || 'من'} {products.length} {t('products.products') || 'منتج'}
              </div>
            )}
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const display = getProductDisplay(product);
                return (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={display.name}
                        className="product-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{display.name}</h3>
                      <p className="product-description">
                        {display.description.substring(0, 120)}...
                      </p>
                      <div className="product-meta">
                        <div className="product-size">
                          <span className="meta-label">{t('products.size') || 'الحجم'}:</span>
                          <span className="meta-value">{display.size}</span>
                        </div>
                        <div className="product-category">
                          <span className="meta-label">{t('products.category') || 'التصنيف'}:</span>
                          <span className="meta-value">{display.category}</span>
                        </div>
                      </div>
                      <div className="product-hashtags">
                        {product.hashtags.slice(0, 4).map((tag, i) => (
                          <button
                            key={i}
                            className="hashtag-btn"
                            onClick={() => {
                              setSearchTerm(tag);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                      <button
                        className="product-details-btn"
                        onClick={() => openModal(product)}
                      >
                        {t('products.readMore') || 'اقرأ المزيد'}
                        <span className="btn-arrow">→</span>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-results">
                <span className="no-results-icon">🔍</span>
                <h3>{t('products.noResults') || 'لا توجد منتجات'}</h3>
                <p>{t('products.noResultsText') || 'لم نجد منتجات تطابق بحثك. حاول بكلمات مختلفة.'}</p>
                <button className="reset-search" onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}>
                  {t('products.resetSearch') || 'إعادة تعيين البحث'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* المنتجات المميزة */}
      <div className="featured-products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('products.featured') || '⭐ مميز'}</span>
            <h2>{t('products.featuredTitle') || 'أفضل المكملات المميزة من SAM'}</h2>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product, index) => {
              const display = getProductDisplay(product);
              return (
                <div key={product.id} className="featured-card">
                  <div className="featured-badge">{t('products.featuredBadge') || 'مميز'}</div>
                  <div className="featured-icon">
                    <img src={product.image} loading="lazy" alt={display.name} />
                  </div>
                  <h3>{display.name}</h3>
                  <p>{display.description.substring(0, 80)}...</p>
                  <div className="featured-size">
                    <span className="size-label">{t('products.size') || 'الحجم'}:</span>
                    <span className="size-value">{display.size}</span>
                  </div>
                  <button
                    className="featured-btn"
                    onClick={() => openModal(product)}
                  >
                    {t('products.viewDetails') || 'عرض التفاصيل'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal للمنتج */}
      {showModal && selectedProduct && (
        <div className="product-modal-overlay" onClick={closeModal}>
          <div className="product-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>✕</button>

            <div className="modal-product-image">
              <img src={selectedProduct.image}  loading="lazy" alt={selectedProduct.displayName} />
            </div>

            <div className="modal-product-content">
              <h2 className="modal-product-title">{selectedProduct.displayName}</h2>
              <p className="modal-product-description">{selectedProduct.displayDescription}</p>

              <div className="modal-product-meta">
                <span className="modal-badge">{selectedProduct.displayCategory}</span>
                <span className="modal-size">{selectedProduct.displaySize}</span>
              </div>

              <div className="modal-product-details">
                <h4>{t('products.availableSizes') || '📦 الأحجام المتاحة'}</h4>
                <div className="size-options">
                  {selectedProduct.displaySizeOptions?.map((size, i) => (
                    <span key={i} className="size-option">{size}</span>
                  ))}
                </div>
              </div>

              <div className="modal-product-hashtags">
                <h4>{t('products.hashtags') || '🏷️ الهاشتاجات'}</h4>
                <div className="hashtags-list">
                  {selectedProduct.hashtags?.map((tag, i) => (
                    <span key={i} className="modal-hashtag">#{tag}</span>
                  ))}
                </div>
              </div>

              {getProductArticles(selectedProduct.id).length > 0 && (
                <div className="modal-related-articles">
                  <h4>{t('products.relatedArticles') || '📚 مقالات ذات صلة'}</h4>
                  <div className="related-articles">
                    {getProductArticles(selectedProduct.id).map(article => (
                      <Link
                        key={article.id}
                        to={`/blog/${article.slug}`}
                        className="related-article"
                        onClick={closeModal}
                      >
                        <span className="article-icon">{article.image}</span>
                        <div className="article-info">
                          <strong>{article.title}</strong>
                          <p>{article.excerpt.substring(0, 60)}...</p>
                        </div>
                        <span className="read-more">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div></>
  );
}

export default Products;