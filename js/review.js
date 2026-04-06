// Review mode logic
function startReview(filterFn) {
  state.screen = 'review';
  state.reviewMode = true;
  state.reviewFilter = filterFn || null;
  state.currentQ = 0;
  if (filterFn) {
    const idx = QUESTIONS.findIndex((q, i) => filterFn(q, i));
    if (idx >= 0) state.currentQ = idx;
  }
  document.getElementById('mapToggle').style.display = 'flex';
  render();
}

function nextFiltered(dir) {
  let i = state.currentQ + dir;
  while (i >= 0 && i < QUESTIONS.length) {
    if (!state.reviewFilter || state.reviewFilter(QUESTIONS[i], i)) {
      goTo(i);
      return;
    }
    i += dir;
  }
}

function navReview(dir) {
  if (state.reviewFilter) nextFiltered(dir);
  else goTo(state.currentQ + dir);
}

function backToResults() {
  state.screen = 'results';
  state.reviewMode = false;
  document.getElementById('mapToggle').style.display = 'none';
  document.getElementById('qMap').classList.remove('show');
  render();
}
