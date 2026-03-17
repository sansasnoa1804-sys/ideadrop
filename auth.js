function initAuth() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'signup') switchTab('signup');

  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  if (loginBtn) loginBtn.addEventListener('click', login);
  if (signupBtn) signupBtn.addEventListener('click', signup);
}

function switchTab(tab) {
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
  clearMsg();
}

function showMsg(text, type) {
  const el = document.getElementById('authMessage');
  el.textContent = text;
  el.className = 'auth-message ' + type;
}

function clearMsg() {
  const el = document.getElementById('authMessage');
  if (el) { el.textContent = ''; el.className = 'auth-message'; }
}

async function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) { showMsg('Please fill in all fields.', 'error'); return; }
  const btn = document.getElementById('loginBtn');
  btn.textContent = 'Signing in...'; btn.disabled = true;
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) { showMsg(error.message, 'error'); btn.textContent = 'Sign in →'; btn.disabled = false; return; }
  showMsg('Logged in! Redirecting...', 'success');
  setTimeout(() => window.location.href = 'index.html', 800);
}

async function signup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  if (!name || !email || !password) { showMsg('Please fill in all fields.', 'error'); return; }
  if (password.length < 8) { showMsg('Password must be at least 8 characters.', 'error'); return; }
  const btn = document.getElementById('signupBtn');
  btn.textContent = 'Creating...'; btn.disabled = true;
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) { showMsg(error.message, 'error'); btn.textContent = 'Create account →'; btn.disabled = false; return; }
  if (data.user) {
    await sb.from('profiles').insert({ id: data.user.id, name, plan: 'free', analyses_count: 0, analyses_reset_date: new Date().toISOString().split('T')[0] });
  }
  showMsg('Account created! Check your email to confirm.', 'success');
  btn.textContent = 'Create account →'; btn.disabled = false;
}
