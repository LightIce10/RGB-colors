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
wVal.addEventListener("change", changeSize);
hVal.addEventListener("change", changeSize);
document.getElementById("setBlack").addEventListener("click", blackBTN);
document.getElementById("setWhite").addEventListener("click", whiteBTN);

function previewBTN() {
  // Colour values
  var r = +rVal.value;
  var g = +gVal.value;
  var b = +bVal.value;
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
    bVal.value = 255;
  }
  let rgbString = "rgb(" + r + ", " + g + ", " + b + ")";

  document.getElementById("display").style.background = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("rgb-line").innerHTML = rgbString;

}

function changeSize() {
  // Dimension values
  var h = +hVal.value;
  var w = +wVal.value;

  // Contain width/height values
  if (h < 50) {
    h = 50;
  } else if (h > 200) {
    h = 200;
  }

  if (w < 50) {
    w = 50;
  } else if (w > 400) {
    w = 400;
  }

  document.getElementById("display").style.height = h + "px";
  document.getElementById("display").style.width = w + "px";
}

function blackBTN() {
  document.getElementById("display").style.background = "black";
  document.getElementById("rgb-line").innerHTML = "rgb(0, 0, 0)";
  rVal.value = 0
  gVal.value = 0
  bVal.value = 0
}

function whiteBTN() {
  document.getElementById("display").style.background = "white";
  document.getElementById("rgb-line").innerHTML = "rgb(255, 255, 255)";
  rVal.value = 255
  gVal.value = 255
  bVal.value = 255
}
