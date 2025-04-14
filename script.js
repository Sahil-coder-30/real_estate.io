function toggleDropdown(element) {
    element.classList.toggle('open');
  }
  
  // Optional: close if clicked outside
  document.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
