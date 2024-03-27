function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

document.getElementById("hamburger").addEventListener("click", toggleMenu);

function switchLanguage(lang) {
  if (lang === 'Ro') {
    document.documentElement.setAttribute('lang', 'ro');
    document.documentElement.setAttribute('dir', 'rtl');
  } else if (lang === 'Eng') {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
  }
}
switchLanguage('Ro');
document.getElementById('language-selector').addEventListener('change', function (event) {
  switchLanguage(event.target.value);
});