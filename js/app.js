const $ = document;
const header = $.querySelector(".header");
const main = $.querySelector(".main");

/* scrolled header */
$.addEventListener("scroll", function () {
  if ($.documentElement.scrollTop > 0) {
    header.classList.add("scrolled-header");
    main.classList.add("scrolled-header");
  } else {
    header.classList.remove("scrolled-header");
    main.classList.remove("scrolled-header");
  }
});
