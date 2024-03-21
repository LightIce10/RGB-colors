document.getElementById("preview").addEventListener("click", previewBTN);
// variables stored
let rVal = document.getElementById("redIn");
let gVal = document.getElementById("greenIn");
let bVal = document.getElementById("blueIn");

function previewBTN() {
  var r = +rVal.value;
  var g = +gVal.value;
  var b = +bVal.value;

  document.getElementById("display").style.background = `rgb(${r}, ${g}, ${b})`;

  // Contain colour values
  if (r < 0) {
    r = 0;
  } else if (r > 255) {
    r = 255;
  }

  if (g < 0) {
    g = 0;
  } else if (g > 255) {
    g = 255;
  }

  if (b < 0) {
    b = 0;
  } else if (b > 255) {
    b = 255;
  }
}
