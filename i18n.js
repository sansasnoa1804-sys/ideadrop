const TRANSLATIONS = {
  en: {
    howItWorks: 'How it works', features: 'Features', pricing: 'Pricing',
    login: 'Login', getStarted: 'Get started free', history: '📋 History', logout: 'Logout',
    badge: '✦ AI-powered idea validation',
    heroTitle: 'Turn your idea into a', heroTitleSpan: 'strategic plan', heroTitleEnd: ' in seconds',
    heroSub: 'Describe your business idea and get an instant AI-generated strategic brief with market analysis, customer personas, revenue models, and actionable launch steps.',
    tagAnalysis: '⚡ AI-Powered Analysis', tagInsights: '🎯 Market Insights', tagStrategy: '🚀 Launch Strategy',
    socialProof: 'Joined by <strong>2,400+</strong> entrepreneurs',
    testimonial: '"I validated my SaaS idea in 2 minutes — saved me weeks of research." — <em>Marc R., founder</em>',
    placeholder: 'Describe your business idea in a few sentences...',
    analyzeBtn: 'Analyze my idea →', tryExample: '💡 Try an example:',
    example1: 'Eco-friendly subscription box', example2: 'AI tutor app', example3: 'Freelance chef platform',
    analysesRemaining: 'free analyse(s) remaining this month', premiumUnlimited: '✓ Premium — unlimited analyses',
    howLabel: 'HOW IT WORKS', howTitle: 'Three steps to clarity', howSub: 'From raw idea to actionable strategy — in under 60 seconds.',
    step1Title: 'Describe your idea', step1Text: 'Write a few sentences about your business concept. No fancy pitch deck needed.',
    step2Title: 'AI analyzes it', step2Text: 'Our AI scans market data and generates a full strategic brief in seconds.',
    step3Title: 'Launch with confidence', step3Text: 'Get scores, personas, revenue models, risks and 5 concrete first steps.',
    sampleLabel: 'SAMPLE OUTPUT', sampleTitle: "See what you'll get", sampleSub: 'A real example of a generated strategic brief — complete, visual, and actionable.',
    sampleNote: 'This is a sample — <strong>your real analysis</strong> is personalized to your exact idea',
    featuresLabel: 'FEATURES', featuresTitle: 'Everything you need to validate', featuresSub: 'A complete strategic brief, not just a SWOT matrix.',
    pricingLabel: 'PRICING', pricingTitle: 'Simple, transparent pricing', pricingSub: "Start free. Upgrade when you're ready.",
    free: 'Free', premium: 'Premium', perMonth: '/mo', getStartedFree: 'Get started free', upgradePremium: 'Upgrade to Premium',
    faqLabel: 'FAQ', faqTitle: 'Common questions',
    faq1q: 'How accurate is the AI analysis?', faq1a: 'Our AI uses one of the most advanced language models available. It draws on extensive knowledge of markets and startup patterns. Always validate with real users too!',
    faq2q: "What's the difference between Free and Premium?", faq2a: 'Free gives you 2 analyses per month. Premium unlocks unlimited analyses, PDF export, side-by-side comparison, and priority processing.',
    faq3q: 'Can I analyze the same idea multiple times?', faq3a: 'Yes! Each analysis is independent, so you can refine your idea and re-analyze to get updated insights.',
    faq4q: 'Is my idea kept private and confidential?', faq4a: 'Absolutely. Your ideas are stored securely and never shared with other users.',
    faq5q: 'Can I use IdeaDrop for existing businesses?', faq5a: 'Both! Validate a new concept or get a fresh strategic perspective on an existing business.',
    ctaTitle: 'Ready to validate your idea?', ctaSub: 'Join 2,400+ entrepreneurs who already use IdeaDrop to launch smarter.', ctaBtn: 'Start for free →',
    modalTitle: "You've used all your free analyses", modalSub: 'Upgrade to Premium to get unlimited analyses and unlock all features.',
    upgradeBtn: 'Upgrade to Premium — $9/mo', maybeLater: 'Maybe later',
    yourIdea: 'Your idea', newAnalysis: '← New analysis', shareScore: '🔗 Share score',
    analyzing: 'Analyzing your idea...', analyzingSub: 'Our AI is scanning market data, competitor landscapes, and business models.',
    viabilityBreakdown: 'Viability Score Breakdown', marketPotential: 'Market Potential', feasibility: 'Feasibility', originality: 'Originality', profitability: 'Profitability',
    targetMarket: 'Target Market', customerPersonas: 'Customer Personas', revenueModel: 'Revenue Model',
    keyStrengths: 'Key Strengths', risks: 'Risks & Watch-outs', competitors: 'Potential Competitors', launchSteps: '5 Steps to Launch',
    exportPDF: '📄 Export as PDF', analyzeAnother: 'Analyze another idea →',
    loginTitle: 'Welcome back', loginSub: 'Sign in to your IdeaDrop account',
    signupTitle: 'Create your account', signupSub: 'Start validating your ideas for free',
    fullName: 'Full name', email: 'Email', password: 'Password',
    signinBtn: 'Sign in →', createBtn: 'Create account →',
    noAccount: 'No account?', signUpFree: 'Sign up free', alreadyAccount: 'Already have an account?', signIn: 'Sign in',
    historyTitle: 'Your analyses', historySub: 'All your past idea validations in one place.',
    emptyTitle: 'No analyses yet', emptyText: 'Start by analyzing your first business idea!',
    emptyBtn: 'Analyze my first idea →', newAnalysisBtn: '+ New analysis',
  },
  fr: {
    howItWorks: 'Comment ça marche', features: 'Fonctionnalités', pricing: 'Tarifs',
    login: 'Connexion', getStarted: 'Commencer gratuitement', history: '📋 Historique', logout: 'Déconnexion',
    badge: '✦ Validation d\'idées par IA',
    heroTitle: 'Transformez votre idée en', heroTitleSpan: 'plan stratégique', heroTitleEnd: ' en quelques secondes',
    heroSub: 'Décrivez votre idée business et obtenez instantanément un brief stratégique avec analyse de marché, personas, modèles de revenus et étapes concrètes.',
    tagAnalysis: '⚡ Analyse IA', tagInsights: '🎯 Insights Marché', tagStrategy: '🚀 Stratégie de Lancement',
    socialProof: 'Rejoint par <strong>2 400+</strong> entrepreneurs',
    testimonial: '"J\'ai validé mon idée SaaS en 2 minutes — ça m\'a économisé des semaines de recherche." — <em>Marc R., fondateur</em>',
    placeholder: 'Décrivez votre idée business en quelques phrases...',
    analyzeBtn: 'Analyser mon idée →', tryExample: '💡 Essayez un exemple :',
    example1: 'Box éco-responsable', example2: 'App tuteur IA', example3: 'Plateforme chefs freelance',
    analysesRemaining: 'analyse(s) gratuite(s) restante(s) ce mois', premiumUnlimited: '✓ Premium — analyses illimitées',
    howLabel: 'COMMENT ÇA MARCHE', howTitle: 'Trois étapes vers la clarté', howSub: 'De l\'idée brute à la stratégie actionnable — en moins de 60 secondes.',
    step1Title: 'Décrivez votre idée', step1Text: 'Écrivez quelques phrases sur votre concept. Pas besoin de pitch deck.',
    step2Title: 'L\'IA l\'analyse', step2Text: 'Notre IA scanne les données de marché et génère un brief complet en quelques secondes.',
    step3Title: 'Lancez avec confiance', step3Text: 'Obtenez scores, personas, modèles de revenus, risques et 5 premières étapes concrètes.',
    sampleLabel: 'EXEMPLE DE RÉSULTAT', sampleTitle: 'Voyez ce que vous obtiendrez', sampleSub: 'Un vrai exemple de brief stratégique — complet, visuel et actionnable.',
    sampleNote: 'Ceci est un exemple — <strong>votre vraie analyse</strong> est personnalisée pour votre idée exacte',
    featuresLabel: 'FONCTIONNALITÉS', featuresTitle: 'Tout ce dont vous avez besoin', featuresSub: 'Un brief stratégique complet, pas juste une matrice SWOT.',
    pricingLabel: 'TARIFS', pricingTitle: 'Des tarifs simples et transparents', pricingSub: 'Commencez gratuitement. Passez Premium quand vous êtes prêt.',
    free: 'Gratuit', premium: 'Premium', perMonth: '/mois', getStartedFree: 'Commencer gratuitement', upgradePremium: 'Passer Premium',
    faqLabel: 'FAQ', faqTitle: 'Questions fréquentes',
    faq1q: 'Quelle est la précision de l\'analyse IA ?', faq1a: 'Notre IA utilise un des modèles de langage les plus avancés. Elle s\'appuie sur une connaissance approfondie des marchés et des startups. Validez toujours avec de vrais utilisateurs !',
    faq2q: 'Quelle est la différence entre Gratuit et Premium ?', faq2a: 'Le gratuit donne 2 analyses par mois. Le Premium débloque les analyses illimitées, l\'export PDF, la comparaison et le traitement prioritaire.',
    faq3q: 'Puis-je analyser la même idée plusieurs fois ?', faq3a: 'Oui ! Chaque analyse est indépendante, vous pouvez affiner et réanalyser pour obtenir des insights mis à jour.',
    faq4q: 'Mon idée est-elle gardée confidentielle ?', faq4a: 'Absolument. Vos idées sont stockées de manière sécurisée et jamais partagées avec d\'autres utilisateurs.',
    faq5q: 'Puis-je utiliser IdeaDrop pour des entreprises existantes ?', faq5a: 'Les deux ! Validez un nouveau concept ou obtenez une nouvelle perspective stratégique sur une entreprise existante.',
    ctaTitle: 'Prêt à valider votre idée ?', ctaSub: 'Rejoignez 2 400+ entrepreneurs qui utilisent déjà IdeaDrop.', ctaBtn: 'Commencer gratuitement →',
    modalTitle: 'Vous avez utilisé toutes vos analyses gratuites', modalSub: 'Passez Premium pour des analyses illimitées.',
    upgradeBtn: 'Passer Premium — 9€/mois', maybeLater: 'Peut-être plus tard',
    yourIdea: 'Votre idée', newAnalysis: '← Nouvelle analyse', shareScore: '🔗 Partager le score',
    analyzing: 'Analyse en cours...', analyzingSub: 'Notre IA scanne les données de marché et les modèles business.',
    viabilityBreakdown: 'Détail du Score de Viabilité', marketPotential: 'Potentiel de Marché', feasibility: 'Faisabilité', originality: 'Originalité', profitability: 'Rentabilité',
    targetMarket: 'Marché Cible', customerPersonas: 'Personas Clients', revenueModel: 'Modèle de Revenus',
    keyStrengths: 'Points Forts', risks: 'Risques & Vigilances', competitors: 'Concurrents Potentiels', launchSteps: '5 Étapes pour Lancer',
    exportPDF: '📄 Exporter en PDF', analyzeAnother: 'Analyser une autre idée →',
    loginTitle: 'Bon retour !', loginSub: 'Connectez-vous à votre compte IdeaDrop',
    signupTitle: 'Créez votre compte', signupSub: 'Commencez à valider vos idées gratuitement',
    fullName: 'Nom complet', email: 'Email', password: 'Mot de passe',
    signinBtn: 'Se connecter →', createBtn: 'Créer mon compte →',
    noAccount: 'Pas de compte ?', signUpFree: "S'inscrire gratuitement", alreadyAccount: 'Déjà un compte ?', signIn: 'Se connecter',
    historyTitle: 'Vos analyses', historySub: 'Toutes vos validations passées au même endroit.',
    emptyTitle: 'Pas encore d\'analyses', emptyText: 'Commencez par analyser votre première idée business !',
    emptyBtn: 'Analyser ma première idée →', newAnalysisBtn: '+ Nouvelle analyse',
  }
};

// =====================
// CORE
// =====================
var currentLang = localStorage.getItem('ideadrop_lang') || 'en';
var currentTheme = localStorage.getItem('ideadrop_theme') || 'light';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ideadrop_lang', lang);
  applyTranslations();
  refreshLangButtons();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
}

function refreshLangButtons() {
  var btnEN = document.getElementById('btnEN');
  var btnFR = document.getElementById('btnFR');
  if (btnEN) {
    btnEN.style.color = currentLang === 'en' ? 'var(--primary)' : '';
    btnEN.style.fontWeight = currentLang === 'en' ? '800' : '500';
  }
  if (btnFR) {
    btnFR.style.color = currentLang === 'fr' ? 'var(--primary)' : '';
    btnFR.style.fontWeight = currentLang === 'fr' ? '800' : '500';
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('ideadrop_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  var btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Run immediately — no waiting for DOMContentLoaded
applyTheme(currentTheme);

// Run translations once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
    refreshLangButtons();
  });
} else {
  applyTranslations();
  refreshLangButtons();
}
