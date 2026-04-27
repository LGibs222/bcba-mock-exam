// App initialization, keyboard navigation, touch gestures, results export

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (state.screen !== 'exam' && state.screen !== 'review') return;
  // Don't capture if user is in a form field
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  switch (e.key) {
    case '1': case 'a': case 'A':
      if (state.screen === 'exam') selectAnswer(0);
      break;
    case '2': case 'b': case 'B':
      if (state.screen === 'exam') selectAnswer(1);
      break;
    case '3': case 'c': case 'C':
      if (state.screen === 'exam') selectAnswer(2);
      break;
    case '4': case 'd': case 'D':
      if (state.screen === 'exam') selectAnswer(3);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      if (state.screen === 'review') navReview(-1);
      else goTo(state.currentQ - 1);
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (state.screen === 'review') navReview(1);
      else goTo(state.currentQ + 1);
      break;
    case 'f': case 'F':
      if (state.screen === 'exam') toggleFlag();
      break;
    case 'm': case 'M':
      toggleMap();
      break;
  }
});

// Touch swipe for prev/next question
(function() {
  let touchStartX = 0;
  let touchStartY = 0;
  const MIN_SWIPE = 50;

  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    if (state.screen !== 'exam' && state.screen !== 'review') return;
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    // Only trigger if horizontal swipe is dominant
    if (Math.abs(dx) < MIN_SWIPE || Math.abs(dy) > Math.abs(dx)) return;
    if (dx > 0) {
      // Swipe right = previous
      if (state.screen === 'review') navReview(-1);
      else goTo(state.currentQ - 1);
    } else {
      // Swipe left = next
      if (state.screen === 'review') navReview(1);
      else goTo(state.currentQ + 1);
    }
  }, { passive: true });
})();

// CSV results export — scored items only (matches real BCBA scoring)
function exportResults() {
  let csv = 'Domain,Domain Name,Correct,Total Scored,Percentage\n';
  DOMAINS.forEach(d => {
    const dqs = QUESTIONS
      .map((q, i) => ({ q, i }))
      .filter(({ q, i }) => q.domain === d.code && isScored(i));
    if (!dqs.length) return;
    const dCorrect = dqs.filter(({ q, i }) => state.answers[i] === q.correct).length;
    const dPct = Math.round((dCorrect / dqs.length) * 100);
    csv += `${d.code},"${d.name}",${dCorrect},${dqs.length},${dPct}%\n`;
  });

  let totalCorrect = 0, scoredTotal = 0;
  QUESTIONS.forEach((q, i) => {
    if (!isScored(i)) return;
    scoredTotal++;
    if (state.answers[i] === q.correct) totalCorrect++;
  });
  const totalPct = scoredTotal > 0 ? Math.round((totalCorrect / scoredTotal) * 100) : 0;
  csv += `\nOverall,Scored Total,${totalCorrect},${scoredTotal},${totalPct}%\n`;
  csv += `Note,"${state.unscoredSet.size} unscored field-test items excluded from scoring"\n`;

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BCBA_Mock_Exam_Results_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Enter key on focused options
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && e.target.classList.contains('option')) {
    e.target.click();
  }
});

// Init
render();
