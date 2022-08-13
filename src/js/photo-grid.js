import "../style/style.scss";
import "animate.css";

window.onload = () => {
  const grid = document.querySelector(".grid");

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
  });
};

// $(".grid").masonry({
//   itemSelector: ".grid-item",
//   columnWidth: 160,
//   horizontalOrder: true,
// });
