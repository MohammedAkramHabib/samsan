// src/pages/Contact.js
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../useTranslation';
import './Contact.css';
import Call from '../media/call';
import Email from '../media/mail';
import Whatsapp from '../media/whatsapp';
import X from '../media/x';
import Facebook from '../media/facebook';
import Instagram from '../media/instagram';
import Location from '../media/location';
import SEO from '../components/SEO';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  // تأثير دخول الصفحة
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.info-card, .contact-form-section, .social-section');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={{
          ar: 'اتصل بنا',
          en: 'Contact Us',
          fr: 'Contactez-nous',
          es: 'Contáctenos'
        }}
        description={{
          ar: 'تواصل مع فريق Samsan للاستفسارات عن المنتجات والخدمات. نحن هنا لمساعدتك.',
          en: 'Contact the Samsan team for inquiries about products and services. We are here to help.',
          fr: 'Contactez l\'équipe Samsan pour des renseignements sur les produits et services.',
          es: 'Comuníquese con el equipo de Samsan para consultas sobre productos y servicios.'
        }}
        keywords="اتصل بنا, Samsan, تواصل, استفسارات, خدمة العملاء"
        url="/contact"
        type="website"
      />

      <div className="contact-page">
        <div className="contact-hero">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>

        {/* معلومات الاتصال */}
        <div className="contact-info-section">
          <h2>{t('contact.info.title')}</h2>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon"><Location /></div>
              <h3>{t('contact.info.address')}</h3>
              <p>Austin Ave, Illinois, USA</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><Email /></div>
              <h3>{t('contact.info.email')}</h3>
              <p>
                <a href="mailto:info@samsan.com">info@samsan.com</a><br />
                <a href="mailto:support@samsan.com">support@samsan.com</a>
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon"><Location /></div>
              <h3>{t('contact.info.address')}</h3>
              <p>4362 N Elston Ave, Chicago, IL 60618, USA</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><Call /></div>
              <h3>{t('contact.info.phone')}</h3>
              <p>
                <a href="tel:+17736287321">+1 773 628 7321</a>
              </p>
            </div>
          </div>
        </div>

        {/* وسائل التواصل الاجتماعي */}
        <div className="social-section">
          <h3>{t('contact.social.title')}</h3>
          <div className="social-links-contact">
            <a href="https://www.facebook.com/profile.php?id=61579022993992&rdid=4SFiakJn0Lv7e7x1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AxzxCuHMd%2F#" target="_blank" rel="noopener noreferrer" className="social-link-contact">
              <span><Facebook /></span> Facebook
            </a>
            <a href="https://www.instagram.com/samsan_inc?igsh=MXhkMXJ3Z3UwcWVndw==" target="_blank" rel="noopener noreferrer" className="social-link-contact">
              <span><Instagram /></span> Instagram
            </a>
            <a href="https://wa.me/17736287321" target="_blank" rel="noopener noreferrer" className="social-link-contact">
              <span><Whatsapp /></span> Whatsapp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;