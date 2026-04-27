// All render functions — Calm Gradient theme

function render() {
  const app = document.getElementById('app');
  if (state.screen === 'start') renderStart(app);
  else if (state.screen === 'exam') renderExam(app);
  else if (state.screen === 'results') renderResults(app);
  else if (state.screen === 'review') renderReview(app);
  renderMap();
}

// =====================================================================
// START SCREEN
// =====================================================================
function renderStart(el) {
  const saved = hasSavedState();
  const domainList = DOMAINS.map(d => {
    const count = QUESTION_BANK.filter(q => q.domain === d.code).length;
    return `<div class="domain-pill"><span class="domain-code">${d.code}</span>${d.name} <span class="domain-count">${count}q</span></div>`;
  }).join('');

  el.innerHTML = `
    <div class="start-screen">

      <div class="start-nav">
        <div class="brand">
          <div class="brand-mark"></div>
          <span>bcba.mock</span>
        </div>
        <div class="nav-pill" aria-hidden="true">
          <span class="item active">Exam</span>
          <span class="item">Study</span>
          <span class="item">Domains</span>
          <span class="item">About</span>
        </div>
      </div>

      <div class="hero">
        <div class="eyebrow-pill">
          <span class="dot"></span>
          6th Edition · Test Content Outline
        </div>
        <h1>Calm focus. <span class="accent">Real practice.</span></h1>
        <p class="subtitle">An authentic ${ATTEMPT_SIZE}-question simulation drawn fresh each attempt from a ${QUESTION_BANK.length}-question bank.</p>
        <p class="lede">
          Each attempt randomly samples <b>${ATTEMPT_SIZE} questions</b>, marks <b>${UNSCORED_COUNT}</b> as unscored field-test items (hidden from you, just like the real exam), and scores you on the remaining <b>${SCORED_COUNT}</b>. Mirrors the BACB exam structure exactly.
        </p>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">&#128221;</div>
          <div class="value">${ATTEMPT_SIZE}</div>
          <div class="label">Per Attempt</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#9200;</div>
          <div class="value">4h</div>
          <div class="label">Time Limit</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#127919;</div>
          <div class="value">${SCORED_COUNT}</div>
          <div class="label">Scored Items</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#128218;</div>
          <div class="value">9</div>
          <div class="label">Domains A&ndash;I</div>
        </div>
      </div>

      <div class="features-section">
        <h3>— How It Works —</h3>
        <div class="features-grid">
          <div class="feature"><strong>Timed Exam</strong>4-hour countdown simulating real testing conditions.</div>
          <div class="feature"><strong>Randomized Sample</strong>Each attempt draws fresh questions from the ${QUESTION_BANK.length}-question bank.</div>
          <div class="feature"><strong>Flag &amp; Review</strong>Bookmark questions and revisit them before submitting.</div>
          <div class="feature"><strong>Domain Breakdown</strong>Detailed results show your strengths and weak areas.</div>
        </div>
      </div>

      <div class="domains-section">
        <h3>— Question Bank Coverage —</h3>
        <div class="domains-list">${domainList}</div>
      </div>

      <div class="start-actions">
        ${saved ? `
          <button class="btn btn-primary btn-lg" onclick="resumeExam(loadState())">
            &#9654; Resume Exam
          </button>
          <button class="btn btn-secondary btn-sm" onclick="clearState(); render()">
            Discard Saved Progress
          </button>
          <div class="start-divider"><span>or start fresh</span></div>
        ` : ''}
        <button class="btn ${saved ? 'btn-outline' : 'btn-primary btn-lg'}" onclick="clearState(); startExam(false)">
          Begin Timed Exam
        </button>
        <button class="btn btn-secondary" onclick="clearState(); startExam(true)">
          &#128214; Study Mode <small>(untimed, instant feedback)</small>
        </button>
      </div>
    </div>`;
}

// =====================================================================
// EXAM SCREEN
// =====================================================================
function renderExam(el) {
  const q = QUESTIONS[state.currentQ];
  const d = getDomain(q.domain) || { code: q.domain || '?', name: q.domain_name || '' };
  const answered = state.answers.filter(a => a !== -1).length;
  const isFlagged = state.flagged.has(state.currentQ);
  const letters = ['A', 'B', 'C', 'D'];
  const isStudy = state.studyMode;
  const revealed = isStudy && state.studyRevealed;

  el.innerHTML = `
    <div class="top-bar">
      ${isStudy
        ? `<div style="font-weight:600;display:flex;align-items:center;gap:8px">&#128214; Study Mode</div>`
        : `<div class="timer" id="timer">${formatTime(state.timeLeft)}</div>`
      }
      <div class="progress">${answered} / ${QUESTIONS.length} answered</div>
      ${isStudy
        ? `<button class="btn btn-sm btn-danger" onclick="if(confirm('End study session?')){state.screen='start';document.getElementById('mapToggle').style.display='none';document.getElementById('qMap').classList.remove('show');clearState();render()}">End Session</button>`
        : `<button class="btn btn-sm btn-danger" onclick="submitExam()">Submit Exam</button>`
      }
    </div>
    <div class="question-card" role="radiogroup" aria-label="Question ${state.currentQ + 1}">
      <div class="q-header">
        <span class="q-number">Question ${state.currentQ + 1} of ${QUESTIONS.length}</span>
        <span class="q-domain">Domain ${d.code} · ${d.name}</span>
        <span class="q-flag ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag()" title="Flag for review" role="button" aria-label="${isFlagged ? 'Unflag' : 'Flag'} question" tabindex="0">⚑</span>
      </div>
      <div class="q-stem">${q.stem}</div>
      <div class="options">
        ${q.options.map((opt, i) => {
          let cls = 'option';
          if (state.answers[state.currentQ] === i) cls += ' selected';
          if (revealed) {
            if (i === q.correct) cls += ' correct';
            else if (i === state.answers[state.currentQ] && i !== q.correct) cls += ' incorrect';
          }
          return `<div class="${cls}" onclick="selectAnswer(${i})" role="radio" aria-checked="${state.answers[state.currentQ] === i}" tabindex="0">
            <div class="letter">${letters[i]}</div>
            <div class="text">${opt}</div>
          </div>`;
        }).join('')}
      </div>
      ${revealed ? `<div class="rationale show"><strong>Explanation:</strong> ${q.rationale}</div>` : ''}
    </div>
    <div class="nav-bar">
      <button class="btn btn-secondary btn-sm" onclick="goTo(${state.currentQ - 1})" ${state.currentQ === 0 ? 'disabled' : ''}>&#8592; Previous</button>
      <div class="center">
        <button class="btn btn-secondary btn-sm" onclick="goToFlagged(-1)">&#9664; Prev Flag</button>
        <button class="btn btn-secondary btn-sm" onclick="goToFlagged(1)">Next Flag &#9654;</button>
      </div>
      <button class="btn btn-primary btn-sm" onclick="goTo(${state.currentQ + 1})" ${state.currentQ === QUESTIONS.length - 1 ? 'disabled' : ''}>Next &#8594;</button>
    </div>`;
}

// =====================================================================
// REVIEW SCREEN
// =====================================================================
function renderReview(el) {
  const q = QUESTIONS[state.currentQ];
  const d = getDomain(q.domain) || { code: q.domain || '?', name: q.domain_name || '' };
  const userAns = state.answers[state.currentQ];
  const correct = q.correct;
  const letters = ['A', 'B', 'C', 'D'];
  const isCorrect = userAns === correct;
  const status = isCorrect ? '&#10003; Correct' : userAns === -1 ? '&mdash; Not Answered' : '&#10007; Incorrect';
  const statusBg = isCorrect ? 'var(--success-bg)' : userAns === -1 ? 'var(--card-mute)' : 'var(--danger-bg)';
  const statusColor = isCorrect ? 'var(--success)' : userAns === -1 ? 'var(--ink-mute)' : 'var(--danger)';

  el.innerHTML = `
    <div class="top-bar" style="background:${statusBg}">
      <div style="font-weight:700;color:${statusColor}">${status}</div>
      <div class="progress">Review · Question ${state.currentQ + 1} of ${QUESTIONS.length}</div>
      <button class="btn btn-sm btn-secondary" onclick="backToResults()">Back to Results</button>
    </div>
    <div class="question-card">
      <div class="q-header">
        <span class="q-number">Question ${state.currentQ + 1}</span>
        <span class="q-domain">Domain ${d.code} · ${d.name}</span>
      </div>
      <div class="q-stem">${q.stem}</div>
      <div class="options">
        ${q.options.map((opt, i) => {
          let cls = 'option';
          if (i === correct) cls += ' correct';
          else if (i === userAns && i !== correct) cls += ' incorrect';
          return `<div class="${cls}">
            <div class="letter">${letters[i]}</div>
            <div class="text">${opt}</div>
          </div>`;
        }).join('')}
      </div>
      <div class="rationale show"><strong>Explanation:</strong> ${q.rationale}</div>
    </div>
    <div class="nav-bar">
      <button class="btn btn-secondary btn-sm" onclick="navReview(-1)">&#8592; Previous</button>
      <div></div>
      <button class="btn btn-primary btn-sm" onclick="navReview(1)">Next &#8594;</button>
    </div>`;
}

// =====================================================================
// RESULTS SCREEN
// =====================================================================
function renderResults(el) {
  // Score only the items that aren't field-test (unscored) items
  let correct = 0, incorrect = 0, unanswered = 0;
  let scoredTotal = 0;
  QUESTIONS.forEach((q, i) => {
    if (!isScored(i)) return;
    scoredTotal++;
    if (state.answers[i] === -1) unanswered++;
    else if (state.answers[i] === q.correct) correct++;
    else incorrect++;
  });
  const pct = scoredTotal > 0 ? Math.round((correct / scoredTotal) * 100) : 0;
  const pass = pct >= PASS_THRESHOLD;
  const elapsed = TOTAL_TIME - state.timeLeft;

  let domainHtml = '';
  DOMAINS.forEach(d => {
    const dqs = QUESTIONS
      .map((q, i) => ({ q, i }))
      .filter(({ q, i }) => q.domain === d.code && isScored(i));
    if (!dqs.length) return;
    const dCorrect = dqs.filter(({ q, i }) => state.answers[i] === q.correct).length;
    const dPct = Math.round((dCorrect / dqs.length) * 100);
    const barColor = dPct >= 80 ? 'var(--success)' : dPct >= 60 ? 'var(--warn)' : 'var(--danger)';
    domainHtml += `
      <div class="domain-row">
        <div class="name"><strong>${d.code}.</strong> ${d.name}</div>
        <div class="bar-wrap"><div class="bar" style="width:${dPct}%;background:${barColor}"></div></div>
        <div class="score-text">${dCorrect}/${dqs.length} (${dPct}%)</div>
      </div>`;
  });

  el.innerHTML = `
    <div class="results">
      <div class="eyebrow-pill" style="margin-bottom:0">
        <span class="dot"></span>
        Completed in ${formatTime(elapsed)}
      </div>

      <h1 style="margin-top:18px">Exam Results</h1>

      <div class="score-circle ${pass ? 'pass' : 'fail'}">
        <div class="pct">${pct}%</div>
        <div class="label">${correct} / ${scoredTotal}</div>
      </div>
      <div class="result-badge ${pass ? 'pass' : 'fail'}">${pass ? 'PASSED' : 'DID NOT PASS'}</div>
      <p style="color:var(--ink-soft);font-size:.9rem;margin-top:8px">
        Scored on ${scoredTotal} of ${QUESTIONS.length} questions
        (${state.unscoredSet.size} unscored field-test items excluded)
      </p>

      <div style="display:flex;justify-content:center;gap:48px;margin:32px 0">
        <div><span style="font-size:1.6rem;font-weight:800;color:var(--success)">${correct}</span><br><small style="color:var(--ink-soft);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase">Correct</small></div>
        <div><span style="font-size:1.6rem;font-weight:800;color:var(--danger)">${incorrect}</span><br><small style="color:var(--ink-soft);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase">Incorrect</small></div>
        <div><span style="font-size:1.6rem;font-weight:800;color:var(--ink-mute)">${unanswered}</span><br><small style="color:var(--ink-soft);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase">Unanswered</small></div>
      </div>

      <div class="domain-breakdown">
        <h3>Domain Breakdown <span style="font-weight:400;color:var(--ink-mute);font-size:.78em;text-transform:none;letter-spacing:0">(scored items only)</span></h3>
        ${domainHtml}
      </div>

      <div class="actions">
        <button class="btn btn-primary btn-sm" onclick="startReview()">Review All</button>
        <button class="btn btn-danger btn-sm" onclick="startReview((q,i)=>state.answers[i]!==-1&&state.answers[i]!==q.correct)">Review Incorrect</button>
        <button class="btn btn-secondary btn-sm" onclick="startReview((q,i)=>state.answers[i]===-1)">Review Unanswered</button>
        <button class="btn btn-success btn-sm" onclick="exportResults()">&#128190; Download CSV</button>
        <button class="btn btn-secondary btn-sm" onclick="state.screen='start';document.getElementById('mapToggle').style.display='none';render()">Retake</button>
      </div>
    </div>`;
}

// =====================================================================
// QUESTION MAP
// =====================================================================
function renderMap() {
  const map = document.getElementById('qMap');
  if (!map.classList.contains('show') && state.screen !== 'exam' && state.screen !== 'review') return;

  let html = '<h3>Question Navigator</h3>';
  DOMAINS.forEach(d => {
    const domainQs = QUESTIONS.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === d.code);
    if (!domainQs.length) return;
    html += `<div class="domain-label">${d.code} · ${d.name}</div><div class="q-map-grid">`;
    domainQs.forEach(({ q, i }) => {
      let cls = 'q-map-btn';
      if (i === state.currentQ) cls += ' current';

      if (state.reviewMode) {
        if (state.answers[i] === -1) cls += ' review-unanswered';
        else if (state.answers[i] === q.correct) cls += ' review-correct';
        else cls += ' review-incorrect';
      } else {
        if (state.answers[i] !== -1) cls += ' answered';
        if (state.flagged.has(i)) cls += ' flagged-map';
      }

      html += `<div class="${cls}" onclick="goTo(${i})">${i + 1}</div>`;
    });
    html += '</div>';
  });
  map.innerHTML = html;
}
