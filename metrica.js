/*
Что нужно сделать:
1. Создай счётчик в Яндекс Метрике.
2. Вставь код счётчика в index.html перед этим скриптом.
3. Замени METRICA_COUNTER_ID на свой ID.
4. Создай цели:
   - click_install
   - click_github
   - click_install_bottom
*/

(function () {
  var counterId = '108492491';

  function sendGoal(name) {
    if (window.ym) ym(counterId, 'reachGoal', name);
  }

  var installBtn = document.getElementById('install-btn');
  var githubBtn = document.getElementById('github-btn');
  var installBottomBtn = document.getElementById('install-btn-bottom');

  if (installBtn) {
    installBtn.addEventListener('click', function () {
      sendGoal('click_install');
    });
  }

  if (githubBtn) {
    githubBtn.addEventListener('click', function () {
      sendGoal('click_github');
    });
  }

  if (installBottomBtn) {
    installBottomBtn.addEventListener('click', function () {
      sendGoal('click_install_bottom');
    });
  }
})();
