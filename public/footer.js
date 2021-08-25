function toggleFooterHamburger() {
  var x = document.getElementById("footer-hamburger-content");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}