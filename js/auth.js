// Simple local auth using localStorage
// For production, replace with Supabase or Firebase

function switchTab(tab) {
  document.getElementById('loginTab').classList.toggle('active', tab === 'login');
  document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('authMessage').className = 'auth-message';
  document.getElementById('authMessage').textContent = '';
}

function showMessage(text, type) {
  const el = document.getElementById('authMessage');
  el.textContent = text;
  el.className = `auth-message ${type}`;
}

function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }

  // Check stored users
  const users = JSON.parse(localStorage.getItem('ideadrop_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    showMessage('Invalid email or password.', 'error');
    return;
  }

  localStorage.setItem('ideadrop_user', JSON.stringify(user));
  showMessage('Logged in! Redirecting...', 'success');
  setTimeout(() => window.location.href = 'index.html', 1000);
}

function signup() {
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

  const users = JSON.parse(localStorage.getItem('ideadrop_users') || '[]');
  if (users.find(u => u.email === email)) {
    showMessage('An account with this email already exists.', 'error');
    return;
  }

  const newUser = { name, email, password, plan: 'free', createdAt: new Date().toISOString() };
  users.push(newUser);
  localStorage.setItem('ideadrop_users', JSON.stringify(users));
  localStorage.setItem('ideadrop_user', JSON.stringify(newUser));

  showMessage('Account created! Redirecting...', 'success');
  setTimeout(() => window.location.href = 'index.html', 1000);
}

// Auto-switch tab based on URL param
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('mode') === 'signup') {
  switchTab('signup');
}
