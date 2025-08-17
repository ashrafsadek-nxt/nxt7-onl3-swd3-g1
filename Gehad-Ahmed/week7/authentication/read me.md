# 📝 User Authentication Project (Sign Up & Login)

This project is a simple **User Authentication System** built with **HTML, CSS, and JavaScript**.  
It provides **Sign Up** and **Login** functionalities, with live input validation using **Regex**.  
User data is stored in a JSON database and checked during login.

---

## 🚀 Features
- ✅ **Sign Up Form** with:
  - Username validation (must start with a letter, can contain numbers, `_`, `-`, not less than 4 chars).
  - Email validation (valid email format).
  - Password validation (strong password with uppercase, lowercase, number, and special character).
  - Confirm password check.
  - "Agree to terms" checkbox.
- ✅ **Login Form** with email & password check.
- ✅ **Validation messages** displayed under inputs.
- ✅ **Redirect to Home page** after successful login.

---

## 📸 UI Screenshots

### 🔹 Sign Up Screen
 

![Sign Up UI Screenshot](./login-access/assets/screencapture-signup.png)


Explanation:
- **Username field** → must follow specific regex rules.  
- **Email field** → checks valid email structure.  
- **Password & Confirm Password** → must match and follow password rules.  
- **Sign Up Button** → disabled until all inputs are valid.  

---

### 🔹 Regex Validation Rules (Sign Up Screen) 

![Regex Validation Screenshot](./login-access/assets/screan-validation.png)

Explanation of rules:
- **Username Regex** → `^(?=^[A-Za-z])(?=.*\d?)[A-Za-z0-9_-]{4,16}$`  
  - Must start with a letter  
  - Can include numbers (not at the start)  
  - Can include `_` or `-`  
  - Min length: 4  

- **Password Regex** → `^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{7,}$`  
  - At least 1 number  
  - At least 1 uppercase & lowercase  
  - At least 1 special character  
  - Minimum length: 7  

---

## 📂 Project Structure
/project-root
│── index.html # Sign Up page
│── login.html # Login page
│── home.html # Redirect page after login
│── /css
│ └── style.css # Styles
  
│── /js
│ └── index.js # Shared JavaScript functions
│── /assets
│ └── signup-ui.png
│ └── regex-validation.png
│── README.md



