function logout() {
  localStorage.removeItem('ideadrop_user');
  window.location.href = 'index.html';
}

function loadHistory() {
  const listEl = document.getElementById('historyList');
  const history = JSON.parse(localStorage.getItem('ideadrop_history') || '[]');
  const isPremium = localStorage.getItem('ideadrop_premium') === 'true';

  // Free users see last 3 only
  const items = isPremium ? history : history.slice(0, 3);

  if (items.length === 0) {
    listEl.innerHTML = `
      <div class="empty-history">
        <div class="empty-icon">💡</div>
        <h3>No analyses yet</h3>
        <p>Start by analyzing your first business idea!</p>
        <br/>
        <a href="index.html" class="btn-primary">Analyze my first idea →</a>
      </div>
    `;
    return;
  }

  listEl.innerHTML = items.map(item => `
    <div class="history-item" onclick="viewResult(${item.id})">
      <div>
        <div class="history-idea">${item.idea}</div>
        <div class="history-date">${item.date} · ${item.scoreLabel}</div>
      </div>
      <div class="history-score">${item.score}/100</div>
    </div>
  `).join('');

  if (!isPremium && history.length > 3) {
    listEl.innerHTML += `
      <div style="text-align:center;padding:24px;color:var(--text-muted);font-size:0.9rem">
        You have ${history.length - 3} more analyses. <a href="auth.html?mode=signup" style="color:var(--primary);font-weight:600">Upgrade to Premium</a> to see them all.
      </div>
    `;
  }
}

function viewResult(id) {
  const history = JSON.parse(localStorage.getItem('ideadrop_history') || '[]');
  const item = history.find(h => h.id === id);
  if (!item) return;

  localStorage.setItem('ideadrop_current_idea', item.idea);
  localStorage.setItem('ideadrop_cached_result', JSON.stringify(item.data));
  window.location.href = 'analysis.html';
}

loadHistory();
