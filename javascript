function uploadLink() {
  var linkInput = document.getElementById("linkInput");
  var link = linkInput.value.trim();
  
  if (link === "") {
    setStatusMessage("Please enter a valid link.", "error");
    return;
  }

  // إرسال الرابط إلى RequestBin هنا (يمكن استخدام AJAX أو Fetch)

  setStatusMessage("Link uploaded successfully.", "success");
  linkInput.value = "https://eocahn12rwzxr3j.m.pipedream.net";
}

function setStatusMessage(message, type) {
  var statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = message;
  statusMessage.className = type;
}
