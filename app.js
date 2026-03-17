// ============================================================
// IDEADROP APP.JS
// ============================================================

// =====================
// NAVBAR AUTH
// =====================
async function buildAuthSlot() {
  const slot = document.getElementById('authSlot');
  if (!slot) return;
  try {
    const { data: { user } } = await sb.auth.getUser();
    if (user) {
      slot.innerHTML = `<a href="history.html" class="btn-ghost">📋 History</a><button class="btn-ghost" id="logoutBtn">Logout</button>`;
      document.getElementById('logoutBtn').addEventListener('click', async () => {
        await sb.auth.signOut();
        window.location.href = 'index.html';
      });
    } else {
      slot.innerHTML = `<a href="auth.html" class="btn-ghost">Login</a><a href="auth.html?mode=signup" class="btn-primary">Get started free</a>`;
    }
  } catch(e) {
    slot.innerHTML = `<a href="auth.html" class="btn-ghost">Login</a><a href="auth.html?mode=signup" class="btn-primary">Get started free</a>`;
  }
}

// =====================
// USAGE LIMITS
// =====================
async function canAnalyze() {
  try {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return parseInt(localStorage.getItem('ideadrop_anon_usage') || '0') < 1;
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
  if (!userId) {
    localStorage.setItem('ideadrop_anon_usage', parseInt(localStorage.getItem('ideadrop_anon_usage') || '0') + 1);
    return;
  }
  try {
    const { data: profile } = await sb.from('profiles').select('*').eq('id', userId).single();
    if (profile && profile.plan !== 'premium') {
      await sb.from('profiles').update({ analyses_count: (profile.analyses_count || 0) + 1 }).eq('id', userId);
    }
  } catch(e) {}
}

// =====================
// LANDING PAGE
// =====================
function initLanding() {
  const ideaInput = document.getElementById('ideaInput');
  const charCount = document.getElementById('charCount');
  if (!ideaInput) return;

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
    if (note) note.textContent = r === '∞' ? '✓ Premium — unlimited analyses' : `${r} free analyse(s) remaining this month`;
  });
}

// =====================
// AUTH PAGE
// =====================
function initAuth() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'signup') switchAuthTab('signup');

  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      if (!email || !password) { showAuthMsg('Please fill in all fields.', 'error'); return; }
      loginBtn.textContent = 'Signing in...'; loginBtn.disabled = true;
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) { showAuthMsg(error.message, 'error'); loginBtn.textContent = 'Sign in →'; loginBtn.disabled = false; return; }
      showAuthMsg('Logged in! Redirecting...', 'success');
      setTimeout(() => window.location.href = 'index.html', 800);
    });
  }

  const signupBtn = document.getElementById('signupBtn');
  if (signupBtn) {
    signupBtn.addEventListener('click', async () => {
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value;
      if (!name || !email || !password) { showAuthMsg('Please fill in all fields.', 'error'); return; }
      if (password.length < 8) { showAuthMsg('Password must be at least 8 characters.', 'error'); return; }
      signupBtn.textContent = 'Creating...'; signupBtn.disabled = true;
      const { data, error } = await sb.auth.signUp({ email, password });
      if (error) { showAuthMsg(error.message, 'error'); signupBtn.textContent = 'Create account →'; signupBtn.disabled = false; return; }
      if (data.user) {
        await sb.from('profiles').insert({ id: data.user.id, name, plan: 'free', analyses_count: 0, analyses_reset_date: new Date().toISOString().split('T')[0] });
      }
      showAuthMsg('Account created! Check your email to confirm, then sign in.', 'success');
      signupBtn.textContent = 'Create account →'; signupBtn.disabled = false;
    });
  }
}

function switchAuthTab(tab) {
  const loginTab = document.getElementById('loginTab');
  if (!loginTab) return;
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
}

function showAuthMsg(text, type) {
  const el = document.getElementById('authMessage');
  if (!el) return;
  el.textContent = text;
  el.className = 'auth-message ' + type;
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  buildAuthSlot();
  if (document.getElementById('analyzeBtn')) initLanding();
  if (document.getElementById('loginBtn') || document.getElementById('signupBtn')) initAuth();
});
