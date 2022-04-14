import "../style/style.scss"
import "animate.css"

const menuToggle = document.querySelector(".toggle");
const homepage = document.querySelector(".homepage");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  homepage.classList.toggle("active");
});
