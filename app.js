// ============================================================
// IDEADROP — Single JS file, no inline onclick dependencies
// ============================================================

// =====================
// TRANSLATIONS
// =====================
const LANG = {
  en: {
    howItWorks:'How it works', features:'Features', pricing:'Pricing',
    login:'Login', getStarted:'Get started free', history:'📋 History', logout:'Logout',
    badge:'✦ AI-powered idea validation',
    heroTitle:'Turn your idea into a', heroTitleSpan:'strategic plan', heroTitleEnd:' in seconds',
    heroSub:'Describe your business idea and get an instant AI-generated strategic brief with market analysis, customer personas, revenue models, and actionable launch steps.',
    tagAnalysis:'⚡ AI-Powered Analysis', tagInsights:'🎯 Market Insights', tagStrategy:'🚀 Launch Strategy',
    socialProof:'Joined by <strong>2,400+</strong> entrepreneurs',
    testimonial:'"I validated my SaaS idea in 2 minutes — saved me weeks of research." — <em>Marc R., founder</em>',
    placeholder:'Describe your business idea in a few sentences...',
    analyzeBtn:'Analyze my idea →', tryExample:'💡 Try an example:',
    example1:'Eco-friendly subscription box', example2:'AI tutor app', example3:'Freelance chef platform',
    analysesRemaining:'free analyse(s) remaining this month', premiumUnlimited:'✓ Premium — unlimited analyses',
    howLabel:'HOW IT WORKS', howTitle:'Three steps to clarity', howSub:'From raw idea to actionable strategy — in under 60 seconds.',
    step1Title:'Describe your idea', step1Text:'Write a few sentences about your business concept. No fancy pitch deck needed.',
    step2Title:'AI analyzes it', step2Text:'Our AI scans market data and generates a full strategic brief in seconds.',
    step3Title:'Launch with confidence', step3Text:'Get scores, personas, revenue models, risks and 5 concrete first steps.',
    sampleLabel:'SAMPLE OUTPUT', sampleTitle:"See what you'll get", sampleSub:'A real example of a generated strategic brief — complete, visual, and actionable.',
    sampleNote:'This is a sample — <strong>your real analysis</strong> is personalized to your exact idea',
    featuresLabel:'FEATURES', featuresTitle:'Everything you need to validate', featuresSub:'A complete strategic brief, not just a SWOT matrix.',
    pricingLabel:'PRICING', pricingTitle:'Simple, transparent pricing', pricingSub:"Start free. Upgrade when you're ready.",
    free:'Free', premium:'Premium', perMonth:'/mo', getStartedFree:'Get started free', upgradePremium:'Upgrade to Premium',
    faqLabel:'FAQ', faqTitle:'Common questions',
    faq1q:'How accurate is the AI analysis?', faq1a:'Our AI uses one of the most advanced language models available. It draws on extensive knowledge of markets and startup patterns. Always validate with real users too!',
    faq2q:"What's the difference between Free and Premium?", faq2a:'Free gives you 2 analyses per month. Premium unlocks unlimited analyses, PDF export, side-by-side comparison, and priority processing.',
    faq3q:'Can I analyze the same idea multiple times?', faq3a:'Yes! Each analysis is independent, so you can refine and re-analyze to get updated insights.',
    faq4q:'Is my idea kept private and confidential?', faq4a:'Absolutely. Your ideas are stored securely and never shared with other users.',
    faq5q:'Can I use IdeaDrop for existing businesses?', faq5a:'Both! Validate a new concept or get a fresh strategic perspective on an existing business.',
    ctaTitle:'Ready to validate your idea?', ctaSub:'Join 2,400+ entrepreneurs who already use IdeaDrop to launch smarter.', ctaBtn:'Start for free →',
    modalTitle:"You've used all your free analyses", modalSub:'Upgrade to Premium to get unlimited analyses and unlock all features.',
    upgradeBtn:'Upgrade to Premium — $9/mo', maybeLater:'Maybe later',
  },
  fr: {
    howItWorks:'Comment ça marche', features:'Fonctionnalités', pricing:'Tarifs',
    login:'Connexion', getStarted:'Commencer gratuitement', history:'📋 Historique', logout:'Déconnexion',
    badge:'✦ Validation d\'idées par IA',
    heroTitle:'Transformez votre idée en', heroTitleSpan:'plan stratégique', heroTitleEnd:' en quelques secondes',
    heroSub:'Décrivez votre idée business et obtenez instantanément un brief stratégique avec analyse de marché, personas, modèles de revenus et étapes concrètes.',
    tagAnalysis:'⚡ Analyse IA', tagInsights:'🎯 Insights Marché', tagStrategy:'🚀 Stratégie de Lancement',
    socialProof:'Rejoint par <strong>2 400+</strong> entrepreneurs',
    testimonial:'"J\'ai validé mon idée SaaS en 2 minutes — économisé des semaines de recherche." — <em>Marc R., fondateur</em>',
    placeholder:'Décrivez votre idée business en quelques phrases...',
    analyzeBtn:'Analyser mon idée →', tryExample:'💡 Essayez un exemple :',
    example1:'Box éco-responsable', example2:'App tuteur IA', example3:'Plateforme chefs freelance',
    analysesRemaining:'analyse(s) gratuite(s) restante(s) ce mois', premiumUnlimited:'✓ Premium — analyses illimitées',
    howLabel:'COMMENT ÇA MARCHE', howTitle:'Trois étapes vers la clarté', howSub:'De l\'idée brute à la stratégie actionnable — en moins de 60 secondes.',
    step1Title:'Décrivez votre idée', step1Text:'Écrivez quelques phrases sur votre concept. Pas besoin de pitch deck.',
    step2Title:'L\'IA l\'analyse', step2Text:'Notre IA scanne les données de marché et génère un brief complet en quelques secondes.',
    step3Title:'Lancez avec confiance', step3Text:'Obtenez scores, personas, modèles de revenus, risques et 5 premières étapes concrètes.',
    sampleLabel:'EXEMPLE DE RÉSULTAT', sampleTitle:'Voyez ce que vous obtiendrez', sampleSub:'Un vrai exemple de brief stratégique — complet, visuel et actionnable.',
    sampleNote:'Ceci est un exemple — <strong>votre vraie analyse</strong> est personnalisée pour votre idée exacte',
    featuresLabel:'FONCTIONNALITÉS', featuresTitle:'Tout ce dont vous avez besoin', featuresSub:'Un brief stratégique complet, pas juste une matrice SWOT.',
    pricingLabel:'TARIFS', pricingTitle:'Des tarifs simples et transparents', pricingSub:'Commencez gratuitement. Passez Premium quand vous êtes prêt.',
    free:'Gratuit', premium:'Premium', perMonth:'/mois', getStartedFree:'Commencer gratuitement', upgradePremium:'Passer Premium',
    faqLabel:'FAQ', faqTitle:'Questions fréquentes',
    faq1q:'Quelle est la précision de l\'analyse IA ?', faq1a:'Notre IA utilise un des modèles de langage les plus avancés. Elle s\'appuie sur une connaissance approfondie des marchés et des startups. Validez toujours avec de vrais utilisateurs !',
    faq2q:'Quelle est la différence entre Gratuit et Premium ?', faq2a:'Le gratuit donne 2 analyses par mois. Le Premium débloque les analyses illimitées, l\'export PDF, la comparaison et le traitement prioritaire.',
    faq3q:'Puis-je analyser la même idée plusieurs fois ?', faq3a:'Oui ! Chaque analyse est indépendante, vous pouvez affiner et réanalyser pour des insights mis à jour.',
    faq4q:'Mon idée est-elle gardée confidentielle ?', faq4a:'Absolument. Vos idées sont stockées de manière sécurisée et jamais partagées avec d\'autres utilisateurs.',
    faq5q:'Puis-je utiliser IdeaDrop pour des entreprises existantes ?', faq5a:'Les deux ! Validez un nouveau concept ou obtenez une nouvelle perspective stratégique sur une entreprise existante.',
    ctaTitle:'Prêt à valider votre idée ?', ctaSub:'Rejoignez 2 400+ entrepreneurs qui utilisent déjà IdeaDrop.', ctaBtn:'Commencer gratuitement →',
    modalTitle:'Vous avez utilisé toutes vos analyses gratuites', modalSub:'Passez Premium pour des analyses illimitées.',
    upgradeBtn:'Passer Premium — 9€/mois', maybeLater:'Peut-être plus tard',
  }
};

// =====================
// STATE
// =====================
let currentLang = localStorage.getItem('ideadrop_lang') || 'en';
let currentTheme = localStorage.getItem('ideadrop_theme') || 'light';

// =====================
// TRANSLATIONS
// =====================
function t(key) {
  return (LANG[currentLang] && LANG[currentLang][key]) || (LANG.en && LANG.en[key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ideadrop_lang', lang);
  applyTranslations();
  updateLangHighlight();
}

function updateLangHighlight() {
  ['EN', 'FR'].forEach(code => {
    const btn = document.getElementById('btn' + code);
    if (!btn) return;
    btn.style.color = currentLang === code.toLowerCase() ? 'var(--primary)' : '';
    btn.style.fontWeight = currentLang === code.toLowerCase() ? '800' : '500';
  });
}

// =====================
// THEME
// =====================
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('ideadrop_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// =====================
// NAVBAR AUTH SLOT
// =====================
async function buildAuthSlot() {
  const slot = document.getElementById('authSlot');
  if (!slot) return;
  const { data: { user } } = await sb.auth.getUser();
  if (user) {
    slot.innerHTML = `
      <a href="history.html" class="btn-ghost">${t('history')}</a>
      <button class="btn-ghost" id="logoutBtn">Logout</button>
    `;
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      await sb.auth.signOut();
      window.location.href = 'index.html';
    });
    // update logout text with translation
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.textContent = t('logout');
  } else {
    slot.innerHTML = `
      <a href="auth.html" class="btn-ghost" id="loginLink">${t('login')}</a>
      <a href="auth.html?mode=signup" class="btn-primary" id="signupLink">${t('getStarted')}</a>
    `;
  }
}

// =====================
// LANDING PAGE
// =====================
function initLanding() {
  // Char counter
  const ideaInput = document.getElementById('ideaInput');
  const charCount = document.getElementById('charCount');
  if (ideaInput) {
    ideaInput.addEventListener('input', () => {
      charCount.textContent = ideaInput.value.length;
    });
  }

  // Example chips
  document.querySelectorAll('.chip[data-example]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!ideaInput) return;
      ideaInput.value = btn.getAttribute('data-example');
      charCount.textContent = ideaInput.value.length;
      ideaInput.focus();
    });
  });

  // Analyze button
  const analyzeBtn = document.getElementById('analyzeBtn');
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', async () => {
      const idea = ideaInput.value.trim();
      if (!idea || idea.length < 20) {
        alert('Please describe your idea in at least 20 characters.');
        return;
      }
      const ok = await canAnalyze();
      if (!ok) {
        document.getElementById('upgradeModal').style.display = 'flex';
        return;
      }
      localStorage.setItem('ideadrop_current_idea', idea);
      window.location.href = 'analysis.html';
    });
  }

  // Modal close
  const modalClose = document.getElementById('modalClose');
  if (modalClose) modalClose.addEventListener('click', () => {
    document.getElementById('upgradeModal').style.display = 'none';
  });

  // FAQ
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
    });
  });

  // Limit note
  updateLimitNote();
}

async function updateLimitNote() {
  const note = document.getElementById('limitNote');
  if (!note) return;
  const remaining = await getRemainingAnalyses();
  note.textContent = remaining === '∞' ? t('premiumUnlimited') : `${remaining} ${t('analysesRemaining')}`;
}

// =====================
// SUPABASE HELPERS (used across pages)
// =====================
async function canAnalyze() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) {
    const count = parseInt(localStorage.getItem('ideadrop_anon_usage') || '0');
    return count < 1;
  }
  const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
  if (!profile || profile.plan === 'premium') return true;
  const reset = new Date(profile.analyses_reset_date);
  const now = new Date();
  if (now.getMonth() !== reset.getMonth() || now.getFullYear() !== reset.getFullYear()) {
    await sb.from('profiles').update({ analyses_count: 0, analyses_reset_date: now.toISOString().split('T')[0] }).eq('id', user.id);
    return true;
  }
  return (profile.analyses_count || 0) < 2;
}

async function getRemainingAnalyses() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) {
    const count = parseInt(localStorage.getItem('ideadrop_anon_usage') || '0');
    return Math.max(0, 1 - count);
  }
  const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
  if (!profile || profile.plan === 'premium') return '∞';
  return Math.max(0, 2 - (profile.analyses_count || 0));
}

async function incrementUsage(userId) {
  if (!userId) {
    const count = parseInt(localStorage.getItem('ideadrop_anon_usage') || '0');
    localStorage.setItem('ideadrop_anon_usage', count + 1);
    return;
  }
  const { data: profile } = await sb.from('profiles').select('*').eq('id', userId).single();
  if (profile && profile.plan !== 'premium') {
    await sb.from('profiles').update({ analyses_count: (profile.analyses_count || 0) + 1 }).eq('id', userId);
  }
}

// =====================
// INIT — runs on every page
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // Apply theme & translations immediately
  applyTheme(currentTheme);
  applyTranslations();
  updateLangHighlight();

  // Wire EN/FR/theme buttons via event listeners (NO inline onclick)
  const btnEN = document.getElementById('btnEN');
  const btnFR = document.getElementById('btnFR');
  const themeToggle = document.getElementById('themeToggle');
  if (btnEN) btnEN.addEventListener('click', () => setLang('en'));
  if (btnFR) btnFR.addEventListener('click', () => setLang('fr'));
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  // Build auth slot
  buildAuthSlot();

  // Page-specific init
  if (document.getElementById('analyzeBtn')) initLanding();
  if (document.getElementById('loadingState')) initAnalysis();
  if (document.getElementById('historyList')) initHistory();
  if (document.getElementById('loginForm')) initAuth();
});
