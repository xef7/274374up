document.getElementById("linkForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const linkInput = document.getElementById("linkInput").value.trim();
  if (linkInput === "") {
    setStatusMessage("Please enter a valid link.", "error");
    return;
  }
  uploadLink(linkInput);
});

function uploadLink(link) {
  // ارسل الرابط الى منصة الرفع هنا (مثل قلتش أو ريبل ات)
  // يمكنك استخدام Fetch API أو أي مكتبة آخرى لإرسال البيانات
  // عندما يتم رفع الرابط بنجاح، قم بعرض رسالة تأكيد للمستخدم
  setStatusMessage("Link uploaded successfully.", "success");
}

function setStatusMessage(message, type) {
  const statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = message;
  statusMessage.className = type;
}
