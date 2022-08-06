import "../style/style.scss";
import "animate.css";

let w = screen.width;

//first check function
//      how many files are in photo/video folder from dropbox
//      check index of object received from dropbox
//

//second check function
//      if screen is => 1440px display 4 columns
//      else if screen is => 768px display 3 columns
//      else display 2 columns

function screenSize(pixel) {
  if (pixel >= 1440) {
    console.log(pixel, typeof pixel, "large");
  } else if (pixel >= 768) {
    console.log("medium", pixel);
  } else {
    console.log("small");
  }
}

screenSize(w);
// then combine both functions and add through document.(blahblah) to parent element to make grid
