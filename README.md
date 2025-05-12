# 🧾 SmartForm Validator – Trip Booking Form

This is our college project for SmartForm Validator – MVP #3.  
It lets users fill out a trip booking form, save it, and submit it when ready.

---

## 👥 Team 1

- **Jaspal Singh**
- **Param**

---

## ✅ What This Form Does

- Users enter trip details (name, email, pickup, drop-off, time, etc.)
- Users click **Save Form** to save their info
- When they come back, their form is auto-filled based on their email
- After clicking **Submit Request**, the user must wait for approval before sending another request

---

## 🧠 Core Algorithms Used

### 1. 📦 **Stack** → Used to save form state
We use a stack to store form data each time the user clicks "Save Form".  
This lets us track changes and reuse that data if needed later.

### 2. 🔁 **Debounce** → Used when checking for saved data
When the user types their email, debounce waits 500ms before checking if there's a saved form.  
This stops the app from checking too often while typing.

### 3. 🔍 **Regex / Pattern Matching** → Used to check email input
We make sure the email is not empty (and can be extended to check valid email format).  
This prevents saving blank or broken data.

---

## 🛠️ Tech Used

- HTML for form structure  
- CSS for clean design  
- JavaScript for logic and algorithms  
- `localStorage` to save form data without a server

---

## 📁 Files

