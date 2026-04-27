// Exam flow: start, answer, flag, navigate, submit

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createShuffleOrder() {
  const indices = Array.from({ length: QUESTIONS.length }, (_, i) => i);
  shuffleArray(indices);
  return indices;
}

function applyShuffleOrder(order) {
  const original = QUESTIONS.slice();
  for (let i = 0; i < order.length; i++) {
    QUESTIONS[i] = original[order[i]];
  }
}

function getDomain(qOrCode) {
  // Accept either a domain code string (e.g., "A") or a question object with .domain
  const code = typeof qOrCode === 'string' ? qOrCode : (qOrCode && qOrCode.domain);
  return DOMAINS.find(d => d.code === code);
}

function startExam(isStudyMode) {
  state.studyMode = !!isStudyMode;
  state.studyRevealed = false;
  state.shuffleOrder = createShuffleOrder();
  applyShuffleOrder(state.shuffleOrder);
  state.screen = 'exam';
  state.currentQ = 0;
  state.answers = new Array(QUESTIONS.length).fill(-1);
  state.flagged = new Set();
  state.timeLeft = TOTAL_TIME;
  state.submitted = false;
  state.reviewMode = false;
  state.reviewFilter = null;
  document.getElementById('mapToggle').style.display = 'flex';

  if (!isStudyMode) {
    startTimer();
  }

  saveState();
  render();
}

function resumeExam(saved) {
  state.shuffleOrder = saved.shuffleOrder;
  applyShuffleOrder(saved.shuffleOrder);
  state.screen = saved.screen;
  state.currentQ = saved.currentQ;
  state.answers = saved.answers;
  state.flagged = new Set(saved.flagged || []);
  state.timeLeft = saved.timeLeft;
  state.submitted = saved.submitted || false;
  state.studyMode = saved.studyMode || false;
  state.studyRevealed = false;
  state.reviewMode = false;
  state.reviewFilter = null;

  if (state.screen === 'exam' || state.screen === 'review') {
    document.getElementById('mapToggle').style.display = 'flex';
  }
  if (state.screen === 'exam' && !state.studyMode && !state.submitted) {
    startTimer();
  }

  render();
}

function selectAnswer(idx) {
  if (state.submitted) return;
  if (state.studyMode && state.studyRevealed) return; // can't change after reveal
  state.answers[state.currentQ] = idx;
  if (state.studyMode) {
    state.studyRevealed = true;
  }
  saveState();
  render();
}

function toggleFlag() {
  const idx = state.currentQ;
  if (state.flagged.has(idx)) state.flagged.delete(idx);
  else state.flagged.add(idx);
  saveState();
  render();
}

function goTo(idx) {
  if (idx >= 0 && idx < QUESTIONS.length) {
    state.currentQ = idx;
    if (state.studyMode) state.studyRevealed = state.answers[idx] !== -1;
    saveState();
    render();
  }
}

function goToFlagged(dir) {
  const flags = [...state.flagged].sort((a, b) => a - b);
  if (!flags.length) return;
  const cur = state.currentQ;
  let target;
  if (dir > 0) target = flags.find(f => f > cur) || flags[0];
  else target = [...flags].reverse().find(f => f < cur) || flags[flags.length - 1];
  goTo(target);
}

function toggleMap() {
  document.getElementById('qMap').classList.toggle('show');
  renderMap();
}

function submitExam() {
  if (!state.submitted) {
    const unanswered = state.answers.filter(a => a === -1).length;
    if (unanswered > 0 && !confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`)) return;
  }
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.submitted = true;
  state.screen = 'results';
  document.getElementById('mapToggle').style.display = 'none';
  document.getElementById('qMap').classList.remove('show');
  clearState(); // exam complete, clear saved progress
  render();
}
