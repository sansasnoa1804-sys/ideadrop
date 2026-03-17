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

function fillExample(text) {
  if (!ideaInput) return;
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
// LIMIT NOTE
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
// NAVBAR — only swap the auth part
// =====================
async function buildNavbar() {
  const authSlot = document.getElementById('authSlot');
  if (!authSlot) return;

  const user = await getCurrentUser();
  if (user) {
    authSlot.innerHTML = `
      <a href="history.html" class="btn-ghost" data-i18n="history">📋 History</a>
      <button class="btn-ghost" onclick="logout()" data-i18n="logout">Logout</button>
    `;
  } else {
    authSlot.innerHTML = `
      <a href="auth.html" class="btn-ghost" data-i18n="login">Login</a>
      <a href="auth.html?mode=signup" class="btn-primary" data-i18n="getStarted">Get started free</a>
    `;
  }
  applyTranslations();
}

// =====================
// FAQ
// =====================
function toggleFaq(btn) {
  btn.nextElementSibling.classList.toggle('open');
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
buildNavbar();
updateLimitNote();
