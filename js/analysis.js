// =====================
// CONFIGURATION
// ⚠️ Replace with your real Groq API key
// Get yours free at console.groq.com
// =====================
const GROQ_API_KEY = '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';

// =====================
// SYSTEM PROMPT
// =====================
const SYSTEM_PROMPT = `You are an expert startup strategist and market analyst with 20 years of experience. 
Analyze the business idea provided and return ONLY a valid JSON object with no markdown, no explanation, no backticks.

The JSON must have exactly these fields:
{
  "viabilityScore": number (0-100),
  "marketPotential": number (0-100),
  "feasibility": number (0-100),
  "originality": number (0-100),
  "profitability": number (0-100),
  "scoreLabel": "Poor" | "Promising" | "Good" | "Excellent",
  "ideaSummary": "string - clear 2 sentence summary of the idea",
  "targetMarket": {
    "customers": "string - who are the customers",
    "marketSize": "string - estimated market size with numbers"
  },
  "personas": [
    {
      "name": "string",
      "age": "string",
      "job": "string",
      "painPoint": "string",
      "goal": "string"
    },
    {
      "name": "string",
      "age": "string",
      "job": "string",
      "painPoint": "string",
      "goal": "string"
    }
  ],
  "revenueModel": "string - detailed revenue model recommendation",
  "keyStrengths": ["string", "string", "string"],
  "risks": ["string", "string", "string"],
  "competitors": ["string", "string", "string"],
  "launchSteps": ["string", "string", "string", "string", "string"]
}

Be specific, actionable, and insightful. Use real market data and numbers where possible.`;

// =====================
// MAIN FLOW
// =====================
async function runAnalysis() {
  const idea = localStorage.getItem('ideadrop_current_idea');

  if (!idea) {
    showError('No idea found. Please go back and describe your idea.');
    return;
  }

  // Show idea recap
  document.getElementById('ideaRecap').innerHTML = `<strong>Your idea</strong>${idea}`;

  // Show loading
  document.getElementById('loadingState').style.display = 'block';
  document.getElementById('resultState').style.display = 'none';
  document.getElementById('errorState').style.display = 'none';

  try {
    const result = await callClaudeAPI(idea);
    displayResult(result, idea);
    saveToHistory(idea, result);
  } catch (err) {
    showError(err.message || 'An error occurred. Please try again.');
  }
}

// =====================
// CALL CLAUDE API
// =====================
async function callClaudeAPI(idea) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1500,
      temperature: 0.7,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `Analyze this business idea: ${idea}` }
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || `API error: ${response.status}`);
  }

  const data = await response.json();
  const text = data.choices[0].message.content;

  try {
    // Clean and parse JSON
    const clean = text.replace(/```json|```/g, '').trim();
    return JSON.parse(clean);
  } catch (e) {
    throw new Error('Failed to parse AI response. Please try again.');
  }
}

// =====================
// DISPLAY RESULT
// =====================
function displayResult(data, idea) {
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('resultState').style.display = 'block';

  // Score gauge animation
  const score = data.viabilityScore;
  const circumference = 314;
  const offset = circumference - (score / 100) * circumference;

  setTimeout(() => {
    const gauge = document.getElementById('gaugeCircle');
    gauge.style.transition = 'stroke-dashoffset 1.2s ease';
    gauge.style.strokeDashoffset = offset;
  }, 100);

  // Animate score number
  animateNumber('scoreNumber', 0, score, 1200);

  // Score label
  const labelEl = document.getElementById('scoreLabel');
  labelEl.textContent = data.scoreLabel;
  labelEl.className = `score-tag ${data.scoreLabel.toLowerCase()}`;

  // Sub scores
  const subScoresEl = document.getElementById('subScores');
  const subScores = [
    { label: 'Market Potential', value: data.marketPotential, color: '#6C63FF' },
    { label: 'Feasibility', value: data.feasibility, color: '#43D9AD' },
    { label: 'Originality', value: data.originality, color: '#FC5C7D' },
    { label: 'Profitability', value: data.profitability, color: '#F7B731' },
  ];

  subScoresEl.innerHTML = subScores.map(s => `
    <div class="sub-score-row">
      <label>${s.label}</label>
      <div class="sub-score-bar">
        <div class="sub-score-fill" style="width:0%;background:${s.color}" data-target="${s.value}"></div>
      </div>
      <span>${s.value}/100</span>
    </div>
  `).join('');

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.sub-score-fill').forEach(bar => {
      bar.style.width = bar.dataset.target + '%';
    });
  }, 200);

  // Target Market
  document.getElementById('targetMarketContent').innerHTML = `
    <p><strong>Customers:</strong> ${data.targetMarket.customers}</p>
    <p><strong>Market Size:</strong> ${data.targetMarket.marketSize}</p>
  `;

  // Personas
  document.getElementById('personasContent').innerHTML = data.personas.map(p => `
    <div class="persona-card">
      <div class="persona-name">${p.name}</div>
      <div class="persona-meta">${p.age} · ${p.job}</div>
      <div class="persona-pain">🎯 Pain: ${p.painPoint}</div>
      <div class="persona-pain">⭐ Goal: ${p.goal}</div>
    </div>
  `).join('');

  // Revenue Model
  document.getElementById('revenueContent').innerHTML = `<p>${data.revenueModel}</p>`;

  // Key Strengths
  document.getElementById('strengthsContent').innerHTML = `<ul>${data.keyStrengths.map(s => `<li>${s}</li>`).join('')}</ul>`;

  // Risks
  document.getElementById('risksContent').innerHTML = `<ul>${data.risks.map(r => `<li>${r}</li>`).join('')}</ul>`;

  // Competitors
  document.getElementById('competitorsContent').innerHTML = `<ul>${data.competitors.map(c => `<li>${c}</li>`).join('')}</ul>`;

  // Launch Steps
  document.getElementById('stepsContent').innerHTML = data.launchSteps.map((step, i) => `
    <div class="step-item">
      <div class="step-num-badge">${i + 1}</div>
      <div>${step}</div>
    </div>
  `).join('');

  // Store result for PDF
  window._analysisData = data;
  window._analysisIdea = idea;
}

// =====================
// ANIMATE NUMBER
// =====================
function animateNumber(id, from, to, duration) {
  const el = document.getElementById(id);
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(from + (to - from) * easeOut(progress));
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

// =====================
// SAVE TO HISTORY
// =====================
function saveToHistory(idea, data) {
  const history = JSON.parse(localStorage.getItem('ideadrop_history') || '[]');
  history.unshift({
    id: Date.now(),
    idea: idea.substring(0, 100),
    score: data.viabilityScore,
    scoreLabel: data.scoreLabel,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    data: data,
  });
  // Keep last 20
  localStorage.setItem('ideadrop_history', JSON.stringify(history.slice(0, 20)));
}

// =====================
// SHARE SCORE
// =====================
function shareScore() {
  if (!window._analysisData) return;
  const score = window._analysisData.viabilityScore;
  const idea = window._analysisIdea;
  const text = `I just validated my business idea on IdeaDrop and got a score of ${score}/100! 🚀\n\nIdea: "${idea.substring(0, 80)}..."\n\nValidate yours at ideadrop.app`;
  if (navigator.share) {
    navigator.share({ title: 'My IdeaDrop Score', text });
  } else {
    navigator.clipboard.writeText(text).then(() => alert('Score copied to clipboard! Share it on LinkedIn or X.'));
  }
}

// =====================
// EXPORT PDF
// =====================
function exportPDF() {
  const isPremium = localStorage.getItem('ideadrop_premium') === 'true';
  if (!isPremium) {
    alert('PDF export is a Premium feature. Upgrade to unlock it!');
    return;
  }
  window.print();
}

// =====================
// LOGOUT
// =====================
function logout() {
  localStorage.removeItem('ideadrop_user');
  window.location.href = 'index.html';
}

// =====================
// SHOW ERROR
// =====================
function showError(message) {
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('resultState').style.display = 'none';
  document.getElementById('errorState').style.display = 'block';
  document.getElementById('errorMessage').textContent = message;
}

// =====================
// INIT
// =====================
runAnalysis();
