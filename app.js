function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
  }
  document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    toggleMenu();
    hamburger.addEventListener('click', toggleMenu);
  });










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




function toggleDropdown(dropdownButton) {
  const dropdownMenuId = dropdownButton.getAttribute('data-target');
  const dropdownMenu = document.querySelector(`#${dropdownMenuId}`);
  dropdownMenu.classList.toggle('show');
}





const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});
subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});