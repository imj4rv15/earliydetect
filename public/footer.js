function toggleFooterHamburger() {
  var x = document.getElementById("footer-hamburger-content");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function Hover(element) {
    element.src = element.src.replace('material-outlined','material')
}
function unHover(element) {
    element.src = element.src.replace('material','material-outlined')
}
