// src/translate.js
import { useState, useEffect } from 'react';

// استيراد الترجمات من مجلد translations
import arTranslations from './translations/locales/ar/index';
import enTranslations from './translations/locales/en/index';
import frTranslations from './translations/locales/fr/index';
import esTranslations from './translations/locales/es/index';


const translations = {
  ar: arTranslations,
  en: enTranslations,
  fr: frTranslations,
  es: esTranslations
};

// اللغة الحالية
let currentLanguage = 'en';

// حفظ اللغة
const saveLanguage = (lang) => {
  localStorage.setItem('language', lang);
};

// استرجاع اللغة المحفوظة
const getSavedLanguage = () => {
  return localStorage.getItem('language');
};

// تحديد اللغة من المتصفح
const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  const supported = ['ar', 'en', 'fr', 'es'];
  return supported.includes(browserLang) ? browserLang : 'en';
};

// تهيئة اللغة
const initLanguage = () => {
  currentLanguage = getSavedLanguage() || getBrowserLanguage();
  
  // تطبيق الاتجاه على الصفحة
  if (currentLanguage === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage);
  }
  
  return currentLanguage;
};

// دالة الترجمة الرئيسية
export const t = (key, params = {}) => {
  // الحصول على النص من ملفات الترجمة
  let text = translations[currentLanguage]?.[key];
  
  // إذا لم يوجد، جرب الإنجليزية
  if (!text) {
    text = translations.en?.[key];
  }
  
  // إذا لا يزال غير موجود، أرجع المفتاح
  if (!text) {
    console.warn(`Translation missing: ${key} in ${currentLanguage}`);
    return key;
  }
  
  // استبدال المتغيرات
  Object.keys(params).forEach(param => {
    text = text.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
  });
  
  return text;
};

// تغيير اللغة
export const changeLanguage = (lang) => {
  if (translations[lang]) {
    currentLanguage = lang;
    saveLanguage(lang);
    
    // تحديث اتجاه الصفحة
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
    
    // إعادة تحميل الصفحة لتحديث المحتوى
    window.location.reload();
  } else {
    console.warn(`Language ${lang} not supported`);
  }
};

// الحصول على اللغة الحالية
export const getCurrentLanguage = () => currentLanguage;

// قائمة اللغات المتاحة
export const availableLanguages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' }
];

// التحقق من RTL
export const isRTL = () => currentLanguage === 'ar';

// Hook للاستخدام في React
export const useTranslation = () => {
  const [language, setLanguage] = useState(currentLanguage);
  
  useEffect(() => {
    // يمكن إضافة listener لتحديث الحالة
    const handleStorageChange = () => {
      setLanguage(getSavedLanguage() || 'en');
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  return {
    t,
    i18n: {
      language: currentLanguage,
      changeLanguage,
    }
  };
};

// تهيئة اللغة
initLanguage();

export default {
  t,
  changeLanguage,
  getCurrentLanguage,
  availableLanguages,
  useTranslation,
  isRTL
};