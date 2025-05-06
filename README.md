# 🧾 SmartForm Validator

This is a JavaScript project that checks form inputs (name, email, password) using three main algorithms.

---

## 🧠 Algorithms Used

### 🔹 alg1 → **sorted** (Stack for Undo Feature)  
We use a **stack** to save each field value when typing.  
The last thing typed is saved at the top, and we **undo** it using `.pop()` — just like sorting the most recent input first.

---

### 🔹 alg2 → **searched** (Regex to check inputs)  
We use **regular expressions (regex)** to **search** and check if email and password follow the correct format.

- Email must be like: `example@email.com`
- Password must include capital letter, small letter, number, and special character

---

### 🔹 alg3 → **test** (Debounce)  
We use a **debounce** function to test the input after the user **stops typing** (300ms delay).  
This prevents testing too often and makes the app faster.

---

## 💻 What the Project Does

- ✅ Validates name, email, and password as the user types
- ⏳ Waits a bit before checking (debounce)
- 🔙 Lets user undo their last typed value (stack)

---


## 📁 Project Files


---

## 👨‍🎓 Assignment Info

- **Project:** SmartForm Validator
- **Team:** Jaspal Singh, Paramjit Singh
- **Algorithms Used:** Stack (alg1), Regex (alg2), Debounce (alg3)
- **Format:** alg1 → sorted | alg2 → searched | alg3 → test
- **Course:** Advanced JavaScript


---

## 📬 Contact

Feel free to reach out if you have any questions or ideas!
