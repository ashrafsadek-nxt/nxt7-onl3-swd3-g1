let users = [
  { username: "ahmed123", email: "ahmed@example.com" },
  { username: "sara22", email: "sara@example.com" },
  { username: "mohamed90", email: "mohamed@example.com" },
  { username: "dina11", email: "dina@example.com" },
  { username: "karim007", email: "karim@example.com" }
];

document.getElementById("signForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let inputs = document.querySelectorAll("#signForm input");
  let valid = true;

  inputs.forEach((input) => {
    let errorMsg = input.nextElementSibling;
    if (input.value.trim() === "") {
      errorMsg.textContent = `${input.placeholder} is required`;
      errorMsg.style.color = "red";
      errorMsg.style.fontSize = "12px";
      input.style.border = "2px solid red";
      valid = false;
    } else {
      errorMsg.textContent = "";
      input.style.border = "1px solid #1877F2";
    }

    
    if (input.id === "email" && input.value.trim() !== "") {
      let emailRegex = /^[^\s@]+@[^\s@]+\.com/;;
      if (!emailRegex.test(input.value.trim())) {
        errorMsg.textContent = "Please enter a valid email (e.g. name@example.com)";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        input.style.border = "2px solid red";
        valid = false;
      }
    }

    
    if (input.id === "pw" && input.value.trim() !== "") {
      let pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!pwRegex.test(input.value.trim())) {
        errorMsg.textContent = "Password must be at least 8 chars & include letters + numbers";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        input.style.border = "2px solid red";
        valid = false;
      }
    }

    if (input.id === "un" && input.value.trim() !== "") {
      let exists = users.some(user => user.username.toLowerCase() === input.value.trim().toLowerCase());
      if (exists) {
        errorMsg.textContent = "This username already exists, choose another one.";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        input.style.border = "2px solid red";
        valid = false;
      }
    }
  });

  if (valid) {
    this.submit();
  }
});

// مسح الرسالة لما يكتب المستخدم
document.querySelectorAll("#signForm input").forEach((input) => {
  input.addEventListener("input", () => {
    input.nextElementSibling.textContent = "";
    input.style.border = "1px solid #1877F2";
  });
});
