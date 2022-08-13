import "../style/style.scss";
import "animate.css";
import Masonry from "masonry-layout";

window.onload = () => {
  const grid = document.querySelector(".grid");

  const masonry = new Masonry(grid);
};

// $(".grid").masonry({
//   itemSelector: ".grid-item",
//   columnWidth: 160,
//   horizontalOrder: true,
// });
