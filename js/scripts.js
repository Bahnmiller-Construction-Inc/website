document.addEventListener("DOMContentLoaded", function () {
  console.log("scripts.js loaded"); // Debug message

  // Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  });

  // 🔹 Modal Functionality
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  // Hide modal by default
  modal.style.display = "none";

  // Select both images and buttons for event listeners
  document.querySelectorAll(".image-container").forEach((container) => {
    container.addEventListener("click", function () {
      const img = this.querySelector("img"); // Get image inside container
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // When the close button (×) is clicked, hide the modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // If user clicks outside the modal image, close the modal
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
