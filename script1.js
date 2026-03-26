// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // MOBILE NAV TOGGLE
  const toggleButton = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
  });

  // REMOVE LOADER AFTER 7s
  const loader = document.querySelector(".loader-wrapper");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.display = "none";
    }, 7000);
  });
});

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 4000); //  seconds bago mag fade out ang loading screen
});


// ================================
// Open PDFs viewable-only on new tab
// ================================
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".view-certificate").forEach(btn => {
    btn.addEventListener("click", function(e){
      e.preventDefault();
      const pdfUrl = this.getAttribute("data-pdf");
      
      // Open PDF in new tab with toolbar hidden
      window.open(pdfUrl + "#toolbar=0", "_blank", "noopener,noreferrer");
    });
  });
});

