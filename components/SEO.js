// src/components/SEO.js
import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  author,
  type = 'website',
  publishedTime,
  tags = []
}) => {
  const siteTitle = 'Samsan Pharmaceuticals';
  const siteUrl = 'https://samsan.com';
  const defaultDescription = {
    ar: 'مكملات غذائية طبيعية بمعايير عالمية - فيتامينات ومكملات غذائية مبتكرة معتمدة من FDA وحلال',
    en: 'Natural nutritional supplements with global standards - Innovative vitamins and supplements certified by FDA and Halal',
    fr: 'Compléments nutritionnels naturels aux normes mondiales - Vitamines et compléments innovants certifiés FDA et Halal',
    es: 'Suplementos nutricionales naturales con estándares globales - Vitaminas y suplementos innovadores certificados por FDA y Halal'
  };
  
  const currentLang = document.documentElement.lang || 'en';
  const isArabic = currentLang === 'ar';
  const isFrench = currentLang === 'fr';
  const isSpanish = currentLang === 'es';
  
  // دالة للحصول على النص حسب اللغة
  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    
    if (isArabic && textObj.ar) return textObj.ar;
    if (isFrench && textObj.fr) return textObj.fr;
    if (isSpanish && textObj.es) return textObj.es;
    return textObj.en || '';
  };
  
  // دالة للحصول على العنوان المترجم
  const getLocalizedTitle = () => {
    const localizedTitle = getLocalizedText(title);
    if (localizedTitle) {
      return `${localizedTitle} | ${siteTitle}`;
    }
    return `${siteTitle} | ${defaultDescription[currentLang]}`;
  };
  
  // دالة للحصول على الوصف المترجم
  const getLocalizedDescription = () => {
    const localizedDesc = getLocalizedText(description);
    if (localizedDesc) return localizedDesc;
    return defaultDescription[currentLang];
  };
  
  // دالة للحصول على الكلمات المفتاحية حسب اللغة
  const getLocalizedKeywords = () => {
    if (keywords) {
      if (typeof keywords === 'object') {
        if (isArabic && keywords.ar) return keywords.ar;
        if (isFrench && keywords.fr) return keywords.fr;
        if (isSpanish && keywords.es) return keywords.es;
        return keywords.en || '';
      }
      return keywords;
    }
    // الكلمات المفتاحية الافتراضية حسب اللغة
    const defaultKeywords = {
      ar: 'مكملات غذائية, فيتامينات, صحة, تغذية, SAM, Samsan, FDA, حلال, مكملات طبيعية, صحة المفاصل, مناعة',
      en: 'nutritional supplements, vitamins, health, nutrition, SAM, Samsan, FDA, Halal, natural supplements, joint health, immunity',
      fr: 'compléments nutritionnels, vitamines, santé, nutrition, SAM, Samsan, FDA, Halal, compléments naturels, santé des articulations, immunité',
      es: 'suplementos nutricionales, vitaminas, salud, nutrición, SAM, Samsan, FDA, Halal, suplementos naturales, salud articular, inmunidad'
    };
    return defaultKeywords[currentLang];
  };
  
  // دالة للحصول على المؤلف المترجم
  const getLocalizedAuthor = () => {
    if (author) {
      if (typeof author === 'object') {
        if (isArabic && author.ar) return author.ar;
        if (isFrench && author.fr) return author.fr;
        if (isSpanish && author.es) return author.es;
        return author.en || '';
      }
      return author;
    }
    return 'Samsan Pharmaceuticals';
  };
  
  // الحصول على اللغة بصيغة Open Graph
  const getOgLocale = () => {
    if (isArabic) return 'ar_AR';
    if (isFrench) return 'fr_FR';
    if (isSpanish) return 'es_ES';
    return 'en_US';
  };
  
  useEffect(() => {
    // تحديث عنوان الصفحة
    document.title = getLocalizedTitle();
    
    // تحديث lang attribute
    document.documentElement.lang = currentLang;
    
    // تحديث direction للغة العربية
    if (isArabic) {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // ========== Meta Tags ==========
    
    // Description
    let metaDescription = document.querySelector('meta[name="description"]');
    const finalDescription = getLocalizedDescription();
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', finalDescription);
      document.head.appendChild(metaDescription);
    }
    
    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const finalKeywords = getLocalizedKeywords();
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalKeywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', finalKeywords);
      document.head.appendChild(metaKeywords);
    }
    
    // Author
    let metaAuthor = document.querySelector('meta[name="author"]');
    const finalAuthor = getLocalizedAuthor();
    if (metaAuthor) {
      metaAuthor.setAttribute('content', finalAuthor);
    } else {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      metaAuthor.setAttribute('content', finalAuthor);
      document.head.appendChild(metaAuthor);
    }
    
    // Language
    let metaLanguage = document.querySelector('meta[name="language"]');
    if (metaLanguage) {
      metaLanguage.setAttribute('content', currentLang);
    } else {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('name', 'language');
      metaLanguage.setAttribute('content', currentLang);
      document.head.appendChild(metaLanguage);
    }
    
    // ========== Open Graph / Facebook ==========
    
    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    const finalTitle = getLocalizedTitle();
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', finalTitle);
      document.head.appendChild(ogTitle);
    }
    
    // OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', finalDescription);
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', finalDescription);
      document.head.appendChild(ogDescription);
    }
    
    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    const finalUrl = `${siteUrl}${url || ''}`;
    if (ogUrl) {
      ogUrl.setAttribute('content', finalUrl);
    } else {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', finalUrl);
      document.head.appendChild(ogUrl);
    }
    
    // OG Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    } else {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      ogType.setAttribute('content', type);
      document.head.appendChild(ogType);
    }
    
    // OG Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    const finalImage = image || `${siteUrl}/logo.png`;
    if (ogImage) {
      ogImage.setAttribute('content', finalImage);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', finalImage);
      document.head.appendChild(ogImage);
    }
    
    // OG Site Name
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) {
      ogSiteName.setAttribute('content', siteTitle);
    } else {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      ogSiteName.setAttribute('content', siteTitle);
      document.head.appendChild(ogSiteName);
    }
    
    // OG Locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    const ogLocaleValue = getOgLocale();
    if (ogLocale) {
      ogLocale.setAttribute('content', ogLocaleValue);
    } else {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      ogLocale.setAttribute('content', ogLocaleValue);
      document.head.appendChild(ogLocale);
    }
    
    // OG Alternate Locales
    let ogAlternateAr = document.querySelector('meta[property="og:locale:alternate"][data-lang="ar"]');
    if (!ogAlternateAr) {
      ogAlternateAr = document.createElement('meta');
      ogAlternateAr.setAttribute('property', 'og:locale:alternate');
      ogAlternateAr.setAttribute('content', 'ar_AR');
      ogAlternateAr.setAttribute('data-lang', 'ar');
      document.head.appendChild(ogAlternateAr);
    }
    
    let ogAlternateEn = document.querySelector('meta[property="og:locale:alternate"][data-lang="en"]');
    if (!ogAlternateEn) {
      ogAlternateEn = document.createElement('meta');
      ogAlternateEn.setAttribute('property', 'og:locale:alternate');
      ogAlternateEn.setAttribute('content', 'en_US');
      ogAlternateEn.setAttribute('data-lang', 'en');
      document.head.appendChild(ogAlternateEn);
    }
    
    let ogAlternateFr = document.querySelector('meta[property="og:locale:alternate"][data-lang="fr"]');
    if (!ogAlternateFr) {
      ogAlternateFr = document.createElement('meta');
      ogAlternateFr.setAttribute('property', 'og:locale:alternate');
      ogAlternateFr.setAttribute('content', 'fr_FR');
      ogAlternateFr.setAttribute('data-lang', 'fr');
      document.head.appendChild(ogAlternateFr);
    }
    
    let ogAlternateEs = document.querySelector('meta[property="og:locale:alternate"][data-lang="es"]');
    if (!ogAlternateEs) {
      ogAlternateEs = document.createElement('meta');
      ogAlternateEs.setAttribute('property', 'og:locale:alternate');
      ogAlternateEs.setAttribute('content', 'es_ES');
      ogAlternateEs.setAttribute('data-lang', 'es');
      document.head.appendChild(ogAlternateEs);
    }
    
    // ========== Twitter Cards ==========
    
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute('content', 'summary_large_image');
    } else {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      twitterCard.setAttribute('content', 'summary_large_image');
      document.head.appendChild(twitterCard);
    }
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', finalTitle);
    } else {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      twitterTitle.setAttribute('content', finalTitle);
      document.head.appendChild(twitterTitle);
    }
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', finalDescription);
    } else {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      twitterDescription.setAttribute('content', finalDescription);
      document.head.appendChild(twitterDescription);
    }
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', finalImage);
    } else {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      twitterImage.setAttribute('content', finalImage);
      document.head.appendChild(twitterImage);
    }
    
    // ========== Canonical & Alternate Links ==========
    
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', finalUrl);
    } else if (url) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', finalUrl);
      document.head.appendChild(canonical);
    }
    
    // Alternate language links
    const languages = ['ar', 'en', 'fr', 'es'];
    languages.forEach(lang => {
      const langUrl = `${siteUrl}/${lang}${url || ''}`;
      let alternateLink = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!alternateLink) {
        alternateLink = document.createElement('link');
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', lang);
        alternateLink.setAttribute('href', langUrl);
        document.head.appendChild(alternateLink);
      } else {
        alternateLink.setAttribute('href', langUrl);
      }
    });
    
    // x-default
    let xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!xDefault) {
      xDefault = document.createElement('link');
      xDefault.setAttribute('rel', 'alternate');
      xDefault.setAttribute('hreflang', 'x-default');
      xDefault.setAttribute('href', `${siteUrl}${url || ''}`);
      document.head.appendChild(xDefault);
    }
    
    // ========== Article Specific Meta Tags ==========
    if (type === 'article' && publishedTime) {
      let articleTime = document.querySelector('meta[property="article:published_time"]');
      if (articleTime) {
        articleTime.setAttribute('content', publishedTime);
      } else {
        articleTime = document.createElement('meta');
        articleTime.setAttribute('property', 'article:published_time');
        articleTime.setAttribute('content', publishedTime);
        document.head.appendChild(articleTime);
      }
      
      let articleAuthor = document.querySelector('meta[property="article:author"]');
      if (articleAuthor) {
        articleAuthor.setAttribute('content', finalAuthor);
      } else {
        articleAuthor = document.createElement('meta');
        articleAuthor.setAttribute('property', 'article:author');
        articleAuthor.setAttribute('content', finalAuthor);
        document.head.appendChild(articleAuthor);
      }
      
      // Article tags
      if (tags && tags.length > 0) {
        // Remove old article:tag metas
        const oldTags = document.querySelectorAll('meta[property="article:tag"]');
        oldTags.forEach(tag => tag.remove());
        
        tags.forEach((tag, index) => {
          const articleTag = document.createElement('meta');
          articleTag.setAttribute('property', 'article:tag');
          articleTag.setAttribute('content', tag);
          document.head.appendChild(articleTag);
        });
      }
    }
    
    // ========== JSON-LD Structured Data ==========
    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? "Article" : type === 'product' ? "Product" : "Organization",
      "name": finalTitle,
      "description": finalDescription,
      "url": finalUrl,
      "image": finalImage,
      ...(type === 'article' && {
        "author": {
          "@type": "Person",
          "name": finalAuthor
        },
        "datePublished": publishedTime,
        "dateModified": publishedTime,
        "mainEntityOfPage": finalUrl,
        "headline": finalTitle
      }),
      ...(type === 'product' && {
        "brand": {
          "@type": "Brand",
          "name": "Samsan"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        }
      }),
      ...(type === 'website' && {
        "logo": `${siteUrl}/logo.png`,
        "sameAs": [
          "https://facebook.com/samsan",
          "https://twitter.com/samsan",
          "https://instagram.com/samsan"
        ]
      })
    };
    
    if (jsonLd) {
      jsonLd.setAttribute('content', JSON.stringify(structuredData));
    } else {
      jsonLd = document.createElement('script');
      jsonLd.setAttribute('type', 'application/ld+json');
      jsonLd.textContent = JSON.stringify(structuredData);
      document.head.appendChild(jsonLd);
    }
    
  }, [title, description, keywords, url, currentLang, type, publishedTime, tags, image, author]);
  
  return null;
};

export default SEO;