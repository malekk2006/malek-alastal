document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    fullname: formData.get("fullname"),
    whatsapp: formData.get("whatsapp"),
    level: formData.get("level"),
    location: formData.get("location")
  };

  console.log("Submitted:", data);

  document.getElementById("successMessage").classList.remove("hidden");
  this.reset();
});
