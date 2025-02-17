document.addEventListener("DOMContentLoaded", function () {
  console.log("scripts.js loaded"); // Debug message

  // 🔹 Initialize Owl Carousel
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

  // 🔹 Modal Elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  // 🔹 When an image-container is clicked, open the modal and set the image
  document.querySelectorAll(".image-container").forEach((container) => {
    container.addEventListener("click", function () {
      const img = this.querySelector("img");
      // Add our .modal-open class
      modal.classList.add("modal-open");
      // Update modal image src
      modalImg.src = img.src;
    });
  });

  // 🔹 Close button click
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("modal-open");
  });

  // 🔹 Clicking outside the image closes the modal
  //    (Check if the user clicked the backdrop itself)
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("modal-open");
    }
  });
});
