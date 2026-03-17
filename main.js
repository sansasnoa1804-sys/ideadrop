// =====================
// CHAR COUNTER
// =====================
const ideaInput = document.getElementById('ideaInput');
const charCount = document.getElementById('charCount');

if (ideaInput) {
  ideaInput.addEventListener('input', () => {
    charCount.textContent = ideaInput.value.length;
  });
}

// =====================
// FILL EXAMPLE
// =====================
function fillExample(text) {
  ideaInput.value = text;
  charCount.textContent = text.length;
  ideaInput.focus();
}

// =====================
// ANALYZE IDEA
// =====================
async function analyzeIdea() {
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
}

// =====================
// UPDATE LIMIT NOTE
// =====================
async function updateLimitNote() {
  const note = document.getElementById('limitNote');
  if (!note) return;
  const remaining = await getRemainingAnalyses();
  if (remaining === '∞') {
    note.textContent = t('premiumUnlimited');
  } else {
    note.textContent = `${remaining} ${t('analysesRemaining')}`;
  }
}

// =====================
// UPDATE NAVBAR
// =====================
async function updateNavbar() {
  const user = await getCurrentUser();
  const navActions = document.querySelector('.nav-actions');
  if (!navActions) return;

  if (user) {
    navActions.innerHTML = `
      <button class="lang-btn lang-toggle" data-lang="en" onclick="setLang('en')">EN</button>
      <button class="lang-btn lang-toggle" data-lang="fr" onclick="setLang('fr')">FR</button>
      <button class="theme-toggle" id="themeToggle" onclick="toggleTheme()">🌙</button>
      <a href="history.html" class="btn-ghost" data-i18n="history">📋 History</a>
      <button class="btn-ghost" onclick="logout()" data-i18n="logout">Logout</button>
    `;
  }

  // Re-apply theme icon and lang buttons after rebuild
  const theme = localStorage.getItem('ideadrop_theme') || 'light';
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  updateLangButtons();
  applyTranslations();
}

// =====================
// FAQ TOGGLE
// =====================
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  answer.classList.toggle('open');
}

// =====================
// MODAL
// =====================
function closeModal() {
  document.getElementById('upgradeModal').style.display = 'none';
}

// =====================
// INIT
// =====================
updateNavbar();
updateLimitNote();
