document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function () {
      alert("✅ تم إرسال التسجيل بنجاح! سيتم التواصل معك قريبًا.");
    });
  }
});
