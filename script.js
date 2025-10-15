document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    fullname: formData.get("fullname"),
    whatsapp: formData.get("whatsapp"),
    level: formData.get("level"),
    location: formData.get("location")
  };

  // إرسال البيانات إلى البريد (ممكن تستخدم Formspree أو Google Apps Script)
  console.log("تم إرسال البيانات:", data);

  document.getElementById("successMessage").classList.remove("hidden");
  this.reset();
});
