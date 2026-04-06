// Timer utilities
function formatTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const el = document.getElementById('timer');
  if (el) {
    el.textContent = formatTime(state.timeLeft);
    el.className = 'timer' + (state.timeLeft < 600 ? ' warning' : '');
  }
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      submitExam();
    }
    updateTimerDisplay();
    // Auto-save every 30 seconds
    if (state.timeLeft % 30 === 0) saveState();
  }, 1000);
}
