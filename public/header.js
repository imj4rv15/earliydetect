function toggleHamburger() {
  var x = document.getElementById("header-hamburger-content");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}