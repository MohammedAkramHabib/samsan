// src/pages/blog/Blog.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../useTranslation';
import { getLatestArticles, getArticleBySlug, getAllArticles } from '../../data/articles';
import SEO from '../../components/SEO';
import './Blog.css';

function Blog() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // جلب المقالات من البيانات المركزية
  // const allArticles = getLatestArticles(20);
  const allArticles = getAllArticles();
  // تحويل المقالات إلى الصيغة المطلوبة مع الترجمة
  const articles = allArticles.map(article => {
    const currentLang = document.documentElement.lang || 'en';
    const isArabic = currentLang === 'ar';
    return {
      id: article.id,
      slug: article.slug,
      title: isArabic ? article.title.ar : article.title.en,
      titleEn: article.title.en,
      excerpt: isArabic ? article.excerpt.ar : article.excerpt.en,
      excerptEn: article.excerpt.en,
      content: isArabic ? article.content.ar : article.content.en,
      contentEn: article.content.en,
      category: article.category,
      categoryAr: article.category.ar,
      categoryEn: article.category.en,
      image: article.image,
      author: isArabic ? article.author.ar : article.author.en,
      authorEn: article.author.en,
      date: article.date,
      readTime: article.readTime,
      hashtags: article.hashtags
    };
  });

  // الفئات المستخلصة من المقالات
  const categories = [
    { id: 'all', name: 'الكل', nameEn: 'All', icon: '📚' },
    ...Object.values(
      articles.reduce((acc, article) => {
        if (!acc[article.categoryEn]) {
          acc[article.categoryEn] = {
            id: article.categoryEn.toLowerCase().replace(/ /g, '-'),
            name: article.categoryAr,
            nameEn: article.categoryEn,
            icon: article.categoryEn === 'Joint Health' ? '🦴' :
              article.categoryEn === 'Vitamins' ? '💊' :
                article.categoryEn === 'Beauty & Skin' ? '✨' :
                  article.categoryEn === 'Hair Care' ? '💇' :
                    article.categoryEn === 'Comparisons' ? '⚖️' : '📝'
          };
        }
        return acc;
      }, {})
    )
  ];

  // فلترة المقالات
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.categoryEn.toLowerCase().replace(/ /g, '-') === selectedCategory;

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' ||
      article.title.toLowerCase().includes(searchLower) ||
      article.excerpt.toLowerCase().includes(searchLower) ||
      article.hashtags.some(tag => tag.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  // الحصول على اللغة الحالية
  const currentLang = document.documentElement.lang || 'en';
  const isArabic = currentLang === 'ar';

  // تنسيق التاريخ
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isArabic) {
      return date.toLocaleDateString('ar-EG');
    }
    return date.toLocaleDateString('en-US');
  };

  return (
    <>
      <SEO
        title={{
          ar: 'المدونة',
          en: 'Blog',
          fr: 'Blog',
          es: 'Blog'
        }}
        description={{
          ar: 'اقرأ أحدث المقالات والنصائح الصحية من خبراء Samsan عن الفيتامينات والمكملات الغذائية.',
          en: 'Read the latest health articles and tips from Samsan experts about vitamins and supplements.',
          fr: 'Lisez les derniers articles et conseils santé des experts Samsan sur les vitamines et compléments.',
          es: 'Lea los últimos artículos y consejos de salud de los expertos de Samsan sobre vitaminas y suplementos.'
        }}
        keywords="مدونة, مقالات صحية, فيتامينات, مكملات غذائية, نصائح صحية, Samsan"
        url="/blog"
        type="website"
      />

      <div className="blog-page">
        {/* Hero Section */}
        <div className="blog-hero">
          <div className="blog-hero-content">
            <h1>{t('blog.title') || 'المدونة'}</h1>
            <p>{t('blog.subtitle') || 'نصائح ومعلومات صحية من خبرائنا'}</p>

            {/* Search Box */}
            <div className="blog-search-wrapper">
              <div className="blog-search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder={t('blog.search') || 'ابحث في المقالات...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="search-clear" onClick={() => setSearchTerm('')}>✕</button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="blog-categories-section">
          <div className="container">
            <div className="categories-scroll">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-name">{isArabic ? cat.name : cat.nameEn}</span>
                  <span className="cat-count">
                    {articles.filter(a => selectedCategory === 'all' || a.categoryEn.toLowerCase().replace(/ /g, '-') === cat.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="blog-articles-section">
          <div className="container">
            <div className="section-header">
              <h2>{t('blog.latestArticles') || 'أحدث المقالات'}</h2>
              <p className="results-count">
                {filteredArticles.length} {t('blog.articles') || 'مقال'}
              </p>
            </div>

            <div className="articles-grid">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <Link
                    to={`/blog/${article.slug}`}
                    key={article.id}
                    className="article-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="article-image">
                      <span className="article-icon">{article.image}</span>
                    </div>
                    <div className="article-content">
                      <div className="article-category">
                        <span>{isArabic ? article.categoryAr : article.categoryEn}</span>
                      </div>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <div className="article-meta">
                        <div className="article-author">
                          <span className="meta-icon">👤</span>
                          <span>{article.author}</span>
                        </div>
                        <div className="article-date">
                          <span className="meta-icon">📅</span>
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="article-read-time">
                          <span className="meta-icon">⏱️</span>
                          <span>{article.readTime} {t('blog.minRead') || 'دقائق'}</span>
                        </div>
                      </div>
                      <div className="article-hashtags">
                        {article.hashtags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="hashtag">#{tag}</span>
                        ))}
                      </div>
                      <div className="article-link">
                        {t('blog.readMore') || 'اقرأ المزيد'} →
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="no-results">
                  <span className="no-results-icon">🔍</span>
                  <h3>{t('blog.noResults') || 'لا توجد مقالات'}</h3>
                  <p>{t('blog.noResultsText') || 'لم نجد مقالات تطابق بحثك. حاول بكلمات مختلفة.'}</p>
                  <button className="reset-search" onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}>
                    {t('blog.resetSearch') || 'إعادة تعيين البحث'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div></>
  );
}

export default Blog;