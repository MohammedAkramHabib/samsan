// src/data/articles.js
import { products } from './products';

// ==================== جميع المقالات (42 مقالة) ====================
export const articles = [
  // ==================== SAM JOINT FLEX (id: 1) - 4 مقالات ====================
  {
    id: 'joint-flex-1',
    productId: 1,
    slug: 'sam-joint-flex-benefits',
    title: {
      ar: 'فوائد SAM JOINT FLEX لصحة المفاصل والغضاريف',
      en: 'Benefits of SAM JOINT FLEX for Joint and Cartilage Health',
      fr: 'Avantages de SAM JOINT FLEX pour la santé des articulations',
      es: 'Beneficios de SAM JOINT FLEX para la salud de las articulaciones'
    },
    excerpt: {
      ar: 'تعرف على كيف يمكن للجلوكوزامين والكولاجين أن يحسنوا صحة مفاصلك ويقللوا الالتهابات...',
      en: 'Learn how Glucosamine and Collagen can improve your joint health and reduce inflammation...',
      fr: 'Découvrez comment la glucosamine et le collagène peuvent améliorer la santé de vos articulations...',
      es: 'Aprenda cómo la glucosamina y el colágeno pueden mejorar la salud de sus articulaciones...'
    },
    content: {
      ar: `# فوائد SAM JOINT FLEX لصحة المفاصل

## الفوائد الرئيسية
- **الجلوكوزامين 2000 مجم**: يساعد في إعادة بناء الغضاريف التالفة
- **MSM 1500 مجم**: يقلل الالتهابات والألم
- **حمض الهيالورونيك 90 مجم**: يحافظ على ليونة المفاصل
- **الكولاجين**: يدعم صحة الأنسجة الضامة

## كيفية الاستخدام
ينصح بتناول كبسولتين يومياً مع الطعام لمدة 3 أشهر.

## الخلاصة
SAM JOINT FLEX هو الحل الأمثل لمن يعانون من آلام المفاصل.`,
      en: `# Benefits of SAM JOINT FLEX for Joint Health

## Key Benefits
- **Glucosamine 2000mg**: Helps rebuild damaged cartilage
- **MSM 1500mg**: Reduces inflammation and pain
- **Hyaluronic Acid 90mg**: Maintains joint lubrication
- **Collagen**: Supports connective tissue health

## Usage
Take 2 capsules daily with food for 3 months.

## Conclusion
SAM JOINT FLEX is the ideal solution for joint pain.`,
      fr: `# Avantages de SAM JOINT FLEX pour la santé des articulations`,
      es: `# Beneficios de SAM JOINT FLEX para la salud de las articulaciones`
    },
    category: { ar: 'صحة المفاصل', en: 'Joint Health', fr: 'Santé des articulations', es: 'Salud de las articulaciones' },
    hashtags: ['JointFlex', 'Glucosamine', 'MSM', 'HyaluronicAcid', 'Turmeric', 'Collagen'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-20',
    readTime: 5,
    image: '🦴'
  },
  {
    id: 'joint-flex-2',
    productId: 1,
    slug: 'glucosamine-vs-msm',
    title: {
      ar: 'جلوكوزامين vs MSM: أيهما أفضل لمفاصلك؟',
      en: 'Glucosamine vs MSM: Which is Better for Your Joints?',
      fr: 'Glucosamine vs MSM : Lequel est le meilleur pour vos articulations?',
      es: 'Glucosamina vs MSM: ¿Cuál es mejor para sus articulaciones?'
    },
    excerpt: {
      ar: 'مقارنة شاملة بين الجلوكوزامين و MSM ودور كل منهما في علاج آلام المفاصل...',
      en: 'A comprehensive comparison between Glucosamine and MSM and their role in treating joint pain...',
      fr: 'Une comparaison complète entre la glucosamine et le MSM...',
      es: 'Una comparación completa entre la glucosamina y el MSM...'
    },
    content: {
      ar: `# جلوكوزامين vs MSM

## الجلوكوزامين
- يعمل على إعادة بناء الغضاريف
- يحسن مرونة المفاصل
- يحتاج 4-6 أسابيع لبدء التأثير

## MSM
- مصدر طبيعي للكبريت
- يقلل الالتهابات بشكل سريع
- يحسن امتصاص العناصر الغذائية

## الخلاصة
SAM JOINT FLEX يجمع بين الاثنين للحصول على أفضل النتائج.`,
      en: `# Glucosamine vs MSM

## Glucosamine
- Rebuilds cartilage
- Improves joint flexibility
- Takes 4-6 weeks to work

## MSM
- Natural sulfur source
- Quickly reduces inflammation
- Improves nutrient absorption

## Conclusion
SAM JOINT FLEX combines both for optimal results.`,
      fr: `# Glucosamine vs MSM`,
      es: `# Glucosamina vs MSM`
    },
    category: { ar: 'مقارنات', en: 'Comparisons', fr: 'Comparaisons', es: 'Comparaciones' },
    hashtags: ['JointFlex', 'Glucosamine', 'MSM', 'JointPain', 'Arthritis'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-18',
    readTime: 4,
    image: '⚖️'
  },
  {
    id: 'joint-flex-3',
    productId: 1,
    slug: 'natural-remedies-joint-pain',
    title: {
      ar: 'علاجات طبيعية لآلام المفاصل',
      en: 'Natural Remedies for Joint Pain',
      fr: 'Remèdes naturels contre les douleurs articulaires',
      es: 'Remedios naturales para el dolor articular'
    },
    excerpt: {
      ar: 'تعرف على أفضل العلاجات الطبيعية لآلام المفاصل بما في ذلك الأعشاب والمكملات الغذائية...',
      en: 'Learn about the best natural remedies for joint pain including herbs and supplements...',
      fr: 'Découvrez les meilleurs remèdes naturels contre les douleurs articulaires...',
      es: 'Conozca los mejores remedios naturales para el dolor articular...'
    },
    content: {
      ar: `# علاجات طبيعية لآلام المفاصل

## أفضل العلاجات الطبيعية
- **الكركم**: مضاد طبيعي للالتهابات
- **الزنجبيل**: يقلل آلام المفاصل
- **البوسويليا**: يحسن حركة المفاصل

## نصائح إضافية
- الحفاظ على وزن صحي
- ممارسة التمارين الرياضية بانتظام
- تناول المكملات الغذائية

## منتج SAM JOINT FLEX
يجمع بين أفضل المكونات الطبيعية لصحة مفاصلك.`,
      en: `# Natural Remedies for Joint Pain

## Best Natural Remedies
- **Turmeric**: Natural anti-inflammatory
- **Ginger**: Reduces joint pain
- **Boswellia**: Improves joint mobility

## Additional Tips
- Maintain healthy weight
- Exercise regularly
- Take supplements

## SAM JOINT FLEX Product
Combines the best natural ingredients for your joint health.`,
      fr: `# Remèdes naturels contre les douleurs articulaires`,
      es: `# Remedios naturales para el dolor articular`
    },
    category: { ar: 'صحة المفاصل', en: 'Joint Health', fr: 'Santé des articulations', es: 'Salud de las articulaciones' },
    hashtags: ['JointPain', 'NaturalRemedies', 'Turmeric', 'Glucosamine', 'JointFlex'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-16',
    readTime: 6,
    image: '🌿'
  },
  {
    id: 'joint-flex-4',
    productId: 1,
    slug: 'cartilage-regeneration-guide',
    title: {
      ar: 'كيف تعيد بناء غضاريف مفاصلك؟',
      en: 'How to Rebuild Your Joint Cartilage?',
      fr: 'Comment reconstruire le cartilage de vos articulations?',
      es: '¿Cómo reconstruir el cartílago de sus articulaciones?'
    },
    excerpt: {
      ar: 'دليل متكامل لإعادة بناء الغضاريف التالفة وتحسين حركة المفاصل...',
      en: 'A complete guide to rebuilding damaged cartilage and improving joint movement...',
      fr: 'Un guide complet pour reconstruire le cartilage endommagé...',
      es: 'Una guía completa para reconstruir el cartílago dañado...'
    },
    content: {
      ar: `# إعادة بناء غضاريف المفاصل

## كيف تعمل؟
- **الجلوكوزامين**: يغذي الغضاريف
- **الكولاجين**: يبني النسيج الضام
- **فيتامين C**: يساعد في إنتاج الكولاجين

## المدة المتوقعة
3-6 أشهر للحصول على نتائج ملحوظة

## منتج SAM JOINT FLEX
تركيبة متكاملة لإعادة بناء الغضاريف.`,
      en: `# Rebuilding Joint Cartilage

## How it Works?
- **Glucosamine**: Nourishes cartilage
- **Collagen**: Builds connective tissue
- **Vitamin C**: Helps produce collagen

## Expected Duration
3-6 months for noticeable results

## SAM JOINT FLEX Product
Complete formula for cartilage rebuilding.`,
      fr: `# Reconstruction du cartilage articulaire`,
      es: `# Reconstrucción del cartílago articular`
    },
    category: { ar: 'صحة المفاصل', en: 'Joint Health', fr: 'Santé des articulations', es: 'Salud de las articulaciones' },
    hashtags: ['Cartilage', 'Glucosamine', 'JointHealth', 'Regeneration', 'JointFlex'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-14',
    readTime: 5,
    image: '🦴'
  },

  // ==================== SAM TRIPLE OMEGA (id: 2) - 4 مقالات ====================
  {
    id: 'omega-1',
    productId: 2,
    slug: 'omega3-benefits-heart-brain',
    title: {
      ar: 'فوائد أوميغا 3 لصحة القلب والدماغ',
      en: 'Benefits of Omega-3 for Heart and Brain Health',
      fr: 'Bienfaits des oméga-3 pour le cœur et le cerveau',
      es: 'Beneficios del omega-3 para la salud del corazón y el cerebro'
    },
    excerpt: {
      ar: 'اكتشف كيف يمكن لأحماض أوميغا 3 الدهنية أن تحسن صحة قلبك وتقوي وظائف دماغك...',
      en: 'Discover how Omega-3 fatty acids can improve your heart health and strengthen your brain functions...',
      fr: 'Découvrez comment les acides gras oméga-3 peuvent améliorer votre santé cardiaque...',
      es: 'Descubra cómo los ácidos grasos omega-3 pueden mejorar la salud de su corazón...'
    },
    content: {
      ar: `# فوائد أوميغا 3 للصحة

## صحة القلب
- يخفض ضغط الدم
- يقلل الدهون الثلاثية
- يمنع تراكم اللويحات في الشرايين

## صحة الدماغ
- يحسن الذاكرة والتركيز
- يقلل خطر الخرف
- يحسن المزاج

## منتج SAM TRIPLE OMEGA
مزيج متوازن من أوميغا 3-6-9 بتركيز 2600 مجم`,
      en: `# Omega-3 Health Benefits

## Heart Health
- Lowers blood pressure
- Reduces triglycerides
- Prevents plaque buildup

## Brain Health
- Improves memory and focus
- Reduces dementia risk
- Improves mood

## SAM TRIPLE OMEGA Product
Balanced blend of Omega 3-6-9 with 2600mg`,
      fr: `# Bienfaits des oméga-3 pour la santé`,
      es: `# Beneficios del omega-3 para la salud`
    },
    category: { ar: 'مكملات غذائية', en: 'Supplements', fr: 'Compléments', es: 'Suplementos' },
    hashtags: ['Omega3', 'Omega369', 'FishOil', 'HeartHealth', 'BrainHealth'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-19',
    readTime: 6,
    image: '🐟'
  },
  {
    id: 'omega-2',
    productId: 2,
    slug: 'epa-dha-importance',
    title: {
      ar: 'EPA و DHA: أهم الأحماض الدهنية لصحتك',
      en: 'EPA and DHA: The Most Important Fatty Acids for Your Health',
      fr: 'EPA et DHA : Les acides gras les plus importants',
      es: 'EPA y DHA: Los ácidos grasos más importantes'
    },
    excerpt: {
      ar: 'تعرف على الفرق بين EPA و DHA وأهمية كل منهما لصحة الجسم...',
      en: 'Learn the difference between EPA and DHA and their importance for body health...',
      fr: 'Découvrez la différence entre EPA et DHA et leur importance...',
      es: 'Conozca la diferencia entre EPA y DHA y su importancia...'
    },
    content: {
      ar: `# EPA و DHA

## EPA
- مضاد قوي للالتهابات
- يحسن صحة القلب
- يقلل أعراض الاكتئاب

## DHA
- ضروري لنمو الدماغ
- يدعم صحة العين
- مهم للحامل

## منتج SAM TRIPLE OMEGA
نسب متوازنة من EPA و DHA`,
      en: `# EPA and DHA

## EPA
- Powerful anti-inflammatory
- Improves heart health
- Reduces depression

## DHA
- Essential for brain growth
- Supports eye health
- Important for pregnancy

## SAM TRIPLE OMEGA Product
Balanced EPA and DHA ratios`,
      fr: `# EPA et DHA`,
      es: `# EPA y DHA`
    },
    category: { ar: 'مكملات غذائية', en: 'Supplements', fr: 'Compléments', es: 'Suplementos' },
    hashtags: ['EPA', 'DHA', 'Omega3', 'FishOil', 'BrainHealth'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-17',
    readTime: 5,
    image: '🧠'
  },
  {
    id: 'omega-3',
    productId: 2,
    slug: 'omega3-for-skin-hair',
    title: {
      ar: 'فوائد أوميغا 3 للبشرة والشعر',
      en: 'Benefits of Omega-3 for Skin and Hair',
      fr: 'Bienfaits des oméga-3 pour la peau et les cheveux',
      es: 'Beneficios del omega-3 para la piel y el cabello'
    },
    excerpt: {
      ar: 'اكتشف كيف يمكن لأوميغا 3 أن يحسن صحة بشرتك ويقوي شعرك...',
      en: 'Discover how Omega-3 can improve your skin health and strengthen your hair...',
      fr: 'Découvrez comment les oméga-3 peuvent améliorer votre peau...',
      es: 'Descubra cómo el omega-3 puede mejorar su piel...'
    },
    content: {
      ar: `# أوميغا 3 للبشرة والشعر

## للبشرة
- يرطب البشرة
- يقلل الالتهابات الجلدية
- يحمي من أشعة الشمس

## للشعر
- يقوي بصيلات الشعر
- يقلل تساقط الشعر
- يزيد لمعان الشعر

## منتج SAM TRIPLE OMEGA
لصحة متكاملة من الداخل والخارج`,
      en: `# Omega-3 for Skin and Hair

## For Skin
- Hydrates skin
- Reduces skin inflammation
- Protects from sun

## For Hair
- Strengthens hair follicles
- Reduces hair loss
- Increases shine

## SAM TRIPLE OMEGA Product
For complete inside-out health`,
      fr: `# Oméga-3 pour la peau et les cheveux`,
      es: `# Omega-3 para la piel y el cabello`
    },
    category: { ar: 'جمال', en: 'Beauty', fr: 'Beauté', es: 'Belleza' },
    hashtags: ['Omega3', 'SkinHealth', 'HairHealth', 'Beauty', 'TripleOmega'],
    author: { ar: 'أ. سارة محمود', en: 'Sara Mahmoud', fr: 'Sara Mahmoud', es: 'Sara Mahmoud' },
    date: '2024-03-15',
    readTime: 5,
    image: '💆‍♀️'
  },
  {
    id: 'omega-4',
    productId: 2,
    slug: 'omega3-during-pregnancy',
    title: {
      ar: 'أهمية أوميغا 3 للحامل والجنين',
      en: 'Importance of Omega-3 for Pregnant Women and Fetus',
      fr: 'Importance des oméga-3 pour la femme enceinte',
      es: 'Importancia del omega-3 para la mujer embarazada'
    },
    excerpt: {
      ar: 'تعرف على فوائد أوميغا 3 للأم الحامل ونمو دماغ الجنين...',
      en: 'Learn about the benefits of Omega-3 for pregnant mothers and fetal brain development...',
      fr: 'Découvrez les bienfaits des oméga-3 pour la mère enceinte...',
      es: 'Conozca los beneficios del omega-3 para la madre embarazada...'
    },
    content: {
      ar: `# أوميغا 3 للحامل

## فوائد للأم
- يقلل خطر الاكتئاب بعد الولادة
- يدعم صحة القلب
- يقلل الالتهابات

## فوائد للجنين
- يطور دماغ الجنين
- يحسن الرؤية
- يدعم النمو الصحي

## منتج SAM TRIPLE OMEGA
آمن وفعال للأمهات الحوامل`,
      en: `# Omega-3 for Pregnancy

## Benefits for Mother
- Reduces postpartum depression risk
- Supports heart health
- Reduces inflammation

## Benefits for Baby
- Develops fetal brain
- Improves vision
- Supports healthy growth

## SAM TRIPLE OMEGA Product
Safe and effective for pregnant mothers`,
      fr: `# Oméga-3 pour la grossesse`,
      es: `# Omega-3 para el embarazo`
    },
    category: { ar: 'صحة المرأة', en: 'Women Health', fr: 'Santé des femmes', es: 'Salud de la mujer' },
    hashtags: ['Omega3', 'Pregnancy', 'BabyBrain', 'DHA', 'TripleOmega'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-13',
    readTime: 6,
    image: '🤰'
  },

  // ==================== SAM VITAMIN D (id: 3) - 4 مقالات ====================
  {
    id: 'vitamin-d-1',
    productId: 3,
    slug: 'vitamin-d3-benefits',
    title: {
      ar: 'فوائد فيتامين D3 للصحة العامة',
      en: 'Benefits of Vitamin D3 for Overall Health',
      fr: 'Bienfaits de la vitamine D3 pour la santé',
      es: 'Beneficios de la vitamina D3 para la salud general'
    },
    excerpt: {
      ar: 'اكتشف كيف يمكن لفيتامين D3 أن يعزز مناعتك ويقوي عظامك ويحسن مزاجك...',
      en: 'Discover how Vitamin D3 can boost your immunity, strengthen your bones, and improve your mood...',
      fr: 'Découvrez comment la vitamine D3 peut renforcer votre immunité...',
      es: 'Descubra cómo la vitamina D3 puede fortalecer su inmunidad...'
    },
    content: {
      ar: `# فوائد فيتامين D3

## 1. تقوية المناعة
ينشط الخلايا المناعية لمحاربة الأمراض

## 2. صحة العظام
يساعد على امتصاص الكالسيوم والفوسفور

## 3. تحسين المزاج
نقصه يرتبط بالاكتئاب

## منتج SAM VITAMIN D
10,000 وحدة دولية من فيتامين D3 النقي`,
      en: `# Benefits of Vitamin D3

## 1. Boosts Immunity
Activates immune cells to fight diseases

## 2. Bone Health
Helps absorb calcium and phosphorus

## 3. Mood Improvement
Deficiency linked to depression

## SAM VITAMIN D Product
10,000 IU of pure Vitamin D3`,
      fr: `# Bienfaits de la vitamine D3`,
      es: `# Beneficios de la vitamina D3`
    },
    category: { ar: 'فيتامينات', en: 'Vitamins', fr: 'Vitamines', es: 'Vitaminas' },
    hashtags: ['VitaminD3', 'HighPotency', 'BoneHealth', 'Immunity', 'SunshineVitamin'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-18',
    readTime: 6,
    image: '☀️'
  },
  {
    id: 'vitamin-d-2',
    productId: 3,
    slug: 'vitamin-d-deficiency-symptoms',
    title: {
      ar: 'أعراض نقص فيتامين D3 وكيفية علاجها',
      en: 'Vitamin D3 Deficiency Symptoms and How to Treat Them',
      fr: 'Symptômes de carence en vitamine D3',
      es: 'Síntomas de deficiencia de vitamina D3'
    },
    excerpt: {
      ar: 'تعرف على علامات نقص فيتامين D3 في جسمك وكيفية تعويضه...',
      en: 'Learn about the signs of Vitamin D3 deficiency in your body and how to compensate...',
      fr: 'Apprenez à connaître les signes de carence en vitamine D3...',
      es: 'Conozca los signos de deficiencia de vitamina D3...'
    },
    content: {
      ar: `# أعراض نقص فيتامين D3

## الأعراض الشائعة
- التعب والإرهاق المستمر
- آلام العظام والمفاصل
- ضعف العضلات
- تساقط الشعر
- ضعف المناعة

## العلاج
1. التعرض لأشعة الشمس 15-20 دقيقة يومياً
2. تناول الأطعمة الغنية بفيتامين D3
3. مكملات فيتامين D3

## منتج SAM VITAMIN D3
10,000 وحدة دولية لضمان احتياجك اليومي`,
      en: `# Vitamin D3 Deficiency Symptoms

## Common Symptoms
- Persistent fatigue
- Bone and joint pain
- Muscle weakness
- Hair loss
- Weak immunity

## Treatment
1. Sun exposure 15-20 minutes daily
2. Eat Vitamin D3 rich foods
3. Vitamin D3 supplements

## SAM VITAMIN D3 Product
10,000 IU for your daily needs`,
      fr: `# Symptômes de carence en vitamine D3`,
      es: `# Síntomas de deficiencia de vitamina D3`
    },
    category: { ar: 'صحة عامة', en: 'General Health', fr: 'Santé générale', es: 'Salud general' },
    hashtags: ['VitaminD3', 'VitaminDeficiency', 'Immunity', 'BoneHealth', 'Fatigue'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-16',
    readTime: 5,
    image: '⚠️'
  },
  {
    id: 'vitamin-d-3',
    productId: 3,
    slug: 'vitamin-d-immune-system',
    title: {
      ar: 'فيتامين D3 ودوره في تعزيز المناعة',
      en: 'Vitamin D3 and Its Role in Boosting Immunity',
      fr: 'Vitamine D3 et son rôle dans le renforcement de l\'immunité',
      es: 'Vitamina D3 y su papel en el fortalecimiento de la inmunidad'
    },
    excerpt: {
      ar: 'كيف يساعد فيتامين D3 في تقوية جهاز المناعة ومحاربة الأمراض...',
      en: 'How Vitamin D3 helps strengthen the immune system and fight diseases...',
      fr: 'Comment la vitamine D3 aide à renforcer le système immunitaire...',
      es: 'Cómo la vitamina D3 ayuda a fortalecer el sistema inmunológico...'
    },
    content: {
      ar: `# فيتامين D3 والمناعة

## كيف يعمل؟
- ينشط الخلايا التائية القاتلة
- يعزز إنتاج المضادات الحيوية الطبيعية
- يقلل الالتهابات

## الوقاية من الأمراض
- نزلات البرد والإنفلونزا
- أمراض المناعة الذاتية
- الالتهابات المتكررة

## منتج SAM VITAMIN D
لدعم جهاز المناعة لديك`,
      en: `# Vitamin D3 and Immunity

## How it Works?
- Activates killer T cells
- Boosts natural antibiotic production
- Reduces inflammation

## Disease Prevention
- Colds and flu
- Autoimmune diseases
- Recurrent infections

## SAM VITAMIN D Product
To support your immune system`,
      fr: `# Vitamine D3 et immunité`,
      es: `# Vitamina D3 e inmunidad`
    },
    category: { ar: 'مناعة', en: 'Immunity', fr: 'Immunité', es: 'Inmunidad' },
    hashtags: ['VitaminD3', 'Immunity', 'ImmuneSystem', 'ColdPrevention', 'SAMVitaminD'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-14',
    readTime: 5,
    image: '🛡️'
  },
  {
    id: 'vitamin-d-4',
    productId: 3,
    slug: 'vitamin-d-mood-depression',
    title: {
      ar: 'فيتامين D3 وتحسين المزاج',
      en: 'Vitamin D3 and Mood Improvement',
      fr: 'Vitamine D3 et amélioration de l\'humeur',
      es: 'Vitamina D3 y mejora del estado de ánimo'
    },
    excerpt: {
      ar: 'تعرف على العلاقة بين نقص فيتامين D3 والاكتئاب وكيفية تحسين مزاجك...',
      en: 'Learn about the link between Vitamin D3 deficiency and depression and how to improve your mood...',
      fr: 'Découvrez le lien entre la carence en vitamine D3 et la dépression...',
      es: 'Conozca el vínculo entre la deficiencia de vitamina D3 y la depresión...'
    },
    content: {
      ar: `# فيتامين D3 والمزاج

## العلاقة بالاكتئاب
نقص فيتامين D3 يرتبط بـ:
- الاكتئاب الموسمي
- اضطرابات المزاج
- القلق والتوتر

## كيف يحسن المزاج؟
- ينظم السيروتونين (هرمون السعادة)
- يحسن جودة النوم
- يقلل التوتر

## منتج SAM VITAMIN D
لصحة نفسية أفضل`,
      en: `# Vitamin D3 and Mood

## Link to Depression
Vitamin D3 deficiency is linked to:
- Seasonal depression
- Mood disorders
- Anxiety and stress

## How it Improves Mood?
- Regulates serotonin (happiness hormone)
- Improves sleep quality
- Reduces stress

## SAM VITAMIN D Product
For better mental health`,
      fr: `# Vitamine D3 et humeur`,
      es: `# Vitamina D3 y estado de ánimo`
    },
    category: { ar: 'صحة نفسية', en: 'Mental Health', fr: 'Santé mentale', es: 'Salud mental' },
    hashtags: ['VitaminD3', 'Mood', 'Depression', 'MentalHealth', 'SAMVitaminD'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-12',
    readTime: 6,
    image: '😊'
  },

  // ==================== SAM FERRO (id: 4) - 4 مقالات ====================
  {
    id: 'ferro-1',
    productId: 4,
    slug: 'iron-deficiency-anemia',
    title: {
      ar: 'نقص الحديد وفقر الدم: الأعراض والعلاج',
      en: 'Iron Deficiency and Anemia: Symptoms and Treatment',
      fr: 'Carence en fer et anémie : Symptômes et traitement',
      es: 'Deficiencia de hierro y anemia: Síntomas y tratamiento'
    },
    excerpt: {
      ar: 'تعرف على علامات نقص الحديد في الجسم وكيفية علاجه بشكل فعال...',
      en: 'Learn about the signs of iron deficiency in the body and how to treat it effectively...',
      fr: 'Découvrez les signes de carence en fer et comment la traiter...',
      es: 'Conozca los signos de deficiencia de hierro y cómo tratarla...'
    },
    content: {
      ar: `# نقص الحديد وفقر الدم

## الأعراض الشائعة
- التعب والإرهاق المستمر
- شحوب البشرة
- ضيق التنفس
- تساقط الشعر
- برودة الأطراف

## العلاج الفعال
- مكملات الحديد
- فيتامين C لتعزيز الامتصاص
- أطعمة غنية بالحديد

## منتج SAM FERRO
حديد + لاكتوفيرين + حمض الفوليك`,
      en: `# Iron Deficiency and Anemia

## Common Symptoms
- Persistent fatigue
- Pale skin
- Shortness of breath
- Hair loss
- Cold hands and feet

## Effective Treatment
- Iron supplements
- Vitamin C for absorption
- Iron-rich foods

## SAM FERRO Product
Iron + Lactoferrin + Folic Acid`,
      fr: `# Carence en fer et anémie`,
      es: `# Deficiencia de hierro y anemia`
    },
    category: { ar: 'صحة عامة', en: 'General Health', fr: 'Santé générale', es: 'Salud general' },
    hashtags: ['Iron', 'Ferro', 'Anemia', 'IronDeficiency', 'FolicAcid'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-17',
    readTime: 5,
    image: '🩸'
  },
  {
    id: 'ferro-2',
    productId: 4,
    slug: 'lactoferrin-benefits',
    title: {
      ar: 'اللاكتوفيرين: فوائد مذهلة للجهاز المناعي',
      en: 'Lactoferrin: Amazing Benefits for the Immune System',
      fr: 'Lactoferrine : Bienfaits étonnants pour le système immunitaire',
      es: 'Lactoferrina: Beneficios asombrosos para el sistema inmunológico'
    },
    excerpt: {
      ar: 'اكتشف فوائد اللاكتوفيرين للجهاز المناعي وصحة الأمعاء...',
      en: 'Discover the benefits of lactoferrin for the immune system and gut health...',
      fr: 'Découvrez les bienfaits de la lactoferrine...',
      es: 'Descubra los beneficios de la lactoferrina...'
    },
    content: {
      ar: `# اللاكتوفيرين

## فوائد اللاكتوفيرين
- يعزز جهاز المناعة
- مضاد طبيعي للبكتيريا والفيروسات
- يحسن امتصاص الحديد
- يدعم صحة الأمعاء
- مضاد للأكسدة

## منتج SAM FERRO
150 مجم من اللاكتوفيرين عالي الجودة`,
      en: `# Lactoferrin

## Benefits of Lactoferrin
- Boosts immune system
- Natural antibacterial and antiviral
- Improves iron absorption
- Supports gut health
- Antioxidant

## SAM FERRO Product
150mg of high-quality lactoferrin`,
      fr: `# Lactoferrine`,
      es: `# Lactoferrina`
    },
    category: { ar: 'مناعة', en: 'Immunity', fr: 'Immunité', es: 'Inmunidad' },
    hashtags: ['Lactoferrin', 'Iron', 'Immunity', 'Ferro', 'Antibacterial'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-15',
    readTime: 4,
    image: '🛡️'
  },
  {
    id: 'ferro-3',
    productId: 4,
    slug: 'iron-rich-foods',
    title: {
      ar: 'أفضل الأطعمة الغنية بالحديد',
      en: 'Best Iron-Rich Foods',
      fr: 'Meilleurs aliments riches en fer',
      es: 'Mejores alimentos ricos en hierro'
    },
    excerpt: {
      ar: 'قائمة بأهم الأطعمة الطبيعية الغنية بالحديد لعلاج فقر الدم...',
      en: 'A list of the most important natural iron-rich foods to treat anemia...',
      fr: 'Une liste des aliments naturels les plus riches en fer...',
      es: 'Una lista de los alimentos naturales más ricos en hierro...'
    },
    content: {
      ar: `# أطعمة غنية بالحديد

## أغنى المصادر
- **اللحوم الحمراء**: أغنى مصدر للحديد الهيم
- **الكبد**: غني جداً بالحديد
- **السبانخ**: مصدر نباتي ممتاز
- **العدس**: غني بالحديد والألياف
- **المكسرات**: خاصة الكاجو واللوز

## نصائح للامتصاص
تناول فيتامين C مع الحديد لتعزيز الامتصاص

## منتج SAM FERRO
لضمان حصولك على احتياجك اليومي من الحديد`,
      en: `# Iron-Rich Foods

## Richest Sources
- **Red meat**: Richest source of heme iron
- **Liver**: Very rich in iron
- **Spinach**: Excellent plant source
- **Lentils**: Rich in iron and fiber
- **Nuts**: Especially cashews and almonds

## Absorption Tips
Take Vitamin C with iron to enhance absorption

## SAM FERRO Product
To ensure you get your daily iron needs`,
      fr: `# Aliments riches en fer`,
      es: `# Alimentos ricos en hierro`
    },
    category: { ar: 'تغذية', en: 'Nutrition', fr: 'Nutrition', es: 'Nutrición' },
    hashtags: ['Iron', 'IronRichFoods', 'Anemia', 'Nutrition', 'SAMFerro'],
    author: { ar: 'أ. سارة محمود', en: 'Sara Mahmoud', fr: 'Sara Mahmoud', es: 'Sara Mahmoud' },
    date: '2024-03-13',
    readTime: 5,
    image: '🥩'
  },
  {
    id: 'ferro-4',
    productId: 4,
    slug: 'folic-acid-pregnancy',
    title: {
      ar: 'حمض الفوليك: أهميته للحامل والجنين',
      en: 'Folic Acid: Its Importance for Pregnant Women and Fetus',
      fr: 'Acide folique : Son importance pour la femme enceinte',
      es: 'Ácido fólico: Su importancia para la mujer embarazada'
    },
    excerpt: {
      ar: 'تعرف على أهمية حمض الفوليك للوقاية من تشوهات الأنبوب العصبي للجنين...',
      en: 'Learn about the importance of folic acid in preventing neural tube defects...',
      fr: 'Découvrez l\'importance de l\'acide folique...',
      es: 'Conozca la importancia del ácido fólico...'
    },
    content: {
      ar: `# حمض الفوليك للحامل

## أهميته
- يقي من تشوهات الأنبوب العصبي
- يدعم نمو الحبل الشوكي للجنين
- يمنع انفصال المشيمة
- يقلل خطر الولادة المبكرة

## الجرعة الموصى بها
400-800 ميكروجرام يومياً قبل وأثناء الحمل

## منتج SAM FERRO
400 ميكروجرام من حمض الفوليك`,
      en: `# Folic Acid for Pregnancy

## Importance
- Prevents neural tube defects
- Supports fetal spinal cord growth
- Prevents placental abruption
- Reduces risk of premature birth

## Recommended Dosage
400-800 mcg daily before and during pregnancy

## SAM FERRO Product
400 mcg of folic acid`,
      fr: `# Acide folique pour la grossesse`,
      es: `# Ácido fólico para el embarazo`
    },
    category: { ar: 'صحة المرأة', en: 'Women Health', fr: 'Santé des femmes', es: 'Salud de la mujer' },
    hashtags: ['FolicAcid', 'Pregnancy', 'NeuralTube', 'BirthDefects', 'SAMFerro'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-11',
    readTime: 5,
    image: '🤱'
  },

  // ==================== SAM GREY (id: 5) - 4 مقالات ====================
  {
    id: 'grey-1',
    productId: 5,
    slug: 'how-to-stop-premature-greying',
    title: {
      ar: 'كيف توقف الشيب المبكر؟',
      en: 'How to Stop Premature Greying?',
      fr: 'Comment arrêter les cheveux blancs prématurés?',
      es: '¿Cómo detener las canas prematuras?'
    },
    excerpt: {
      ar: 'تعرف على أسباب الشيب المبكر والعلاج الفعال باستخدام SAM GREY...',
      en: 'Learn about the causes of premature greying and effective treatment with SAM GREY...',
      fr: 'Découvrez les causes des cheveux blancs prématurés...',
      es: 'Conozca las causas de las canas prematuras...'
    },
    content: {
      ar: `# كيف توقف الشيب المبكر؟

## الأسباب
- نقص النحاس والزنك
- نقص فيتامين B12
- الإجهاد التأكسدي
- العوامل الوراثية

## الحلول
- مكملات النحاس والزنك
- زيادة فيتامين B12
- مضادات الأكسدة

## منتج SAM GREY
نحاس + زنك + حديد + B12 + بيوتين`,
      en: `# How to Stop Premature Greying?

## Causes
- Copper and zinc deficiency
- Vitamin B12 deficiency
- Oxidative stress
- Genetic factors

## Solutions
- Copper and zinc supplements
- Increase Vitamin B12
- Antioxidants

## SAM GREY Product
Copper + Zinc + Iron + B12 + Biotin`,
      fr: `# Comment arrêter les cheveux blancs prématurés?`,
      es: `# ¿Cómo detener las canas prematuras?`
    },
    category: { ar: 'العناية بالشعر', en: 'Hair Care', fr: 'Soins capillaires', es: 'Cuidado del cabello' },
    hashtags: ['GreyHair', 'Biotin', 'Melanin', 'HairLoss', 'VitaminB12'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-16',
    readTime: 5,
    image: '🦳'
  },
  {
    id: 'grey-2',
    productId: 5,
    slug: 'biotin-for-hair-growth',
    title: {
      ar: 'البيوتين: سر الشعر الصحي واللامع',
      en: 'Biotin: The Secret to Healthy and Shiny Hair',
      fr: 'La biotine : Le secret d\'une chevelure saine',
      es: 'La biotina: El secreto del cabello sano'
    },
    excerpt: {
      ar: 'اكتشف فوائد البيوتين للشعر وكيف يمكن أن يساعد في علاج التساقد والشيب...',
      en: 'Discover the benefits of Biotin for hair and how it can help with hair loss and greying...',
      fr: 'Découvrez les bienfaits de la biotine pour les cheveux...',
      es: 'Descubra los beneficios de la biotina para el cabello...'
    },
    content: {
      ar: `# البيوتين

## فوائد البيوتين
- يحفز نمو الشعر
- يقوي بصيلات الشعر
- يقلل تساقط الشعر
- يحسن ملمس الشعر
- يساعد في إنتاج الكيراتين

## الجرعة الموصى بها
5000 ميكروجرام يومياً

## منتج SAM GREY
5000 ميكروجرام بيوتين + نحاس + زنك`,
      en: `# Biotin

## Biotin Benefits
- Stimulates hair growth
- Strengthens hair follicles
- Reduces hair loss
- Improves hair texture
- Helps produce keratin

## Recommended Dosage
5000 mcg daily

## SAM GREY Product
5000 mcg Biotin + Copper + Zinc`,
      fr: `# Biotine`,
      es: `# Biotina`
    },
    category: { ar: 'فيتامينات', en: 'Vitamins', fr: 'Vitamines', es: 'Vitaminas' },
    hashtags: ['Biotin', 'HairGrowth', 'HairLoss', 'Keratin', 'SAMGREY'],
    author: { ar: 'أ. سارة محمود', en: 'Sara Mahmoud', fr: 'Sara Mahmoud', es: 'Sara Mahmoud' },
    date: '2024-03-14',
    readTime: 4,
    image: '💇‍♀️'
  },
  {
    id: 'grey-3',
    productId: 5,
    slug: 'copper-for-melanin',
    title: {
      ar: 'النحاس: معدن أساسي لإنتاج الميلانين',
      en: 'Copper: An Essential Mineral for Melanin Production',
      fr: 'Cuivre : Un minéral essentiel pour la production de mélanine',
      es: 'Cobre: Un mineral esencial para la producción de melanina'
    },
    excerpt: {
      ar: 'كيف يساعد النحاس في إنتاج الميلانين واستعادة لون الشعر الطبيعي...',
      en: 'How copper helps produce melanin and restore natural hair color...',
      fr: 'Comment le cuivre aide à produire de la mélanine...',
      es: 'Cómo el cobre ayuda a producir melanina...'
    },
    content: {
      ar: `# النحاس والميلانين

## دور النحاس
- ضروري لإنتاج الميلانين (صبغة الشعر)
- يحول الحديد إلى هيموغلوبين
- يدعم الجهاز المناعي

## أعراض نقص النحاس
- شيب مبكر
- تساقط الشعر
- فقر الدم

## منتج SAM GREY
2 مجم نحاس عالي الامتصاص`,
      en: `# Copper and Melanin

## Role of Copper
- Essential for melanin production (hair pigment)
- Converts iron to hemoglobin
- Supports immune system

## Deficiency Symptoms
- Premature greying
- Hair loss
- Anemia

## SAM GREY Product
2mg high-absorption copper`,
      fr: `# Cuivre et mélanine`,
      es: `# Cobre y melanina`
    },
    category: { ar: 'العناية بالشعر', en: 'Hair Care', fr: 'Soins capillaires', es: 'Cuidado del cabello' },
    hashtags: ['Copper', 'Melanin', 'HairColor', 'GreyHair', 'SAMGrey'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-12',
    readTime: 4,
    image: '🟤'
  },
  {
    id: 'grey-4',
    productId: 5,
    slug: 'zinc-for-hair-loss',
    title: {
      ar: 'الزنك: دوره في منع تساقط الشعر',
      en: 'Zinc: Its Role in Preventing Hair Loss',
      fr: 'Zinc : Son rôle dans la prévention de la chute des cheveux',
      es: 'Zinc: Su papel en la prevención de la caída del cabello'
    },
    excerpt: {
      ar: 'تعرف على أهمية الزنك لصحة فروة الرأس ومنع تساقط الشعر...',
      en: 'Learn about the importance of zinc for scalp health and preventing hair loss...',
      fr: 'Découvrez l\'importance du zinc pour la santé du cuir chevelu...',
      es: 'Conozca la importancia del zinc para la salud del cuero cabelludo...'
    },
    content: {
      ar: `# الزنك وتساقط الشعر

## فوائد الزنك للشعر
- ينظم إنتاج الزهم في فروة الرأس
- يقوي بصيلات الشعر
- يحفز نمو الشعر
- يمنع تساقط الشعر

## المصادر الطبيعية
المحار، اللحم الأحمر، المكسرات، البذور

## منتج SAM GREY
20 مجم زنك لصحة شعرك`,
      en: `# Zinc and Hair Loss

## Benefits of Zinc for Hair
- Regulates sebum production on scalp
- Strengthens hair follicles
- Stimulates hair growth
- Prevents hair loss

## Natural Sources
Oysters, red meat, nuts, seeds

## SAM GREY Product
20mg zinc for your hair health`,
      fr: `# Zinc et chute des cheveux`,
      es: `# Zinc y caída del cabello`
    },
    category: { ar: 'العناية بالشعر', en: 'Hair Care', fr: 'Soins capillaires', es: 'Cuidado del cabello' },
    hashtags: ['Zinc', 'HairLoss', 'ScalpHealth', 'HairGrowth', 'SAMGrey'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-10',
    readTime: 5,
    image: '💪'
  },

  // ==================== SAM NERVE HEALTH (id: 6) - 4 مقالات ====================
  {
    id: 'nerve-1',
    productId: 6,
    slug: 'alpha-lipoic-acid-nerve-health',
    title: {
      ar: 'حمض الليبويك: حليف قوي لصحة الأعصاب',
      en: 'Alpha Lipoic Acid: A Powerful Ally for Nerve Health',
      fr: 'Acide alpha-lipoïque : Un allié puissant pour la santé nerveuse',
      es: 'Ácido alfa-lipoico: Un aliado poderoso para la salud nerviosa'
    },
    excerpt: {
      ar: 'تعرف على فوائد حمض الليبويك للأعصاب وكيف يساعد في علاج الاعتلال العصبي...',
      en: 'Learn about the benefits of alpha lipoic acid for nerves and how it helps treat neuropathy...',
      fr: 'Découvrez les bienfaits de l\'acide alpha-lipoïque...',
      es: 'Conozca los beneficios del ácido alfa-lipoico...'
    },
    content: {
      ar: `# حمض الليبويك

## الفوائد الرئيسية
- مضاد أكسدة قوي
- يحسن تدفق الدم إلى الأعصاب
- يقلل آلام الأعصاب
- يحسن حساسية الأنسولين

## الاعتلال العصبي
يساعد في علاج:
- اعتلال الأعصاب السكري
- آلام الأعصاب الطرفية
- تنميل الأطراف

## منتج SAM NERVE HEALTH
500 مجم حمض الليبويك النقي`,
      en: `# Alpha Lipoic Acid

## Key Benefits
- Powerful antioxidant
- Improves blood flow to nerves
- Reduces nerve pain
- Improves insulin sensitivity

## Neuropathy
Helps treat:
- Diabetic neuropathy
- Peripheral nerve pain
- Numbness in extremities

## SAM NERVE HEALTH Product
500mg pure alpha lipoic acid`,
      fr: `# Acide alpha-lipoïque`,
      es: `# Ácido alfa-lipoico`
    },
    category: { ar: 'صحة الأعصاب', en: 'Nerve Health', fr: 'Santé nerveuse', es: 'Salud nerviosa' },
    hashtags: ['AlphaLipoicAcid', 'NerveHealth', 'Neuropathy', 'Antioxidant'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-15',
    readTime: 5,
    image: '⚡'
  },
  {
    id: 'nerve-2',
    productId: 6,
    slug: 'b-vitamins-nerve-function',
    title: {
      ar: 'فيتامينات B ودورها الأساسي في وظائف الأعصاب',
      en: 'B Vitamins and Their Essential Role in Nerve Function',
      fr: 'Vitamines B et leur rôle essentiel dans la fonction nerveuse',
      es: 'Vitaminas B y su papel esencial en la función nerviosa'
    },
    excerpt: {
      ar: 'اكتشف كيف تساعد فيتامينات B1 و B6 و B12 في حماية وتجديد الأعصاب...',
      en: 'Discover how Vitamins B1, B6, and B12 help protect and regenerate nerves...',
      fr: 'Découvrez comment les vitamines B1, B6 et B12 aident à protéger les nerfs...',
      es: 'Descubra cómo las vitaminas B1, B6 y B12 ayudan a proteger los nervios...'
    },
    content: {
      ar: `# فيتامينات B للأعصاب

## فيتامين B1 (الثيامين)
- ضروري لإنتاج الطاقة في الخلايا العصبية
- يحمي غمد المايلين

## فيتامين B6 (البيريدوكسين)
- يساعد في تكوين النواقل العصبية
- يقلل الالتهابات العصبية

## فيتامين B12 (الكوبالامين)
- ضروري لتكوين غمد المايلين
- يحمي الأعصاب من التلف

## منتج SAM NERVE HEALTH
تركيبة متكاملة من فيتامينات B`,
      en: `# B Vitamins for Nerves

## Vitamin B1 (Thiamine)
- Essential for energy production in nerve cells
- Protects the myelin sheath

## Vitamin B6 (Pyridoxine)
- Helps form neurotransmitters
- Reduces nerve inflammation

## Vitamin B12 (Cobalamin)
- Essential for myelin sheath formation
- Protects nerves from damage

## SAM NERVE HEALTH Product
Complete B-vitamin formula`,
      fr: `# Vitamines B pour les nerfs`,
      es: `# Vitaminas B para los nervios`
    },
    category: { ar: 'فيتامينات', en: 'Vitamins', fr: 'Vitamines', es: 'Vitaminas' },
    hashtags: ['VitaminB1', 'VitaminB6', 'VitaminB12', 'NerveHealth', 'BComplex'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-13',
    readTime: 5,
    image: '💊'
  },
  {
    id: 'nerve-3',
    productId: 6,
    slug: 'neuropathy-causes-treatment',
    title: {
      ar: 'الاعتلال العصبي: الأسباب والعلاج',
      en: 'Neuropathy: Causes and Treatment',
      fr: 'Neuropathie : Causes et traitement',
      es: 'Neuropatía: Causas y tratamiento'
    },
    excerpt: {
      ar: 'تعرف على أسباب اعتلال الأعصاب وأحدث طرق العلاج...',
      en: 'Learn about the causes of neuropathy and the latest treatment methods...',
      fr: 'Découvrez les causes de la neuropathie et les dernières méthodes de traitement...',
      es: 'Conozca las causas de la neuropatía y los últimos métodos de tratamiento...'
    },
    content: {
      ar: `# الاعتلال العصبي

## الأسباب الرئيسية
- السكري (السبب الأكثر شيوعاً)
- نقص الفيتامينات (خاصة B12)
- أمراض المناعة الذاتية
- العلاج الكيميائي

## الأعراض
- خدر وتنميل
- آلام حارقة أو خارقة
- ضعف العضلات
- حساسية للمس

## العلاج
- SAM NERVE HEALTH
- التحكم في مستويات السكر
- مكملات فيتامين B`,
      en: `# Neuropathy

## Main Causes
- Diabetes (most common)
- Vitamin deficiencies (especially B12)
- Autoimmune diseases
- Chemotherapy

## Symptoms
- Numbness and tingling
- Burning or stabbing pain
- Muscle weakness
- Sensitivity to touch

## Treatment
- SAM NERVE HEALTH
- Blood sugar control
- Vitamin B supplements`,
      fr: `# Neuropathie`,
      es: `# Neuropatía`
    },
    category: { ar: 'صحة الأعصاب', en: 'Nerve Health', fr: 'Santé nerveuse', es: 'Salud nerviosa' },
    hashtags: ['Neuropathy', 'NervePain', 'DiabeticNeuropathy', 'NerveHealth', 'SAMNerve'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-11',
    readTime: 7,
    image: '🩺'
  },
  {
    id: 'nerve-4',
    productId: 6,
    slug: 'nerve-regeneration-nutrients',
    title: {
      ar: 'العناصر الغذائية التي تساعد على تجديد الأعصاب',
      en: 'Nutrients That Help Regenerate Nerves',
      fr: 'Nutriments qui aident à régénérer les nerfs',
      es: 'Nutrientes que ayudan a regenerar los nervios'
    },
    excerpt: {
      ar: 'اكتشف الفيتامينات والمعادن الضرورية لصحة وتجديد الأعصاب...',
      en: 'Discover the essential vitamins and minerals for nerve health and regeneration...',
      fr: 'Découvrez les vitamines et minéraux essentiels pour la santé nerveuse...',
      es: 'Descubra las vitaminas y minerales esenciales para la salud nerviosa...'
    },
    content: {
      ar: `# تجديد الأعصاب

## العناصر الأساسية
- **حمض الليبويك**: 500 مجم
- **فيتامين B1**: 100 مجم
- **فيتامين B6**: 100 مجم
- **فيتامين B12**: 5000 ميكروجرام
- **الكالسيوم**: 160 مجم

## كيف تعمل؟
هذه العناصر تعمل معاً ل:
- حماية غمد المايلين
- تحسين التواصل العصبي
- تجديد الخلايا العصبية

## منتج SAM NERVE HEALTH
تركيبة متكاملة لتجديد الأعصاب`,
      en: `# Nerve Regeneration

## Essential Nutrients
- **Alpha Lipoic Acid**: 500mg
- **Vitamin B1**: 100mg
- **Vitamin B6**: 100mg
- **Vitamin B12**: 5000mcg
- **Calcium**: 160mg

## How They Work?
These nutrients work together to:
- Protect the myelin sheath
- Improve neural communication
- Regenerate nerve cells

## SAM NERVE HEALTH Product
Complete formula for nerve regeneration`,
      fr: `# Régénération nerveuse`,
      es: `# Regeneración nerviosa`
    },
    category: { ar: 'صحة الأعصاب', en: 'Nerve Health', fr: 'Santé nerveuse', es: 'Salud nerviosa' },
    hashtags: ['NerveRegeneration', 'BVitamins', 'AlphaLipoicAcid', 'NerveHealth', 'SAMNerve'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-09',
    readTime: 6,
    image: '🧬'
  },

  // ==================== SAM Q-10 (id: 7) - 4 مقالات ====================
  {
    id: 'q10-1',
    productId: 7,
    slug: 'coq10-heart-health-energy',
    title: {
      ar: 'CoQ10: سر صحة القلب والطاقة',
      en: 'CoQ10: The Secret to Heart Health and Energy',
      fr: 'CoQ10 : Le secret de la santé cardiaque et de l\'énergie',
      es: 'CoQ10: El secreto de la salud cardíaca y la energía'
    },
    excerpt: {
      ar: 'تعرف على فوائد الإنزيم المساعد Q10 لصحة القلب وإنتاج الطاقة في الجسم...',
      en: 'Learn about the benefits of Coenzyme Q10 for heart health and energy production...',
      fr: 'Découvrez les bienfaits du coenzyme Q10...',
      es: 'Conozca los beneficios de la coenzima Q10...'
    },
    content: {
      ar: `# CoQ10

## فوائد CoQ10
- ينتج الطاقة في الخلايا
- يحمي القلب من الإجهاد التأكسدي
- يخفض ضغط الدم
- يحسن وظائف القلب

## النقص في CoQ10
يحدث مع تقدم العمر واستخدام أدوية الستاتين

## منتج SAM Q-10
400 مجم CoQ10 عالي الامتصاص`,
      en: `# CoQ10

## Benefits of CoQ10
- Produces energy in cells
- Protects heart from oxidative stress
- Lowers blood pressure
- Improves heart function

## CoQ10 Deficiency
Occurs with aging and statin use

## SAM Q-10 Product
400mg high-absorption CoQ10`,
      fr: `# CoQ10`,
      es: `# CoQ10`
    },
    category: { ar: 'صحة القلب', en: 'Heart Health', fr: 'Santé cardiaque', es: 'Salud cardíaca' },
    hashtags: ['CoQ10', 'HeartHealth', 'Energy', 'Antioxidant', 'StatinSupport'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-14',
    readTime: 5,
    image: '❤️'
  },
  {
    id: 'q10-2',
    productId: 7,
    slug: 'coq10-aging-antioxidant',
    title: {
      ar: 'CoQ10: مضاد الأكسدة القوي لمكافحة الشيخوخة',
      en: 'CoQ10: The Powerful Antioxidant for Anti-Aging',
      fr: 'CoQ10 : L\'antioxydant puissant pour lutter contre le vieillissement',
      es: 'CoQ10: El poderoso antioxidante para combatir el envejecimiento'
    },
    excerpt: {
      ar: 'اكتشف كيف يساعد CoQ10 في مكافحة علامات الشيخوخة وحماية الخلايا...',
      en: 'Discover how CoQ10 helps fight signs of aging and protect cells...',
      fr: 'Découvrez comment CoQ10 aide à lutter contre les signes du vieillissement...',
      es: 'Descubra cómo CoQ10 ayuda a combatir los signos del envejecimiento...'
    },
    content: {
      ar: `# CoQ10 لمكافحة الشيخوخة

## التأثيرات المضادة للشيخوخة
- يحمي الميتوكوندريا
- يقلل التجاعيد
- يحمي الخلايا من التلف التأكسدي
- يحسن وظائف الخلايا

## منتج SAM Q-10
400 مجم لنتائج فعالة`,
      en: `# CoQ10 for Anti-Aging

## Anti-Aging Effects
- Protects mitochondria
- Reduces wrinkles
- Protects cells from oxidative damage
- Improves cell function

## SAM Q-10 Product
400mg for effective results`,
      fr: `# CoQ10 pour lutter contre le vieillissement`,
      es: `# CoQ10 para combatir el envejecimiento`
    },
    category: { ar: 'مضادات أكسدة', en: 'Antioxidants', fr: 'Antioxydants', es: 'Antioxidantes' },
    hashtags: ['CoQ10', 'AntiAging', 'Antioxidant', 'Energy', 'CellularHealth'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-12',
    readTime: 4,
    image: '✨'
  },
  {
    id: 'q10-3',
    productId: 7,
    slug: 'coq10-statins-cholesterol',
    title: {
      ar: 'CoQ10 وأدوية الستاتين: ما العلاقة؟',
      en: 'CoQ10 and Statins: What is the Relationship?',
      fr: 'CoQ10 et statines : Quelle est la relation?',
      es: 'CoQ10 y estatinas: ¿Cuál es la relación?'
    },
    excerpt: {
      ar: 'لماذا يحتاج مرضى الستاتين إلى مكملات CoQ10؟...',
      en: 'Why do statin patients need CoQ10 supplements?...',
      fr: 'Pourquoi les patients sous statines ont-ils besoin de suppléments de CoQ10?...',
      es: '¿Por qué los pacientes con estatinas necesitan suplementos de CoQ10?...'
    },
    content: {
      ar: `# CoQ10 والستاتين

## المشكلة
أدوية الستاتين (لخفض الكوليسترول) تستنزف CoQ10 من الجسم

## الأعراض
- آلام العضلات
- التعب والإرهاق
- ضعف عام

## الحل
تناول مكملات CoQ10 مع أدوية الستاتين

## منتج SAM Q-10
400 مجم لتعويض النقص`,
      en: `# CoQ10 and Statins

## The Problem
Statin drugs (for cholesterol) deplete CoQ10 from the body

## Symptoms
- Muscle pain
- Fatigue and exhaustion
- General weakness

## The Solution
Take CoQ10 supplements with statin drugs

## SAM Q-10 Product
400mg to replenish deficiency`,
      fr: `# CoQ10 et statines`,
      es: `# CoQ10 y estatinas`
    },
    category: { ar: 'صحة القلب', en: 'Heart Health', fr: 'Santé cardiaque', es: 'Salud cardíaca' },
    hashtags: ['CoQ10', 'Statins', 'Cholesterol', 'HeartHealth', 'SAMQ10'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-10',
    readTime: 5,
    image: '💊'
  },
  {
    id: 'q10-4',
    productId: 7,
    slug: 'coq10-exercise-performance',
    title: {
      ar: 'CoQ10 وتحسين الأداء الرياضي',
      en: 'CoQ10 and Improving Athletic Performance',
      fr: 'CoQ10 et amélioration des performances sportives',
      es: 'CoQ10 y mejora del rendimiento deportivo'
    },
    excerpt: {
      ar: 'كيف يمكن لـ CoQ10 أن يعزز طاقتك ويحسن أدائك الرياضي...',
      en: 'How CoQ10 can boost your energy and improve your athletic performance...',
      fr: 'Comment CoQ10 peut augmenter votre énergie et améliorer vos performances...',
      es: 'Cómo CoQ10 puede aumentar su energía y mejorar su rendimiento...'
    },
    content: {
      ar: `# CoQ10 والأداء الرياضي

## الفوائد للرياضيين
- يزيد إنتاج الطاقة في الخلايا
- يقلل التعب بعد التمرين
- يحسن تعافي العضلات
- يزيد القدرة على التحمل

## الجرعة للرياضيين
300-400 مجم يومياً

## منتج SAM Q-10
400 مجم لدعم أدائك الرياضي`,
      en: `# CoQ10 and Athletic Performance

## Benefits for Athletes
- Increases cellular energy production
- Reduces post-exercise fatigue
- Improves muscle recovery
- Increases endurance

## Dosage for Athletes
300-400 mg daily

## SAM Q-10 Product
400mg to support your athletic performance`,
      fr: `# CoQ10 et performances sportives`,
      es: `# CoQ10 y rendimiento deportivo`
    },
    category: { ar: 'رياضة', en: 'Sports', fr: 'Sport', es: 'Deportes' },
    hashtags: ['CoQ10', 'AthleticPerformance', 'Energy', 'Endurance', 'SAMQ10'],
    author: { ar: 'أ. سارة محمود', en: 'Sara Mahmoud', fr: 'Sara Mahmoud', es: 'Sara Mahmoud' },
    date: '2024-03-08',
    readTime: 5,
    image: '🏃'
  },

  // ==================== SAM CALCIUM (id: 8) - 4 مقالات ====================
  {
    id: 'calcium-1',
    productId: 8,
    slug: 'calcium-bone-health',
    title: {
      ar: 'الكالسيوم: أساس صحة العظام والأسنان',
      en: 'Calcium: The Foundation of Bone and Teeth Health',
      fr: 'Calcium : La base de la santé des os et des dents',
      es: 'Calcio: La base de la salud de los huesos y los dientes'
    },
    excerpt: {
      ar: 'تعرف على أهمية الكالسيوم لصحة العظام والوقاية من هشاشة العظام...',
      en: 'Learn about the importance of calcium for bone health and prevention of osteoporosis...',
      fr: 'Découvrez l\'importance du calcium pour la santé des os...',
      es: 'Conozca la importancia del calcio para la salud de los huesos...'
    },
    content: {
      ar: `# الكالسيوم

## فوائد الكالسيوم
- بناء عظام وأسنان قوية
- الوقاية من هشاشة العظام
- دعم وظائف العضلات
- تنظيم ضربات القلب

## الاحتياج اليومي
1000-1200 مجم يومياً للبالغين

## منتج SAM CALCIUM
كالسيوم طبيعي + فيتامين D3`,
      en: `# Calcium

## Benefits of Calcium
- Builds strong bones and teeth
- Prevents osteoporosis
- Supports muscle function
- Regulates heartbeat

## Daily Requirement
1000-1200 mg daily for adults

## SAM CALCIUM Product
Natural calcium + Vitamin D3`,
      fr: `# Calcium`,
      es: `# Calcio`
    },
    category: { ar: 'معادن', en: 'Minerals', fr: 'Minéraux', es: 'Minerales' },
    hashtags: ['Calcium', 'BoneHealth', 'Osteoporosis', 'VitaminD3', 'OysterShell'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-13',
    readTime: 5,
    image: '🦷'
  },
  {
    id: 'calcium-2',
    productId: 8,
    slug: 'calcium-vitamin-d3-synergy',
    title: {
      ar: 'الكالسيوم وفيتامين D3: ثنائي مثالي',
      en: 'Calcium and Vitamin D3: The Perfect Duo',
      fr: 'Calcium et vitamine D3 : Le duo parfait',
      es: 'Calcio y vitamina D3: El dúo perfecto'
    },
    excerpt: {
      ar: 'لماذا يحتاج جسمك إلى فيتامين D3 لامتصاص الكالسيوم بشكل فعال...',
      en: 'Why your body needs Vitamin D3 to absorb calcium effectively...',
      fr: 'Pourquoi votre corps a besoin de vitamine D3 pour absorber le calcium...',
      es: 'Por qué su cuerpo necesita vitamina D3 para absorber el calcio...'
    },
    content: {
      ar: `# الكالسيوم وفيتامين D3

## العلاقة المتكاملة
فيتامين D3 ضروري لامتصاص الكالسيوم في الأمعاء

## بدون فيتامين D3
لا يمكن للجسم الاستفادة من الكالسيوم

## منتج SAM CALCIUM
كالسيوم + فيتامين D3 لامتصاص أمثل`,
      en: `# Calcium and Vitamin D3

## The Synergistic Relationship
Vitamin D3 is essential for calcium absorption

## Without Vitamin D3
The body cannot benefit from calcium

## SAM CALCIUM Product
Calcium + Vitamin D3 for optimal absorption`,
      fr: `# Calcium et vitamine D3`,
      es: `# Calcio y vitamina D3`
    },
    category: { ar: 'معادن وفيتامينات', en: 'Minerals & Vitamins', fr: 'Minéraux et vitamines', es: 'Minerales y vitaminas' },
    hashtags: ['Calcium', 'VitaminD3', 'BoneHealth', 'Absorption', 'Synergy'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-11',
    readTime: 4,
    image: '☀️'
  },
  {
    id: 'calcium-3',
    productId: 8,
    slug: 'calcium-for-children',
    title: {
      ar: 'الكالسيوم للأطفال: أهميته للنمو',
      en: 'Calcium for Children: Its Importance for Growth',
      fr: 'Calcium pour les enfants : Son importance pour la croissance',
      es: 'Calcio para niños: Su importancia para el crecimiento'
    },
    excerpt: {
      ar: 'لماذا يحتاج الأطفال إلى الكالسيوم لنمو عظام وأسنان قوية...',
      en: 'Why children need calcium for strong bone and teeth growth...',
      fr: 'Pourquoi les enfants ont besoin de calcium...',
      es: 'Por qué los niños necesitan calcio...'
    },
    content: {
      ar: `# الكالسيوم للأطفال

## أهمية الكالسيوم
- بناء عظام قوية
- نمو أسنان صحية
- دعم النمو العام

## الاحتياج اليومي للأطفال
- 1-3 سنوات: 700 مجم
- 4-8 سنوات: 1000 مجم
- 9-18 سنوات: 1300 مجم

## منتج SAM CALCIUM
آمن وفعال للأطفال`,
      en: `# Calcium for Children

## Importance of Calcium
- Builds strong bones
- Healthy teeth growth
- Supports overall growth

## Daily Requirement for Children
- 1-3 years: 700mg
- 4-8 years: 1000mg
- 9-18 years: 1300mg

## SAM CALCIUM Product
Safe and effective for children`,
      fr: `# Calcium pour les enfants`,
      es: `# Calcio para niños`
    },
    category: { ar: 'صحة الأطفال', en: 'Children Health', fr: 'Santé des enfants', es: 'Salud infantil' },
    hashtags: ['Calcium', 'ChildrenHealth', 'BoneGrowth', 'StrongTeeth', 'SAMCalcium'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-09',
    readTime: 5,
    image: '👧'
  },
  {
    id: 'calcium-4',
    productId: 8,
    slug: 'calcium-menopause-osteoporosis',
    title: {
      ar: 'الكالسيوم بعد انقطاع الطمث',
      en: 'Calcium After Menopause',
      fr: 'Calcium après la ménopause',
      es: 'Calcio después de la menopausia'
    },
    excerpt: {
      ar: 'أهمية الكالسيوم للنساء بعد انقطاع الطمث للوقاية من هشاشة العظام...',
      en: 'The importance of calcium for postmenopausal women to prevent osteoporosis...',
      fr: 'L\'importance du calcium pour les femmes ménopausées...',
      es: 'La importancia del calcio para las mujeres posmenopáusicas...'
    },
    content: {
      ar: `# الكالسيوم وهشاشة العظام

## لماذا يزداد الخطر بعد انقطاع الطمث؟
انخفاض هرمون الإستروجين يزيد من فقدان العظام

## الوقاية
- 1200 مجم كالسيوم يومياً
- فيتامين D3 لتحسين الامتصاص
- ممارسة التمارين

## منتج SAM CALCIUM
1200 مجم كالسيوم + فيتامين D3`,
      en: `# Calcium and Osteoporosis

## Why Does Risk Increase After Menopause?
Decreased estrogen increases bone loss

## Prevention
- 1200 mg calcium daily
- Vitamin D3 for absorption
- Exercise

## SAM CALCIUM Product
1200 mg calcium + Vitamin D3`,
      fr: `# Calcium et ostéoporose`,
      es: `# Calcio y osteoporosis`
    },
    category: { ar: 'صحة المرأة', en: 'Women Health', fr: 'Santé des femmes', es: 'Salud de la mujer' },
    hashtags: ['Calcium', 'Menopause', 'Osteoporosis', 'BoneHealth', 'SAMCalcium'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-07',
    readTime: 6,
    image: '👵'
  },

  // ==================== SAM COLLAGEN (id: 9) - 4 مقالات ====================
  {
    id: 'collagen-1',
    productId: 9,
    slug: 'collagen-benefits-skin-hair',
    title: {
      ar: 'فوائد الكولاجين للبشرة والشعر والأظافر',
      en: 'Collagen Benefits for Skin, Hair, and Nails',
      fr: 'Bienfaits du collagène pour la peau, les cheveux et les ongles',
      es: 'Beneficios del colágeno para la piel, el cabello y las uñas'
    },
    excerpt: {
      ar: 'اكتشف كيف يمكن للكولاجين البحري أن يحسن بشرتك ويقوي شعرك...',
      en: 'Discover how marine collagen can improve your skin and strengthen your hair...',
      fr: 'Découvrez comment le collagène marin peut améliorer votre peau...',
      es: 'Descubra cómo el colágeno marino puede mejorar su piel...'
    },
    content: {
      ar: `# الكولاجين

## للبشرة
- يزيد مرونة البشرة
- يقلل التجاعيد
- يحسن ترطيب البشرة

## للشعر
- يقوي بصيلات الشعر
- يقلل تساقط الشعر
- يزيد كثافة الشعر

## للأظافر
- يقوي الأظافر الهشة
- يسرع نمو الأظافر

## منتج SAM COLLAGEN
1000 مجم كولاجين بحري بامتصاص 98%`,
      en: `# Collagen

## For Skin
- Increases skin elasticity
- Reduces wrinkles
- Improves skin hydration

## For Hair
- Strengthens hair follicles
- Reduces hair loss
- Increases hair density

## For Nails
- Strengthens brittle nails
- Accelerates nail growth

## SAM COLLAGEN Product
1000mg marine collagen with 98% absorption`,
      fr: `# Collagène`,
      es: `# Colágeno`
    },
    category: { ar: 'الجمال والبشرة', en: 'Beauty & Skin', fr: 'Beauté et peau', es: 'Belleza y piel' },
    hashtags: ['Collagen', 'MarineCollagen', 'SkinHealth', 'HairNails', 'AntiAging'],
    author: { ar: 'أ. سارة محمود', en: 'Sara Mahmoud', fr: 'Sara Mahmoud', es: 'Sara Mahmoud' },
    date: '2024-03-12',
    readTime: 6,
    image: '✨'
  },
  {
    id: 'collagen-2',
    productId: 9,
    slug: 'marine-collagen-vs-bovine',
    title: {
      ar: 'الكولاجين البحري vs الكولاجين البقري',
      en: 'Marine Collagen vs Bovine Collagen',
      fr: 'Collagène marin vs collagène bovin',
      es: 'Colágeno marino vs colágeno bovino'
    },
    excerpt: {
      ar: 'مقارنة بين نوعي الكولاجين الأكثر شيوعاً...',
      en: 'A comparison between the two most common types of collagen...',
      fr: 'Une comparaison entre les deux types de collagène...',
      es: 'Una comparación entre los dos tipos más comunes de colágeno...'
    },
    content: {
      ar: `# الكولاجين البحري vs البقري

## الكولاجين البحري
- مصدره أسماك
- جزيئات أصغر
- امتصاص أعلى (98%)
- مناسب للنباتيين

## الكولاجين البقري
- مصدره الأبقار
- جزيئات أكبر
- امتصاص أقل

## الخلاصة
الكولاجين البحري من SAM هو الخيار الأمثل`,
      en: `# Marine vs Bovine Collagen

## Marine Collagen
- Source: Fish
- Smaller molecules
- Higher absorption (98%)
- Suitable for pescatarians

## Bovine Collagen
- Source: Cattle
- Larger molecules
- Lower absorption

## Conclusion
SAM Marine Collagen is the ideal choice`,
      fr: `# Collagène marin vs bovin`,
      es: `# Colágeno marino vs bovino`
    },
    category: { ar: 'مقارنات', en: 'Comparisons', fr: 'Comparaisons', es: 'Comparaciones' },
    hashtags: ['Collagen', 'MarineCollagen', 'BovineCollagen', 'Absorption', 'Bioavailability'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-10',
    readTime: 5,
    image: '🔬'
  },
  {
    id: 'collagen-3',
    productId: 9,
    slug: 'collagen-for-joints',
    title: {
      ar: 'الكولاجين لصحة المفاصل والغضاريف',
      en: 'Collagen for Joint and Cartilage Health',
      fr: 'Collagène pour la santé des articulations',
      es: 'Colágeno para la salud de las articulaciones'
    },
    excerpt: {
      ar: 'كيف يساعد الكولاجين في حماية المفاصل والغضاريف...',
      en: 'How collagen helps protect joints and cartilage...',
      fr: 'Comment le collagène aide à protéger les articulations...',
      es: 'Cómo el colágeno ayuda a proteger las articulaciones...'
    },
    content: {
      ar: `# الكولاجين للمفاصل

## كيف يعمل؟
- يبني الغضاريف
- يحمي المفاصل من التآكل
- يقلل آلام المفاصل

## الفوائد
- تحسين حركة المفاصل
- تقليل الالتهابات
- دعم الأنسجة الضامة

## منتج SAM COLLAGEN
لصحة مفاصلك`,
      en: `# Collagen for Joints

## How it Works?
- Builds cartilage
- Protects joints from wear
- Reduces joint pain

## Benefits
- Improves joint mobility
- Reduces inflammation
- Supports connective tissue

## SAM COLLAGEN Product
For your joint health`,
      fr: `# Collagène pour les articulations`,
      es: `# Colágeno para las articulaciones`
    },
    category: { ar: 'صحة المفاصل', en: 'Joint Health', fr: 'Santé des articulations', es: 'Salud de las articulaciones' },
    hashtags: ['Collagen', 'JointHealth', 'Cartilage', 'Arthritis', 'SAMCollagen'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-08',
    readTime: 5,
    image: '🦵'
  },
  {
    id: 'collagen-4',
    productId: 9,
    slug: 'collagen-vitamin-c-synergy',
    title: {
      ar: 'الكولاجين وفيتامين C: ثنائي مثالي',
      en: 'Collagen and Vitamin C: The Perfect Duo',
      fr: 'Collagène et vitamine C : Le duo parfait',
      es: 'Colágeno y vitamina C: El dúo perfecto'
    },
    excerpt: {
      ar: 'لماذا تحتاج إلى فيتامين C لامتصاص الكولاجين بشكل فعال؟...',
      en: 'Why you need Vitamin C to effectively absorb collagen?...',
      fr: 'Pourquoi avez-vous besoin de vitamine C pour absorber le collagène?...',
      es: '¿Por qué necesita vitamina C para absorber el colágeno?...'
    },
    content: {
      ar: `# الكولاجين وفيتامين C

## العلاقة
فيتامين C ضروري لإنتاج الكولاجين في الجسم

## الفوائد معاً
- امتصاص أفضل
- نتائج أسرع
- حماية مضادات الأكسدة

## منتج SAM COLLAGEN
يحتوي على فيتامين C و E`,
      en: `# Collagen and Vitamin C

## The Relationship
Vitamin C is essential for collagen production

## Benefits Together
- Better absorption
- Faster results
- Antioxidant protection

## SAM COLLAGEN Product
Contains Vitamin C and E`,
      fr: `# Collagène et vitamine C`,
      es: `# Colágeno y vitamina C`
    },
    category: { ar: 'الجمال والبشرة', en: 'Beauty & Skin', fr: 'Beauté et peau', es: 'Belleza y piel' },
    hashtags: ['Collagen', 'VitaminC', 'SkinHealth', 'Absorption', 'SAMCollagen'],
    author: { ar: 'د. سارة محمود', en: 'Dr. Sara Mahmoud', fr: 'Dr. Sara Mahmoud', es: 'Dra. Sara Mahmoud' },
    date: '2024-03-06',
    readTime: 4,
    image: '🍊'
  },

  // ==================== مقالات عامة (6 مقالات) ====================
  {
    id: 'general-1',
    productId: null,
    slug: 'supplements-guide-beginners',
    title: {
      ar: 'دليل المبتدئين للمكملات الغذائية',
      en: 'Beginners Guide to Dietary Supplements',
      fr: 'Guide du débutant pour les compléments alimentaires',
      es: 'Guía para principiantes de suplementos dietéticos'
    },
    excerpt: {
      ar: 'كل ما تحتاج معرفته عن المكملات الغذائية قبل أن تبدأ في استخدامها...',
      en: 'Everything you need to know about dietary supplements before you start using them...',
      fr: 'Tout ce que vous devez savoir sur les compléments alimentaires...',
      es: 'Todo lo que necesita saber sobre los suplementos dietéticos...'
    },
    content: {
      ar: `# دليل المكملات الغذائية

## ما هي المكملات الغذائية؟
منتجات تحتوي على فيتامينات، معادن، أعشاب، أو عناصر غذائية أخرى

## متى تحتاجها؟
- نقص غذائي مثبت
- حالات صحية معينة
- مراحل عمرية محددة
- نظام غذائي خاص

## نصائح مهمة
- استشر طبيبك قبل البدء
- اختر منتجات موثوقة
- اتبع الجرعات الموصى بها

## منتجات SAM
جميع منتجاتنا معتمدة من FDA وحلال`,
      en: `# Supplements Guide

## What are Dietary Supplements?
Products containing vitamins, minerals, herbs, or other nutrients

## When Do You Need Them?
- Proven nutritional deficiency
- Certain health conditions
- Specific life stages
- Special diet

## Important Tips
- Consult your doctor before starting
- Choose trusted products
- Follow recommended dosages

## SAM Products
All our products are FDA & Halal certified`,
      fr: `# Guide des compléments alimentaires`,
      es: `# Guía de suplementos dietéticos`
    },
    category: { ar: 'نصائح صحية', en: 'Health Tips', fr: 'Conseils santé', es: 'Consejos de salud' },
    hashtags: ['Supplements', 'HealthTips', 'Wellness', 'Nutrition', 'Samsan'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-05',
    readTime: 8,
    image: '📚'
  },
  {
    id: 'general-2',
    productId: null,
    slug: 'immune-boosting-nutrients',
    title: {
      ar: 'أهم العناصر الغذائية لتقوية المناعة',
      en: 'The Most Important Nutrients for Boosting Immunity',
      fr: 'Les nutriments les plus importants pour renforcer l\'immunité',
      es: 'Los nutrientes más importantes para fortalecer la inmunidad'
    },
    excerpt: {
      ar: 'تعرف على الفيتامينات والمعادن الأساسية لجهاز مناعي قوي...',
      en: 'Learn about the essential vitamins and minerals for a strong immune system...',
      fr: 'Découvrez les vitamines et minéraux essentiels...',
      es: 'Conozca las vitaminas y minerales esenciales...'
    },
    content: {
      ar: `# تقوية المناعة

## أهم العناصر
- فيتامين C: مضاد أكسدة قوي
- فيتامين D3: ينشط الخلايا المناعية
- الزنك: يدعم وظيفة المناعة
- السيلينيوم: مضاد أكسدة

## نصائح إضافية
- نوم كاف
- تقليل التوتر
- ممارسة الرياضة

## منتجات SAM
فيتامين D3، فيتامين C، الزنك`,
      en: `# Immune Boosting

## Most Important Nutrients
- Vitamin C: Powerful antioxidant
- Vitamin D3: Activates immune cells
- Zinc: Supports immune function
- Selenium: Antioxidant

## Additional Tips
- Adequate sleep
- Reduce stress
- Exercise

## SAM Products
Vitamin D3, Vitamin C, Zinc`,
      fr: `# Renforcement immunitaire`,
      es: `# Fortalecimiento inmunológico`
    },
    category: { ar: 'مناعة', en: 'Immunity', fr: 'Immunité', es: 'Inmunidad' },
    hashtags: ['Immunity', 'Vitamins', 'Minerals', 'ImmuneSystem', 'Samsan'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-03-03',
    readTime: 6,
    image: '🦠'
  },
  {
    id: 'general-3',
    productId: null,
    slug: 'winter-health-tips',
    title: {
      ar: 'نصائح للحفاظ على صحتك في فصل الشتاء',
      en: 'Tips for Maintaining Your Health in Winter',
      fr: 'Conseils pour maintenir votre santé en hiver',
      es: 'Consejos para mantener su salud en invierno'
    },
    excerpt: {
      ar: 'كيف تحمي نفسك من أمراض الشتاء وتحافظ على صحتك...',
      en: 'How to protect yourself from winter diseases and maintain your health...',
      fr: 'Comment vous protéger des maladies hivernales...',
      es: 'Cómo protegerse de las enfermedades invernales...'
    },
    content: {
      ar: `# صحة الشتاء

## نصائح مهمة
- فيتامين D3: تعويض نقص الشمس
- فيتامين C: يقوي المناعة
- الزنك: يقي من نزلات البرد
- الترطيب: شرب الماء الدافئ

## الوقاية
- غسل اليدين باستمرار
- تهوية المنزل
- ممارسة الرياضة

## منتجات SAM
فيتامين D3، فيتامين C، الزنك`,
      en: `# Winter Health

## Important Tips
- Vitamin D3: Compensate for lack of sun
- Vitamin C: Strengthens immunity
- Zinc: Prevents colds
- Hydration: Drink warm water

## Prevention
- Wash hands frequently
- Ventilate the house
- Exercise

## SAM Products
Vitamin D3, Vitamin C, Zinc`,
      fr: `# Santé hivernale`,
      es: `# Salud invernal`
    },
    category: { ar: 'نصائح صحية', en: 'Health Tips', fr: 'Conseils santé', es: 'Consejos de salud' },
    hashtags: ['WinterHealth', 'Immunity', 'ColdPrevention', 'Wellness', 'Samsan'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-03-01',
    readTime: 5,
    image: '❄️'
  },
  {
    id: 'general-4',
    productId: null,
    slug: 'healthy-eating-habits',
    title: {
      ar: 'عادات الأكل الصحي التي تغير حياتك',
      en: 'Healthy Eating Habits That Change Your Life',
      fr: 'Habitudes alimentaires saines qui changent votre vie',
      es: 'Hábitos alimenticios saludables que cambian su vida'
    },
    excerpt: {
      ar: 'تبني عادات غذائية صحية يمكن أن يحسن صحتك بشكل كبير...',
      en: 'Adopting healthy eating habits can significantly improve your health...',
      fr: 'Adopter de saines habitudes alimentaires...',
      es: 'Adoptar hábitos alimenticios saludables...'
    },
    content: {
      ar: `# الأكل الصحي

## عادات أساسية
- تناول وجبة فطور صحية
- شرب كاف من الماء
- تناول الخضروات والفواكه
- تقليل السكريات

## مكملات SAM
لدعم نظامك الغذائي الصحي`,
      en: `# Healthy Eating

## Basic Habits
- Eat a healthy breakfast
- Drink enough water
- Eat vegetables and fruits
- Reduce sugars

## SAM Supplements
To support your healthy diet`,
      fr: `# Alimentation saine`,
      es: `# Alimentación saludable`
    },
    category: { ar: 'تغذية', en: 'Nutrition', fr: 'Nutrition', es: 'Nutrición' },
    hashtags: ['HealthyEating', 'Nutrition', 'Wellness', 'Diet', 'Samsan'],
    author: { ar: 'أ. سارة محمود', en: 'Sara Mahmoud', fr: 'Sara Mahmoud', es: 'Sara Mahmoud' },
    date: '2024-02-27',
    readTime: 7,
    image: '🥗'
  },
  {
    id: 'general-5',
    productId: null,
    slug: 'sleep-health-importance',
    title: {
      ar: 'أهمية النوم الجيد لصحتك العامة',
      en: 'The Importance of Good Sleep for Your Overall Health',
      fr: 'L\'importance d\'un bon sommeil pour votre santé',
      es: 'La importancia del buen sueño para su salud'
    },
    excerpt: {
      ar: 'كيف يؤثر النوم على صحتك الجسدية والنفسية...',
      en: 'How sleep affects your physical and mental health...',
      fr: 'Comment le sommeil affecte votre santé...',
      es: 'Cómo el sueño afecta su salud...'
    },
    content: {
      ar: `# صحة النوم

## فوائد النوم الجيد
- تقوية المناعة
- تحسين الذاكرة
- صحة القلب
- التحكم بالوزن

## نصائح لنوم أفضل
- روتين ثابت
- تجنب الكافيين مساءً
- غرفة مظلمة وهادئة

## مكملات SAM
لصحة متكاملة`,
      en: `# Sleep Health

## Benefits of Good Sleep
- Strengthens immunity
- Improves memory
- Heart health
- Weight control

## Tips for Better Sleep
- Consistent routine
- Avoid caffeine in evening
- Dark and quiet room

## SAM Supplements
For complete health`,
      fr: `# Santé du sommeil`,
      es: `# Salud del sueño`
    },
    category: { ar: 'صحة عامة', en: 'General Health', fr: 'Santé générale', es: 'Salud general' },
    hashtags: ['SleepHealth', 'Wellness', 'MentalHealth', 'Recovery', 'Samsan'],
    author: { ar: 'د. نورهان خالد', en: 'Dr. Norhan Khalid', fr: 'Dr. Norhan Khalid', es: 'Dra. Norhan Khalid' },
    date: '2024-02-25',
    readTime: 6,
    image: '😴'
  },
  {
    id: 'general-6',
    productId: null,
    slug: 'hydration-benefits',
    title: {
      ar: 'فوائد شرب الماء لصحتك',
      en: 'Benefits of Drinking Water for Your Health',
      fr: 'Bienfaits de boire de l\'eau pour votre santé',
      es: 'Beneficios de beber agua para su salud'
    },
    excerpt: {
      ar: 'اكتشف لماذا يعتبر الماء ضرورياً لجميع وظائف الجسم...',
      en: 'Discover why water is essential for all body functions...',
      fr: 'Découvrez pourquoi l\'eau est essentielle...',
      es: 'Descubra por qué el agua es esencial...'
    },
    content: {
      ar: `# فوائد الماء

## لماذا الماء مهم؟
- ينظم درجة حرارة الجسم
- يزيل السموم
- يرطب المفاصل
- يحسن الهضم

## الكمية الموصى بها
8 أكواب يومياً (2 لتر)

## نصائح
- احمل زجاجة ماء معك
- أضف شرائح الليمون للنكهة

## منتجات SAM
لدعم صحتك العامة`,
      en: `# Benefits of Water

## Why is Water Important?
- Regulates body temperature
- Removes toxins
- Lubricates joints
- Improves digestion

## Recommended Amount
8 glasses daily (2 liters)

## Tips
- Carry a water bottle with you
- Add lemon slices for flavor

## SAM Products
To support your overall health`,
      fr: `# Bienfaits de l\'eau`,
      es: `# Beneficios del agua`
    },
    category: { ar: 'صحة عامة', en: 'General Health', fr: 'Santé générale', es: 'Salud general' },
    hashtags: ['Hydration', 'Water', 'Health', 'Wellness', 'Samsan'],
    author: { ar: 'د. أحمد محمد', en: 'Dr. Ahmed Mohamed', fr: 'Dr. Ahmed Mohamed', es: 'Dr. Ahmed Mohamed' },
    date: '2024-02-23',
    readTime: 4,
    image: '💧'
  }
];

// ==================== دوال مساعدة محدثة ====================

// الحصول على جميع المقالات (بدون ترتيب)
export const getAllArticles = () => {
  return articles;
};

// الحصول على أحدث المقالات - مع عرض جميع المقالات (لا حد أقصى)
export const getLatestArticles = (limit = null) => {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  // إذا كان limit محدداً، أرجع العدد المطلوب، وإلا أرجع الكل
  return limit ? sorted.slice(0, limit) : sorted;
};

// الحصول على مقال حسب الـ slug
export const getArticleBySlug = (slug) => {
  return articles.find(a => a.slug === slug);
};

// الحصول على مقالات حسب معرف المنتج
export const getArticlesByProductId = (productId) => {
  return articles.filter(a => a.productId === productId);
};

// الحصول على مقالات حسب الهاشتاج
export const getArticlesByHashtag = (hashtag) => {
  return articles.filter(a => 
    a.hashtags.some(tag => tag.toLowerCase() === hashtag.toLowerCase())
  );
};

// الحصول على مقالات مقترحة (من نفس المنتج أو عامة)
export const getSuggestedArticles = (currentSlug, limit = 4) => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];
  
  // مقالات من نفس المنتج
  const sameProductArticles = articles.filter(a => 
    a.slug !== currentSlug && a.productId === currentArticle.productId
  );
  
  if (sameProductArticles.length >= limit) {
    return sameProductArticles.slice(0, limit);
  }
  
  // إذا لم يكن كافياً، أضف مقالات عامة
  const generalArticles = articles.filter(a => 
    a.slug !== currentSlug && a.productId === null
  );
  
  const needed = limit - sameProductArticles.length;
  return [...sameProductArticles, ...generalArticles.slice(0, needed)];
};

// البحث في المقالات
export const searchArticles = (query, lang = 'en') => {
  const searchLower = query.toLowerCase();
  return articles.filter(article => {
    const title = article.title[lang].toLowerCase();
    const excerpt = article.excerpt[lang].toLowerCase();
    return title.includes(searchLower) || excerpt.includes(searchLower);
  });
};

// الحصول على مقالات حسب التصنيف
export const getArticlesByCategory = (category, lang = 'en') => {
  return articles.filter(a => a.category[lang].toLowerCase() === category.toLowerCase());
};

// تصدير جميع المقالات
export const articlesList = articles;

// عدد المقالات
export const articlesCount = articles.length;