// variables stored
let rVal = document.getElementById("redIn");
let gVal = document.getElementById("greenIn");
let bVal = document.getElementById("blueIn");
let wVal = document.getElementById("widthIn");
let hVal = document.getElementById("heightIn");
// Event Listener
rVal.addEventListener("input", previewBTN);
gVal.addEventListener("input", previewBTN);
bVal.addEventListener("input", previewBTN);

function previewBTN() {
  var r = +rVal.value;
  var g = +gVal.value;
  var b = +bVal.value;
  let rgbString = "rgb(" + r + ", " + g + ", " + b + ")";
  var height = +hVal.value;
  var width = +wVal.value;

  document.getElementById("display").style.background = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("rgb-line").innerHTML = rgbString;
  // Contain colour values
  if (r < 0) {
    r = 0;
    rVal.value = 0;
  } else if (r > 255) {
    r = 255;
    rVal.value = 255;
  }

  if (g < 0) {
    g = 0;
    gVal.value = 0;
  } else if (g > 255) {
    g = 255;
    gVal.value = 255;
  }

  if (b < 0) {
    b = 0;
    bVal.value = 0;
  } else if (b > 255) {
    b = 255;
    bVal.value = 0;
  }
}
