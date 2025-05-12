const form = document.getElementById('tripForm');
const status = document.getElementById('status');
let stack = [];
let formLocked = false;

// Show message below form
function showStatus(message, isError = false) {
  status.textContent = message;
  status.style.color = isError ? 'red' : 'green';
}

// Save form using email as key
function saveForm() {
  const email = document.getElementById('email').value.trim();
  if (!email) {
    showStatus("❌ Please enter your email before saving.", true);
    return;
  }

  const data = {
    name: document.getElementById('name').value,
    email,
    phone: document.getElementById('phone').value,
    pickup: document.getElementById('pickup').value,
    dropoff: document.getElementById('dropoff').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    tripType: document.getElementById('tripType').value,
    passengers: document.getElementById('passengers').value,
    instructions: document.getElementById('instructions').value
  };

  stack.push(data);
  localStorage.setItem(`tripForm-${email}`, JSON.stringify(data));
  showStatus("✅ Form saved. You can return later.");
}

// Load saved form when email is typed
function loadFormByEmail() {
  const email = document.getElementById('email').value.trim();
  const saved = JSON.parse(localStorage.getItem(`tripForm-${email}`));
  if (saved) {
    for (let key in saved) {
      if (document.getElementById(key)) {
        document.getElementById(key).value = saved[key];
      }
    }
    showStatus("⏳ Loaded saved form for this email.");
  }
}

// Listen for email field blur
document.getElementById('email').addEventListener('blur', () => {
  loadFormByEmail();
});

// Handle form submission
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

  // Lock submission
  formLocked = true;
  localStorage.removeItem(`tripForm-${email}`);
  form.reset();
  showStatus("🎉 Request submitted! Waiting for approval...");
  alert("✅ Your request was submitted. Please wait for approval before sending a new one.");
});
