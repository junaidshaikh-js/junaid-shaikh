// mobile navigation
const hamburgerMenuBtn = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-links");

const toggleNav = () => {
  if (navLinks.classList.contains("show")) {
    navLinks.classList.remove("show");
    hamburgerMenuBtn.innerHTML = ' <i class="fas fa-2x fa-bars"></i>';
  } else {
    navLinks.classList.add("show");
    hamburgerMenuBtn.innerHTML = '<i class="fas fa-2x fa-times"></i>';
  }
};

hamburgerMenuBtn.addEventListener("click", toggleNav);

console.log(hamburgerMenuBtn);
