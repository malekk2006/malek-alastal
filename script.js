document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    // عرض رسالة تأكيد بعد الإرسال
    alert("✅ تم إرسال التسجيل بنجاح! سيتم التواصل معك قريبًا.");
  });
});
