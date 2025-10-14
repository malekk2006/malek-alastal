document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // منع الإرسال الفوري

    // التحقق من الحقول
    const name = document.getElementById("name").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const reason = document.getElementById("reason").value.trim();

    if (!name || !whatsapp || !reason) {
      alert("يرجى تعبئة جميع الحقول قبل الإرسال.");
      return;
    }

    // عرض تحميل وهمي
    const button = form.querySelector("button");
    button.disabled = true;
    button.innerText = "جارٍ الإرسال...";

    setTimeout(() => {
      // إعادة تفعيل الزر
      button.disabled = false;
      button.innerText = "إرسال التسجيل";

      // رسالة ترحيب أنيقة
      showPopup(`شكرًا يا ${name} على التسجيل! سيتم التواصل معك عبر واتساب قريبًا.`);

      // إرسال النموذج فعليًا
      form.submit();
    }, 2000);
  });

  // نافذة منبثقة أنيقة
  function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.innerText = message;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("show");
    }, 100);

    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 500);
    }, 4000);
  }
});
