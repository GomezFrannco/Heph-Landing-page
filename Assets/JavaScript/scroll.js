// DOM button element
const scrollButton = document.getElementById("scroll");
// scroll to top button hide and reveal
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    scrollButton.classList.add("on_window");
  } else {
    scrollButton.classList.remove("on_window");
  }
});
// scroll on click
scrollButton.addEventListener("click", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 400);
});
