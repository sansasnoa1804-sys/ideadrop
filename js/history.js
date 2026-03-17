async function loadHistory() {
  const listEl = document.getElementById('historyList');
  const user = await getCurrentUser();

  let items = [];

  if (user) {
    // Load from Supabase
    const profile = await getUserProfile(user.id);
    const isPremium = profile?.plan === 'premium';

    let query = sb.from('analyses')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (!isPremium) query = query.limit(3);

    const { data, error } = await query;
    if (data) {
      items = data.map(a => ({
        id: a.id,
        idea: a.idea,
        score: a.score,
        scoreLabel: a.score_label,
        date: new Date(a.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        data: a.result,
      }));
    }

    if (!isPremium && items.length === 3) {
      const { count } = await sb.from('analyses').select('*', { count: 'exact', head: true }).eq('user_id', user.id);
      if (count > 3) {
        listEl.innerHTML = renderItems(items) + `
          <div style="text-align:center;padding:24px;color:var(--text-muted);font-size:0.9rem">
            You have ${count - 3} more analyses. <a href="auth.html" style="color:var(--primary);font-weight:600">Upgrade to Premium</a> to see them all.
          </div>`;
        return;
      }
    }
  } else {
    // Load from localStorage
    items = JSON.parse(localStorage.getItem('ideadrop_history') || '[]').slice(0, 3);
  }

  if (items.length === 0) {
    listEl.innerHTML = `
      <div class="empty-history">
        <div class="empty-icon">💡</div>
        <h3>No analyses yet</h3>
        <p>Start by analyzing your first business idea!</p>
        <br/>
        <a href="index.html" class="btn-primary">Analyze my first idea →</a>
      </div>`;
    return;
  }

  listEl.innerHTML = renderItems(items);
}

function renderItems(items) {
  return items.map(item => `
    <div class="history-item" onclick="viewResult(${item.id})">
      <div>
        <div class="history-idea">${item.idea}</div>
        <div class="history-date">${item.date} · ${item.scoreLabel}</div>
      </div>
      <div class="history-score">${item.score}/100</div>
    </div>
  `).join('');
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
