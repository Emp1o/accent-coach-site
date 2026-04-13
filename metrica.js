/*
1. Создай счётчик в Яндекс Метрике.
2. Вставь код счётчика в index.html перед подключением этого файла.
3. Замени METRICA_COUNTER_ID на свой реальный ID.
4. Создай в Метрике цели:
   - click_install
   - click_install_bottom
   - click_github
*/
(function () {
  var counterId = 'METRICA_COUNTER_ID';

  function sendGoal(name) {
    if (window.ym) ym(counterId, 'reachGoal', name);
  }

  var installBtn = document.getElementById('install-btn');
  var installBottomBtn = document.getElementById('install-btn-bottom');
  var githubBtn = document.getElementById('github-btn');

  if (installBtn) {
    installBtn.addEventListener('click', function () { sendGoal('click_install'); });
  }
  if (installBottomBtn) {
    installBottomBtn.addEventListener('click', function () { sendGoal('click_install_bottom'); });
  }
  if (githubBtn) {
    githubBtn.addEventListener('click', function () { sendGoal('click_github'); });
  }
})();
