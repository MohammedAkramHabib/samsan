// src/pages/blog/BlogPost.js
import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useTranslation } from '../../useTranslation';
import { getArticleBySlug, getSuggestedArticles } from '../../data/articles';
import { products, getProductsByHashtag } from '../../data/products';

import SEO from '../../components/SEO';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const history = useHistory();
  const { t } = useTranslation();

  // جلب المقال الحالي
  const article = getArticleBySlug(slug);

  // الحصول على اللغة الحالية
  const currentLang = document.documentElement.lang || 'en';
  const isArabic = currentLang === 'ar';

  // جلب المنتجات ذات الصلة بناءً على هاشتاجات المقال
  const getRelatedProducts = () => {
    if (!article) return [];
    const relatedProducts = [];
    article.hashtags.forEach(hashtag => {
      const productsWithTag = getProductsByHashtag(hashtag);
      productsWithTag.forEach(product => {
        if (!relatedProducts.find(p => p.id === product.id)) {
          relatedProducts.push(product);
        }
      });
    });
    return relatedProducts.slice(0, 3);
  };

  const relatedProducts = getRelatedProducts();

  // إذا لم يتم العثور على المقال
  if (!article) {
    return (
      <> <SEO
        title={{
          ar: 'المقال غير موجود',
          en: 'Article Not Found',
          fr: 'Article non trouvé',
          es: 'Artículo no encontrado'
        }}
        description={{
          ar: 'عذراً، المقال الذي تبحث عنه غير موجود.',
          en: 'Sorry, the article you are looking for does not exist.',
          fr: 'Désolé, l\'article que vous recherchez n\'existe pas.',
          es: 'Lo sentimos, el artículo que busca no existe.'
        }}
        url="/blog/not-found"
        type="website"
      />
        <div className="blog-post-not-found">
          <div className="not-found-content">
            <span className="not-found-icon">🔍</span>
            <h2>{t('blog.notFound') || 'المقال غير موجود'}</h2>
            <p>{t('blog.notFoundText') || 'عذراً، المقال الذي تبحث عنه غير موجود.'}</p>
            <Link to="/blog" className="back-to-blog">
              {t('blog.backToBlog') || 'العودة إلى المدونة'} →
            </Link>
          </div>
        </div></>
    );
  }

  // تنسيق التاريخ
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isArabic) {
      return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // المقالات المقترحة (من نفس المنتج)
  const suggestedArticles = getSuggestedArticles(slug, 3);

  return (
    <>
      <SEO
        title={{
          ar: article.title.ar,
          en: article.title.en,
          fr: article.title.fr,
          es: article.title.es
        }}
        description={{
          ar: article.excerpt.ar,
          en: article.excerpt.en,
          fr: article.excerpt.fr,
          es: article.excerpt.es
        }}
        keywords={{
          ar: article.hashtags.join(', '),
          en: article.hashtags.join(', '),
          fr: article.hashtags.join(', '),
          es: article.hashtags.join(', ')
        }}
        image={article.image}
        url={`/blog/${article.slug}`}
        author={{
          ar: article.author.ar,
          en: article.author.en,
          fr: article.author.fr,
          es: article.author.es
        }}
        type="article"
        publishedTime={article.date}
        tags={article.hashtags}
      />

      <div className="blog-post-page">
        {/* Hero Section */}
        <div className="post-hero">
          <div className="post-hero-content">
            <div className="post-category">
              {isArabic ? article.category.ar : article.category.en}
            </div>
            <h1>{isArabic ? article.title.ar : article.title.en}</h1>
            <div className="post-meta">
              <div className="post-author">
                <span className="meta-icon">👤</span>
                <span>{isArabic ? article.author.ar : article.author.en}</span>
              </div>
              <div className="post-date">
                <span className="meta-icon">📅</span>
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="post-read-time">
                <span className="meta-icon">⏱️</span>
                <span>{article.readTime} {t('blog.minRead') || 'دقائق قراءة'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="post-container">
          <div className="post-content-wrapper">
            <div className="post-image">
              <span className="post-icon">{article.image}</span>
            </div>

            <div className="post-body">
              <p className="post-excerpt">
                {isArabic ? article.excerpt.ar : article.excerpt.en}
              </p>
              <div className="post-text">
                {/* عرض المحتوى مع دعم Markdown البسيط */}
                {(isArabic ? article.content.ar : article.content.en).split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={idx}>{paragraph.substring(2)}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={idx}>{paragraph.substring(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={idx}>{paragraph.substring(4)}</h3>;
                  } else if (paragraph.startsWith('- ')) {
                    return <li key={idx}>{paragraph.substring(2)}</li>;
                  } else if (paragraph.trim() === '') {
                    return <br key={idx} />;
                  } else {
                    return <p key={idx}>{paragraph}</p>;
                  }
                })}
              </div>

              <div className="post-hashtags">
                {article.hashtags.map((tag, i) => (
                  <span key={i} className="hashtag">#{tag}</span>
                ))}
              </div>

              <div className="post-navigation">
                <button onClick={() => history.goBack()} className="nav-btn back">
                  ← {t('blog.back') || 'رجوع'}
                </button>
                <Link to="/blog" className="nav-btn all">
                  {t('blog.allArticles') || 'جميع المقالات'} →
                </Link>
              </div>
            </div>
          </div>

          {/* Suggested Articles */}
          {suggestedArticles.length > 0 && (
            <div className="suggested-articles">
              <h3>{t('blog.suggested') || 'اقرأ أيضاً'}</h3>
              <div className="suggested-grid">
                {suggestedArticles.map(suggested => (
                  <Link to={`/blog/${suggested.slug}`} key={suggested.id} className="suggested-card">
                    <span className="suggested-icon">{suggested.image}</span>
                    <h4>{isArabic ? suggested.title.ar : suggested.title.en}</h4>
                    <p>{isArabic ? suggested.excerpt.ar.substring(0, 60) + '...' : suggested.excerpt.en.substring(0, 60) + '...'}</p>
                    <span className="suggested-link">{t('blog.readMore') || 'اقرأ المزيد'} →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products-section">
              <h3>{t('blog.relatedProducts') || 'منتجات ذات صلة'}</h3>
              <div className="related-products-grid">
                {relatedProducts.map(product => (
                  <Link to={`/products`} key={product.id} className="related-product-card" onClick={() => window.scrollTo(0, 0)}>
                    <h4>{isArabic ? product.nameAr : product.name}</h4>
                    <p>{isArabic ? product.descriptionAr.substring(0, 60) : product.description.substring(0, 60)}...</p>
                    <span className="view-product">{t('products.viewDetails') || 'عرض التفاصيل'} →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div></>
  );
}

export default BlogPost;