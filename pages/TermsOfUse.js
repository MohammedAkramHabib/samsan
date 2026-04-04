// src/pages/TermsOfUse.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../useTranslation';
import './Policies.css';

function TermsOfUse() {
  const { t } = useTranslation();
  const effectiveDate = new Date().toLocaleDateString();

  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>{t('terms.title') || 'شروط الاستخدام'}</h1>
        <p className="last-updated">{t('terms.effectiveDate') || 'تاريخ السريان'}: {effectiveDate}</p>
        <div className="policy-badge">Legal Agreement</div>
      </div>

      <div className="policy-content">
        {/* قبول الشروط */}
        <section className="policy-section">
          <h2>{t('terms.acceptance.title') || 'قبول الشروط'}</h2>
          <p>{t('terms.acceptance.content') || 'باستخدامك لهذا الموقع أو خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا أو خدماتنا.'}</p>
          <div className="warning-box">
            ⚠️ {t('terms.acceptance.warning') || 'هذه الشروط تشكل اتفاقية ملزمة قانونًا بينك وبين شركة Samsan.'}
          </div>
        </section>

        {/* أهلية الاستخدام */}
        <section className="policy-section">
          <h2>{t('terms.eligibility.title') || 'أهلية الاستخدام'}</h2>
          <p>{t('terms.eligibility.content') || 'للاستفادة من خدماتنا، يجب أن تستوفي الشروط التالية:'}</p>
          <ul>
            <li>✓ {t('terms.eligibility.age') || 'أن يكون عمرك 18 عامًا على الأقل، أو توافق والديك إذا كنت أقل من 18 عامًا'}</li>
            <li>✓ {t('terms.eligibility.capacity') || 'أن تكون مؤهلاً قانونيًا لإبرام العقود'}</li>
            <li>✓ {t('terms.eligibility.region') || 'ألا تكون مقيدًا من استخدام الخدمات بموجب أي قوانين أو لوائح'}</li>
            <li>✓ {t('terms.eligibility.previousViolations') || 'ألا يكون حسابك قد تم تعليقه أو إنهاؤه سابقًا لانتهاك الشروط'}</li>
          </ul>
        </section>

        {/* الحساب والتسجيل */}
        <section className="policy-section">
          <h2>{t('terms.account.title') || 'الحساب والتسجيل'}</h2>
          
          <h3>{t('terms.account.responsibility') || 'مسؤولية الحساب'}</h3>
          <p>{t('terms.account.responsibilityText') || 'أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور، وعن جميع الأنشطة التي تحدث تحت حسابك.'}</p>
          
          <h3>{t('terms.account.security') || 'أمان الحساب'}</h3>
          <p>{t('terms.account.securityText') || 'يجب عليك إخطارنا فورًا بأي اختراق أمني أو استخدام غير مصرح به لحسابك.'}</p>
          
          <h3>{t('terms.account.accuracy') || 'دقة المعلومات'}</h3>
          <p>{t('terms.account.accuracyText') || 'تلتزم بتقديم معلومات دقيقة وكاملة وحديثة عند إنشاء حسابك.'}</p>
          
          <h3>{t('terms.account.closure') || 'إنهاء الحساب'}</h3>
          <p>{t('terms.account.closureText') || 'نحتفظ بالحق في إنهاء أو تعليق حسابك في حال انتهاك هذه الشروط أو القوانين المعمول بها.'}</p>
        </section>

        {/* الملكية الفكرية */}
        <section className="policy-section">
          <h2>{t('terms.intellectualProperty.title') || 'الملكية الفكرية وحقوق النشر'}</h2>
          <p>{t('terms.intellectualProperty.content') || 'جميع المحتويات على هذا الموقع، بما في ذلك النصوص والصور والشعارات والبرامج والتصاميم والأيقونات، محمية بحقوق الملكية الفكرية وقوانين حقوق النشر.'}</p>
          <div className="info-box">
            <strong>© {t('terms.intellectualProperty.ownership') || 'جميع الحقوق محفوظة لشركة Samsan.'}</strong>
            <p><strong>{t('terms.intellectualProperty.restrictions') || 'لا يحق لك:'}</strong></p>
            <ul>
              <li>❌ {t('terms.intellectualProperty.copy') || 'نسخ أو إعادة إنتاج أو نشر المحتوى'}</li>
              <li>❌ {t('terms.intellectualProperty.modify') || 'تعديل أو تغيير أو إنشاء أعمال مشتقة'}</li>
              <li>❌ {t('terms.intellectualProperty.distribute') || 'توزيع أو بيع المحتوى دون إذن كتابي مسبق'}</li>
              <li>❌ {t('terms.intellectualProperty.reverse') || 'هندسة عكسية أو فك تشفير البرامج'}</li>
            </ul>
          </div>
        </section>

        {/* سلوك المستخدم */}
        <section className="policy-section">
          <h2>{t('terms.userConduct.title') || 'سلوك المستخدم والالتزامات'}</h2>
          <h3>{t('terms.userConduct.prohibited') || 'الإجراءات المحظورة:'}</h3>
          <ul className="prohibited-list">
            <li>🚫 {t('terms.userConduct.illegal') || 'استخدام الموقع لأي غرض غير قانوني أو احتيالي'}</li>
            <li>🚫 {t('terms.userConduct.harassment') || 'مضايقة أو إيذاء أو التهديد للآخرين'}</li>
            <li>🚫 {t('terms.userConduct.malware') || 'تحميل أو نشر برامج ضارة أو فيروسات أو أكواد خبيثة'}</li>
            <li>🚫 {t('terms.userConduct.spam') || 'إرسال بريد عشوائي أو رسائل غير مرغوب فيها أو إعلانات غير مصرح بها'}</li>
            <li>🚫 {t('terms.userConduct.impersonation') || 'انتحال شخصية آخرين أو تقديم معلومات كاذبة'}</li>
            <li>🚫 {t('terms.userConduct.disrupt') || 'تعطيل أو التدخل في عمل الموقع أو الخوادم أو الشبكات'}</li>
            <li>🚫 {t('terms.userConduct.scrape') || 'استخراج أو جمع بيانات المستخدمين دون موافقة'}</li>
          </ul>
        </section>

        {/* المحتوى الذي تنشره */}
        <section className="policy-section">
          <h2>{t('terms.content.title') || 'المحتوى الذي تنشره'}</h2>
          <p>{t('terms.content.userGenerated') || 'أنت تتحمل المسؤولية الكاملة عن أي محتوى تنشره أو ترفعه أو تنقله عبر موقعنا.'}</p>
          <p>{t('terms.content.license') || 'بموجب نشر المحتوى، تمنحنا ترخيصًا غير حصري وعالميًا لاستخدامه وعرضه وتوزيعه وتعديله لأغراض تقديم خدماتنا.'}</p>
          <div className="info-box">
            <strong>📝 {t('terms.content.rights') || 'حقوق المحتوى'}</strong>
            <p>{t('terms.content.rightsText') || 'نحتفظ بالحق في مراقبة وإزالة أي محتوى ينتهك هذه الشروط أو القوانين المعمول بها دون إشعار مسبق.'}</p>
          </div>
        </section>

        {/* المدفوعات والاشتراكات */}
        <section className="policy-section">
          <h2>{t('terms.payments.title') || 'المدفوعات والاشتراكات'}</h2>
          <p>{t('terms.payments.content') || 'قد تتطلب بعض خدماتنا دفع رسوم أو اشتراكات. جميع المدفوعات غير قابلة للاسترداد إلا في الحالات المنصوص عليها صراحة.'}</p>
          
          <h3>{t('terms.payments.refunds') || 'سياسة الاسترداد'}</h3>
          <p>{t('terms.payments.refundsText') || 'يمكن طلب استرداد الأموال خلال 14 يومًا من تاريخ الشراء إذا لم تكن الخدمة قد استخدمت. للمزيد، راجع سياسة الاسترداد الكاملة.'}</p>
          
          <h3>{t('terms.payments.cancellation') || 'الإلغاء والتجديد التلقائي'}</h3>
          <p>{t('terms.payments.cancellationText') || 'يمكنك إلغاء اشتراكك في أي وقت من خلال إعدادات حسابك. سيستمر الاشتراك حتى نهاية فترة الفوترة الحالية.'}</p>
          
          <h3>{t('terms.payments.taxes') || 'الضرائب والرسوم'}</h3>
          <p>{t('terms.payments.taxesText') || 'أنت مسؤول عن أي ضرائب أو رسوم حكومية مطبقة على مشترياتك.'}</p>
        </section>

        {/* إنهاء الخدمة */}
        <section className="policy-section">
          <h2>{t('terms.termination.title') || 'إنهاء الخدمة'}</h2>
          <p>{t('terms.termination.content') || 'نحتفظ بالحق في إنهاء أو تعليق وصولك إلى خدماتنا فورًا، دون إشعار مسبق، لأي سبب بما في ذلك انتهاك هذه الشروط.'}</p>
          <div className="warning-box">
            ⚠️ {t('terms.termination.effect') || 'عند الإنهاء، سيفقد حقك في استخدام الخدمات فورًا، وسنقوم بحذف معلومات حسابك.'}
          </div>
        </section>

        {/* إخلاء المسؤولية */}
        <section className="policy-section">
          <h2>{t('terms.disclaimers.title') || 'إخلاء المسؤولية'}</h2>
          <div className="disclaimer-box">
            <h4>{t('terms.disclaimers.warranty') || 'الضمانات'}</h4>
            <p>{t('terms.disclaimers.warrantyText') || 'يتم تقديم خدماتنا "كما هي" و"كما هي متاحة" دون أي ضمانات صريحة أو ضمنية، بما في ذلك ضمانات القابلية للتسويق أو الملاءمة لغرض معين.'}</p>
            
            <h4>{t('terms.disclaimers.availability') || 'توفر الخدمة'}</h4>
            <p>{t('terms.disclaimers.availabilityText') || 'لا نضمن أن تكون خدماتنا متاحة دون انقطاع أو خالية من الأخطاء أو آمنة بنسبة 100%.'}</p>
            
            <h4>{t('terms.disclaimers.liability') || 'الحدود القصوى للمسؤولية'}</h4>
            <p>{t('terms.disclaimers.liabilityText') || 'في أي حال، لا نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو تبعية أو خاصة تنشأ عن استخدام خدماتنا، بما في ذلك فقدان البيانات أو الأرباح.'}</p>
          </div>
        </section>

        {/* التعويض */}
        <section className="policy-section">
          <h2>{t('terms.indemnification.title') || 'التعويض'}</h2>
          <p>{t('terms.indemnification.content') || 'توافق على تعويضنا والدفاع عنا وإخلاء مسؤوليتنا ضد أي مطالبات أو خسائر أو أضرار أو تكاليف (بما في ذلك أتعاب المحاماة المعقولة) تنشأ عن انتهاكك لهذه الشروط أو استخدامك غير المصرح به لخدماتنا.'}</p>
        </section>

        {/* القانون الواجب التطبيق */}
        <section className="policy-section">
          <h2>{t('terms.governingLaw.title') || 'القانون الواجب التطبيق وحل النزاعات'}</h2>
          <p>{t('terms.governingLaw.content') || 'تخضع هذه الشروط وتفسر وفقًا لقوانين الولايات المتحدة الأمريكية وولاية إلينوي، دون النظر إلى مبادئ تضارب القوانين.'}</p>
          <div className="law-box">
            <span>🌍 {t('terms.governingLaw.compliance') || 'الامتثال للقوانين الدولية'}</span>
            <p>{t('terms.governingLaw.complianceText') || 'نلتزم بالقوانين الدولية لحماية البيانات بما في ذلك اللائحة العامة لحماية البيانات (GDPR) للاتحاد الأوروبي وقانون خصوصية المستهلك في كاليفورنيا (CCPA).'}</p>
          </div>
        </section>

        {/* تسوية النزاعات */}
        <section className="policy-section">
          <h2>{t('terms.disputes.title') || 'تسوية النزاعات'}</h2>
          <p>{t('terms.disputes.content') || 'في حال نشوب أي نزاع، يوافق الطرفان على محاولة حله ودياً من خلال:'}</p>
          <ol>
            <li>📧 {t('terms.disputes.notice') || 'إشعار خطي بالخلاف خلال 30 يومًا من ظهوره'}</li>
            <li>🤝 {t('terms.disputes.negotiation') || 'اجتماع تفاوضي خلال 15 يومًا من الإشعار'}</li>
            <li>⚖️ {t('terms.disputes.mediation') || 'اللجوء إلى الوساطة إذا لم يتم حل النزاع خلال 30 يومًا'}</li>
            <li>🏛️ {t('terms.disputes.arbitration') || 'التحكيم الملزم وفقًا لقواعد مركز التحكيم التجاري الدولي في شيكاغو'}</li>
          </ol>
        </section>

        {/* تعديل الشروط */}
        <section className="policy-section">
          <h2>{t('terms.changes.title') || 'تعديل الشروط'}</h2>
          <p>{t('terms.changes.content') || 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنقوم بإخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على موقعنا قبل 30 يومًا من生效.'}</p>
        </section>

        {/* الاتصال بنا */}
        <section className="policy-section contact-section">
          <h2>{t('terms.contact.title') || 'الاتصال بنا للاستفسارات القانونية'}</h2>
          <div className="contact-info">
            <p><strong> {t('terms.contact.email') || 'البريد الإلكتروني'}:</strong> legal@samsan.com</p>
            <p><strong> {t('terms.contact.phone') || 'الهاتف'}:</strong> +1 773 628 7321</p>
            <p><strong> {t('terms.contact.address') || 'العنوان'}:</strong> 4362 N Elston Ave, Chicago, IL 60618, USA</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TermsOfUse;