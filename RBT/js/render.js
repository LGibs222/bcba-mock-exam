// All render functions

function render() {
  const app = document.getElementById('app');
  if (state.screen === 'start') renderStart(app);
  else if (state.screen === 'exam') renderExam(app);
  else if (state.screen === 'results') renderResults(app);
  else if (state.screen === 'review') renderReview(app);
  renderMap();
}

function renderStart(el) {
  const saved = hasSavedState();
  const domainList = DOMAINS.map(d =>
    `<div class="domain-pill"><span class="domain-code">${d.code}</span>${d.name} <span class="domain-count">${d.end - d.start + 1}q</span></div>`
  ).join('');

  el.innerHTML = `
    <div class="start-screen">
      <div class="hero">
        <div class="hero-badge">RBT</div>
        <h1>RBT Mock Exam</h1>
        <div class="subtitle">3rd Edition Task List</div>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">&#128221;</div>
          <div class="value">85</div>
          <div class="label">Questions</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#9200;</div>
          <div class="value">90 Min</div>
          <div class="label">Time Limit</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#127919;</div>
          <div class="value">70%</div>
          <div class="label">Passing Score</div>
        </div>
        <div class="info-card">
          <div class="info-icon">&#128218;</div>
          <div class="value">6</div>
          <div class="label">Content Areas (A\u2013F)</div>
        </div>
      </div>

      <div class="features-section">
        <h3>How It Works</h3>
        <div class="features-grid">
          <div class="feature"><strong>Timed Exam</strong><br>90-minute countdown simulates real testing conditions</div>
          <div class="feature"><strong>Randomized</strong><br>Questions are shuffled each attempt for varied practice</div>
          <div class="feature"><strong>Flag &amp; Review</strong><br>Bookmark questions and return to them before submitting</div>
          <div class="feature"><strong>Detailed Results</strong><br>Content area breakdown shows your strengths and weak areas</div>
        </div>
      </div>

      <div class="domains-section">
        <h3>Content Areas</h3>
        <div class="domains-list">${domainList}</div>
      </div>

      <div class="start-actions">
        ${saved ? `
          <button class="btn btn-primary btn-lg" onclick="resumeExam(loadState())">
            &#9654; Resume Exam
          </button>
          <button class="btn btn-secondary" onclick="clearState(); render()">
            Discard Saved Progress
          </button>
          <div class="start-divider"><span>or start fresh</span></div>
        ` : ''}
        <button class="btn btn-primary ${saved ? 'btn-outline' : 'btn-lg'}" onclick="clearState(); startExam(false)">
          Begin Timed Exam
        </button>
        <button class="btn btn-secondary" onclick="clearState(); startExam(true)">
          &#128214; Study Mode <small>(untimed, instant feedback)</small>
        </button>
      </div>
    </div>`;
}

function renderExam(el) {
  const q = QUESTIONS[state.currentQ];
  const d = getDomain(q.num);
  const answered = state.answers.filter(a => a !== -1).length;
  const isFlagged = state.flagged.has(state.currentQ);
  const letters = ['A', 'B', 'C', 'D'];
  const isStudy = state.studyMode;
  const revealed = isStudy && state.studyRevealed;

  el.innerHTML = `
    <div class="top-bar">
      ${isStudy
        ? `<div style="font-weight:600">&#128214; Study Mode</div>`
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
        <span class="q-domain">Area ${d.code}: ${d.name}</span>
        <span class="q-flag ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag()" title="Flag for review" role="button" aria-label="${isFlagged ? 'Unflag' : 'Flag'} question" tabindex="0">\u2691</span>
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
      <button class="btn btn-secondary btn-sm" onclick="goTo(${state.currentQ + 1})" ${state.currentQ === QUESTIONS.length - 1 ? 'disabled' : ''}>Next &#8594;</button>
    </div>`;
}

function renderReview(el) {
  const q = QUESTIONS[state.currentQ];
  const d = getDomain(q.num);
  const userAns = state.answers[state.currentQ];
  const correct = q.correct;
  const letters = ['A', 'B', 'C', 'D'];
  const isCorrect = userAns === correct;

  el.innerHTML = `
    <div class="top-bar" style="background:${isCorrect ? 'var(--success)' : userAns === -1 ? 'var(--muted)' : 'var(--danger)'}">
      <div style="font-weight:600">${isCorrect ? '\u2713 Correct' : userAns === -1 ? '\u2014 Not Answered' : '\u2717 Incorrect'}</div>
      <div class="progress">Review Mode \u2014 Question ${state.currentQ + 1} of ${QUESTIONS.length}</div>
      <button class="btn btn-sm btn-secondary" onclick="backToResults()">Back to Results</button>
    </div>
    <div class="question-card">
      <div class="q-header">
        <span class="q-number">Question ${state.currentQ + 1} of ${QUESTIONS.length}</span>
        <span class="q-domain">Area ${d.code}: ${d.name}</span>
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
      <button class="btn btn-secondary btn-sm" onclick="navReview(1)">Next &#8594;</button>
    </div>`;
}

function renderResults(el) {
  let correct = 0, incorrect = 0, unanswered = 0;
  QUESTIONS.forEach((q, i) => {
    if (state.answers[i] === -1) unanswered++;
    else if (state.answers[i] === q.correct) correct++;
    else incorrect++;
  });
  const pct = Math.round((correct / QUESTIONS.length) * 100);
  const pass = pct >= PASS_THRESHOLD;
  const elapsed = TOTAL_TIME - state.timeLeft;

  let domainHtml = '';
  DOMAINS.forEach(d => {
    const dqs = QUESTIONS.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === d.code);
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
      <h1>Exam Results</h1>
      <p style="color:var(--muted)">Completed in ${formatTime(elapsed)}</p>
      <div class="score-circle ${pass ? 'pass' : 'fail'}">
        <div class="pct">${pct}%</div>
        <div class="label">${correct} / ${QUESTIONS.length}</div>
      </div>
      <div class="result-badge ${pass ? 'pass' : 'fail'}">${pass ? 'PASSED' : 'DID NOT PASS'}</div>
      <div style="display:flex;justify-content:center;gap:32px;margin:24px 0">
        <div><span style="font-size:1.5em;font-weight:700;color:var(--success)">${correct}</span><br><small style="color:var(--muted)">Correct</small></div>
        <div><span style="font-size:1.5em;font-weight:700;color:var(--danger)">${incorrect}</span><br><small style="color:var(--muted)">Incorrect</small></div>
        <div><span style="font-size:1.5em;font-weight:700;color:var(--muted)">${unanswered}</span><br><small style="color:var(--muted)">Unanswered</small></div>
      </div>
      <div class="domain-breakdown">
        <h3 style="margin-bottom:12px;color:var(--primary)">Content Area Breakdown</h3>
        ${domainHtml}
      </div>
      <div class="actions">
        <button class="btn btn-primary" onclick="startReview()">Review All Questions</button>
        <button class="btn btn-danger" onclick="startReview((q,i)=>state.answers[i]!==-1&&state.answers[i]!==q.correct)">Review Incorrect Only</button>
        <button class="btn btn-secondary" onclick="startReview((q,i)=>state.answers[i]===-1)">Review Unanswered</button>
        <button class="btn btn-success" onclick="exportResults()">&#128190; Download Results</button>
        <button class="btn btn-secondary" onclick="state.screen='start';document.getElementById('mapToggle').style.display='none';render()">Retake Exam</button>
      </div>
    </div>`;
}

function renderMap() {
  const map = document.getElementById('qMap');
  if (!map.classList.contains('show') && state.screen !== 'exam' && state.screen !== 'review') return;

  let html = '<h3>Question Navigator</h3>';
  DOMAINS.forEach(d => {
    const domainQs = QUESTIONS.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === d.code);
    if (!domainQs.length) return;
    html += `<div class="domain-label">${d.code}. ${d.name}</div><div class="q-map-grid">`;
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
