function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const menuItems = document.querySelectorAll(".menu-items");
  menuItems.forEach((menuItem) => {
    if (menuItem.style.display === "block") {
      menuItem.style.display = "none";
      return;
    }
    // Check if the submenu is open and close it
    const submenu = menuItem.querySelector(".submenu");
    if (submenu && submenu.style.display === "block") {
      submenu.style.display = "none";
      return;
    }
  });
});
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