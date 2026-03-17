// =====================
// CONFIGURATION
// ⚠️ Replace with your real Anthropic API key
// =====================
const CONFIG = {
  ANTHROPIC_API_KEY: 'YOUR_ANTHROPIC_API_KEY_HERE',
  FREE_LIMIT: 2,
};

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
function analyzeIdea() {
  const idea = ideaInput.value.trim();
  if (!idea || idea.length < 20) {
    alert('Please describe your idea in at least 20 characters.');
    return;
  }

  // Check usage limit
  const usageCount = parseInt(localStorage.getItem('ideadrop_usage') || '0');
  const isPremium = localStorage.getItem('ideadrop_premium') === 'true';

  if (!isPremium && usageCount >= CONFIG.FREE_LIMIT) {
    document.getElementById('upgradeModal').style.display = 'flex';
    return;
  }

  // Save idea and increment counter
  localStorage.setItem('ideadrop_current_idea', idea);
  if (!isPremium) {
    localStorage.setItem('ideadrop_usage', usageCount + 1);
  }

  // Redirect to analysis page
  window.location.href = 'analysis.html';
}

// =====================
// UPDATE LIMIT NOTE
// =====================
function updateLimitNote() {
  const note = document.getElementById('limitNote');
  if (!note) return;
  const usageCount = parseInt(localStorage.getItem('ideadrop_usage') || '0');
  const isPremium = localStorage.getItem('ideadrop_premium') === 'true';
  if (isPremium) {
    note.textContent = '✓ Premium — unlimited analyses';
  } else {
    const remaining = CONFIG.FREE_LIMIT - usageCount;
    note.textContent = `${Math.max(0, remaining)} free analyse${remaining !== 1 ? 's' : ''} remaining this month`;
  }
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
// LOGOUT
// =====================
function logout() {
  localStorage.removeItem('ideadrop_user');
  localStorage.removeItem('ideadrop_premium');
  window.location.href = 'index.html';
}

// =====================
// INIT
// =====================
updateLimitNote();
