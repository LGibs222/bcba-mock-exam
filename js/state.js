// State management with localStorage persistence
const STORAGE_KEY = 'bcba_mock_exam';

// Authentic mock exam structure (mirrors actual BCBA exam):
// 185 total questions, 175 scored, 10 unscored field-test items
const ATTEMPT_SIZE = 185;
const UNSCORED_COUNT = 10;
const SCORED_COUNT = ATTEMPT_SIZE - UNSCORED_COUNT;

// QUESTIONS is the active session view (the 185 sampled from the bank).
// Until a session starts, it points at the full bank for landing-page rendering.
let QUESTIONS = QUESTION_BANK;

let state = {
  screen: 'start',
  currentQ: 0,
  answers: new Array(QUESTIONS.length).fill(-1),
  flagged: new Set(),
  timeLeft: TOTAL_TIME,
  timerInterval: null,
  submitted: false,
  reviewMode: false,
  reviewFilter: null,
  studyMode: false,
  studyRevealed: false,
  activeIndices: null,    // 185 indices into QUESTION_BANK for this attempt
  unscoredSet: new Set()  // positions (0..184) of unscored field-test items
};

function isScored(pos) {
  return !state.unscoredSet.has(pos);
}

function saveState() {
  try {
    const data = {
      screen: state.screen,
      currentQ: state.currentQ,
      answers: state.answers,
      flagged: [...state.flagged],
      timeLeft: state.timeLeft,
      submitted: state.submitted,
      studyMode: state.studyMode,
      activeIndices: state.activeIndices,
      unscoredIndices: [...state.unscoredSet]
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) { /* quota exceeded or private browsing */ }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data.activeIndices || !data.answers) return null;
    return data;
  } catch (e) { return null; }
}

function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

function hasSavedState() {
  return loadState() !== null;
}
