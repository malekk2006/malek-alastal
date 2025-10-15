document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMessage").classList.remove("hidden");
  this.reset();
});
