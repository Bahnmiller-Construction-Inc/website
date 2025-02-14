// Make sure the DOM is ready before running your scripts.
// js/scripts.js
$(document).ready(function () {
  console.log("scripts.js loaded"); // Debug: ensure this prints in the console

  $(".owl-carousel").owlCarousel({
    loop: true, // Enable looping
    margin: 10, // Space between items
    nav: true, // Show next/prev arrows
    dots: true, // Show pagination dots
    responsive: {
      0: { items: 1 }, // 1 slide on small screens
      768: { items: 2 }, // 2 slides on medium screens
      1024: { items: 3 }, // 3 slides on larger screens
    },
  });
});

// Add year to footer
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.querySelector("#sec-7 p");
  const currentYear = new Date().getFullYear();
  yearElement.innerHTML = `Copyright © ${currentYear} | Bahnmiller Construction Inc.`;
});
