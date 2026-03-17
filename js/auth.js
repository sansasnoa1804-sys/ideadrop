// Auth page logic with Supabase

function switchTab(tab) {
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
  clearMessage();
}

function showMessage(text, type) {
  const el = document.getElementById('authMessage');
  el.textContent = text;
  el.className = `auth-message ${type}`;
}

function clearMessage() {
  const el = document.getElementById('authMessage');
  el.textContent = '';
  el.className = 'auth-message';
}

async function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }

  const btn = document.querySelector('#loginForm .btn-primary');
  btn.textContent = 'Signing in...';
  btn.disabled = true;

  const { data, error } = await sb.auth.signInWithPassword({ email, password });

  if (error) {
    showMessage(error.message, 'error');
    btn.textContent = 'Sign in →';
    btn.disabled = false;
    return;
  }

  showMessage('Logged in! Redirecting...', 'success');
  setTimeout(() => window.location.href = 'index.html', 800);
}

async function signup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (!name || !email || !password) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }
  if (password.length < 8) {
    showMessage('Password must be at least 8 characters.', 'error');
    return;
  }

  const btn = document.querySelector('#signupForm .btn-primary');
  btn.textContent = 'Creating account...';
  btn.disabled = true;

  const { data, error } = await sb.auth.signUp({ email, password });

  if (error) {
    showMessage(error.message, 'error');
    btn.textContent = 'Create account →';
    btn.disabled = false;
    return;
  }

  if (data.user) {
    await sb.from('profiles').insert({
      id: data.user.id,
      name: name,
      plan: 'free',
      analyses_count: 0,
      analyses_reset_date: new Date().toISOString().split('T')[0]
    });
  }

  showMessage('Account created! Check your email to confirm, then sign in.', 'success');
  btn.textContent = 'Create account →';
  btn.disabled = false;
}

// Auto-switch tab based on URL param
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('mode') === 'signup') switchTab('signup');

// Redirect if already logged in
getCurrentUser().then(user => {
  if (user) window.location.href = 'index.html';
});
