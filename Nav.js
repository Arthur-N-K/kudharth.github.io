// Mobile nav toggle — vanilla JS, no jQuery dependency.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var list = document.querySelector('.nav-list');

  if (toggle && list) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      toggle.classList.toggle('active');
      list.classList.toggle('open');
    });
  }

  // Mark the current page's nav link as active.
  var here = window.location.pathname.split('/').pop() || 'PersonalWebsite.html';
  document.querySelectorAll('.nav-list a').forEach(function (a) {
    var target = a.getAttribute('href').split('/').pop();
    if (target === here) a.classList.add('active');
  });
});
