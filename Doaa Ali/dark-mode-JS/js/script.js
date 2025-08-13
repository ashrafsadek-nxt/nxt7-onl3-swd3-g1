document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("darkModeToggle");
  toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
