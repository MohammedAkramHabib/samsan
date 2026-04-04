// src/useTranslation.js
import { useTranslation as useTranslate } from './translate';

// إعادة تصدير hook للاستخدام في المشروع
export const useTranslation = useTranslate;

// إعادة تصدير الدوال المهمة
export { t, changeLanguage, getCurrentLanguage, availableLanguages } from './translate';