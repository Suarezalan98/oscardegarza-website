window.onload = () => {
  const grid = document.querySelector(".grid");

  new Masonry(grid, {
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
