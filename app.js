const form = document.getElementById('tripForm');
const status = document.getElementById('status');
let stack = [];

// Save current input values to stack
function pushToStack(data) {
  stack.push(data);
}

// Debounce function to delay calls
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

// Save form data to localStorage
function saveForm() {
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    pickup: document.getElementById('pickup').value,
    dropoff: document.getElementById('dropoff').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    tripType: document.getElementById('tripType').value,
    passengers: document.getElementById('passengers').value,
    instructions: document.getElementById('instructions').value
  };

  pushToStack(data);
  localStorage.setItem('tripFormData', JSON.stringify(data));
  status.textContent = "✅ Form saved. You can come back later.";
}

// Load saved data on page load
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem('tripFormData'));
  if (saved) {
    for (let key in saved) {
      if (document.getElementById(key)) {
        document.getElementById(key).value = saved[key];
      }
    }
    status.textContent = "⏳ Loaded saved form.";
  }
};

// Form submit handler
form.addEventListener('submit', function (e) {
  e.preventDefault();
  localStorage.removeItem('tripFormData');
  alert("🎉 Request submitted!");
  form.reset();
  status.textContent = "";
});
