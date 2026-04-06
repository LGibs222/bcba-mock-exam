// State management with localStorage persistence
const STORAGE_KEY = 'bcba_mock_exam';

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
  shuffleOrder: null // array of original indices for persistence
};

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
      shuffleOrder: state.shuffleOrder
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) { /* quota exceeded or private browsing */ }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data.shuffleOrder || !data.answers) return null;
    return data;
  } catch (e) { return null; }
}

function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

function hasSavedState() {
  return loadState() !== null;
}
