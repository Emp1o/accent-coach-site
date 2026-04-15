(function () {
  var counterId = '108492491';

  function sendGoal(name) {
    if (window.ym) ym(counterId, 'reachGoal', name);
  }

  var installBtn = document.getElementById('install-btn');
  var installBottomBtn = document.getElementById('install-btn-bottom');
  var githubBtn = document.getElementById('github-btn');
  var feedbackBtn = document.getElementById('feedback-btn');
  var feedbackBtnTop = document.getElementById('feedback-btn-top');

  if (installBtn) {
    installBtn.addEventListener('click', function () { sendGoal('click_install'); });
  }
  if (installBottomBtn) {
    installBottomBtn.addEventListener('click', function () { sendGoal('click_install_bottom'); });
  }
  if (githubBtn) {
    githubBtn.addEventListener('click', function () { sendGoal('click_github'); });
  }
  if (feedbackBtnTop) {
    feedbackBtnTop.addEventListener('click', function () { sendGoal('click_feedback_top'); });
  }
  if (feedbackBtn) {
  feedbackBtn.addEventListener('click', function () { sendGoal('click_feedback'); });
  }
})();
