let formLocked = false;

// Submit handler
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (formLocked) {
    alert("⏳ Please wait! Your previous request is still pending approval.");
    return;
  }

  const email = document.getElementById('email').value.trim();
  if (!email) {
    showStatus("❌ Please enter your email before submitting.", true);
    return;
  }

  // Lock the form
  formLocked = true;
  localStorage.removeItem(`tripForm-${email}`);
  form.reset();
  showStatus("🎉 Request submitted! Waiting for approval...");
  alert("✅ Your request was submitted. Please wait for approval before sending a new one.");
});
