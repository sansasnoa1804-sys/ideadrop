// ============================================================
// IDEADROP APP.JS — all logic in one place
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
    faq1q:'Quelle est la précision de l\'analyse IA ?', faq1a:'Notre IA utilise un des modèles les plus avancés. Validez toujours avec de vrais utilisateurs !',
    faq2q:'Différence entre Gratuit et Premium ?', faq2a:'Gratuit = 2 analyses/mois. Premium = illimité + PDF + comparaison + priorité.',
    faq3q:'Puis-je analyser la même idée plusieurs fois ?', faq3a:'Oui ! Chaque analyse est indépendante.',
    faq4q:'Mon idée est-elle confidentielle ?', faq4a:'Absolument. Jamais partagée avec d\'autres utilisateurs.',
    faq5q:'Utilisable pour des entreprises existantes ?', faq5a:'Oui ! Nouveau concept ou perspective fraîche sur une entreprise existante.',
    ctaTitle:'Prêt à valider votre idée ?', ctaSub:'Rejoignez 2 400+ entrepreneurs qui utilisent déjà IdeaDrop.', ctaBtn:'Commencer gratuitement →',
    modalTitle:'Analyses gratuites épuisées', modalSub:'Passez Premium pour des analyses illimitées.',
    upgradeBtn:'Passer Premium — 9€/mois', maybeLater:'Peut-être plus tard',
  }
};

// =====================
// STATE
// =====================
let currentLang = localStorage.getItem('ideadrop_lang') || 'en';
let currentTheme = localStorage.getItem('ideadrop_theme') || 'light';

// =====================
// LANG
// =====================
function t(key) {
  return (LANG[currentLang] && LANG[currentLang][key]) || (LANG.en[key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
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
  highlightLang();
}

function highlightLang() {
  const btnEN = document.getElementById('btnEN');
  const btnFR = document.getElementById('btnFR');
  if (btnEN) { btnEN.style.color = currentLang === 'en' ? 'var(--primary)' : ''; btnEN.style.fontWeight = currentLang === 'en' ? '800' : '500'; }
  if (btnFR) { btnFR.style.color = currentLang === 'fr' ? 'var(--primary)' : ''; btnFR.style.fontWeight = currentLang === 'fr' ? '800' : '500'; }
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
// AUTH SLOT
// =====================
async function buildAuthSlot() {
  const slot = document.getElementById('authSlot');
  if (!slot) return;
  try {
    const { data: { user } } = await sb.auth.getUser();
    if (user) {
      slot.innerHTML = `<a href="history.html" class="btn-ghost">${t('history')}</a><button class="btn-ghost" id="logoutBtn">${t('logout')}</button>`;
      document.getElementById('logoutBtn').addEventListener('click', async () => {
        await sb.auth.signOut();
        window.location.href = 'index.html';
      });
    } else {
      slot.innerHTML = `<a href="auth.html" class="btn-ghost">${t('login')}</a><a href="auth.html?mode=signup" class="btn-primary">${t('getStarted')}</a>`;
    }
  } catch(e) {
    slot.innerHTML = `<a href="auth.html" class="btn-ghost">${t('login')}</a><a href="auth.html?mode=signup" class="btn-primary">${t('getStarted')}</a>`;
  }
}

// =====================
// USAGE LIMITS
// =====================
async function canAnalyze() {
  try {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) { return parseInt(localStorage.getItem('ideadrop_anon_usage') || '0') < 1; }
    const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
    if (!profile || profile.plan === 'premium') return true;
    const reset = new Date(profile.analyses_reset_date);
    const now = new Date();
    if (now.getMonth() !== reset.getMonth() || now.getFullYear() !== reset.getFullYear()) {
      await sb.from('profiles').update({ analyses_count: 0, analyses_reset_date: now.toISOString().split('T')[0] }).eq('id', user.id);
      return true;
    }
    return (profile.analyses_count || 0) < 2;
  } catch(e) { return true; }
}

async function getRemainingAnalyses() {
  try {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return Math.max(0, 1 - parseInt(localStorage.getItem('ideadrop_anon_usage') || '0'));
    const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
    if (!profile || profile.plan === 'premium') return '∞';
    return Math.max(0, 2 - (profile.analyses_count || 0));
  } catch(e) { return 1; }
}

async function incrementUsage(userId) {
  if (!userId) { localStorage.setItem('ideadrop_anon_usage', parseInt(localStorage.getItem('ideadrop_anon_usage') || '0') + 1); return; }
  try {
    const { data: profile } = await sb.from('profiles').select('*').eq('id', userId).single();
    if (profile && profile.plan !== 'premium') {
      await sb.from('profiles').update({ analyses_count: (profile.analyses_count || 0) + 1 }).eq('id', userId);
    }
  } catch(e) {}
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Apply theme immediately
  applyTheme(currentTheme);

  // 2. Wire EN/FR/theme buttons
  const btnEN = document.getElementById('btnEN');
  const btnFR = document.getElementById('btnFR');
  const themBtn = document.getElementById('themeToggle');
  if (btnEN) btnEN.addEventListener('click', () => setLang('en'));
  if (btnFR) btnFR.addEventListener('click', () => setLang('fr'));
  if (themBtn) themBtn.addEventListener('click', toggleTheme);

  // 3. Apply translations
  applyTranslations();
  highlightLang();

  // 4. Build auth slot (async, doesn't block)
  buildAuthSlot();

  // 5. Page-specific
  initPage();
});

function initPage() {
  // Landing page
  const ideaInput = document.getElementById('ideaInput');
  if (ideaInput) {
    const charCount = document.getElementById('charCount');
    ideaInput.addEventListener('input', () => { charCount.textContent = ideaInput.value.length; });

    document.querySelectorAll('.chip[data-example]').forEach(btn => {
      btn.addEventListener('click', () => {
        ideaInput.value = btn.getAttribute('data-example');
        charCount.textContent = ideaInput.value.length;
        ideaInput.focus();
      });
    });

    document.getElementById('analyzeBtn').addEventListener('click', async () => {
      const idea = ideaInput.value.trim();
      if (!idea || idea.length < 20) { alert('Please describe your idea in at least 20 characters.'); return; }
      const ok = await canAnalyze();
      if (!ok) { document.getElementById('upgradeModal').style.display = 'flex'; return; }
      localStorage.setItem('ideadrop_current_idea', idea);
      window.location.href = 'analysis.html';
    });

    const modalClose = document.getElementById('modalClose');
    if (modalClose) modalClose.addEventListener('click', () => { document.getElementById('upgradeModal').style.display = 'none'; });

    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => btn.nextElementSibling.classList.toggle('open'));
    });

    getRemainingAnalyses().then(r => {
      const note = document.getElementById('limitNote');
      if (note) note.textContent = r === '∞' ? t('premiumUnlimited') : `${r} ${t('analysesRemaining')}`;
    });
  }

  // Auth page
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      if (!email || !password) { showAuthMsg('Please fill in all fields.', 'error'); return; }
      loginBtn.textContent = 'Signing in...'; loginBtn.disabled = true;
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) { showAuthMsg(error.message, 'error'); loginBtn.textContent = t('signinBtn'); loginBtn.disabled = false; return; }
      showAuthMsg('Logged in! Redirecting...', 'success');
      setTimeout(() => window.location.href = 'index.html', 800);
    });
  }

  const signupBtn = document.getElementById('signupBtn');
  if (signupBtn) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'signup') switchAuthTab('signup');

    signupBtn.addEventListener('click', async () => {
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value;
      if (!name || !email || !password) { showAuthMsg('Please fill in all fields.', 'error'); return; }
      if (password.length < 8) { showAuthMsg('Password must be at least 8 characters.', 'error'); return; }
      signupBtn.textContent = 'Creating...'; signupBtn.disabled = true;
      const { data, error } = await sb.auth.signUp({ email, password });
      if (error) { showAuthMsg(error.message, 'error'); signupBtn.textContent = t('createBtn'); signupBtn.disabled = false; return; }
      if (data.user) {
        await sb.from('profiles').insert({ id: data.user.id, name, plan: 'free', analyses_count: 0, analyses_reset_date: new Date().toISOString().split('T')[0] });
      }
      showAuthMsg('Account created! Check your email to confirm.', 'success');
      signupBtn.textContent = t('createBtn'); signupBtn.disabled = false;
    });
  }
}

function switchAuthTab(tab) {
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  if (!loginTab) return;
  loginTab.classList.toggle('active', tab === 'login');
  signupTab.classList.toggle('active', tab === 'signup');
  loginForm.style.display = tab === 'login' ? 'block' : 'none';
  signupForm.style.display = tab === 'signup' ? 'block' : 'none';
}

function showAuthMsg(text, type) {
  const el = document.getElementById('authMessage');
  if (!el) return;
  el.textContent = text;
  el.className = 'auth-message ' + type;
}
