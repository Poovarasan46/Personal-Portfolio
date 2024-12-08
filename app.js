const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
// close sidebar with close button
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// Close sidebar when clicking a link
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
});
// set year
date.innerHTML = new Date().getFullYear();
