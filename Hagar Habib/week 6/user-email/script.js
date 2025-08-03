document.querySelector("form").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  let errors = [];

  if (!emailRegex.test(email)) {
    errors.push("Invalid email format.");
  }

  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must be at least 8 characters long and include uppercase, lowercase letters, and a number."
    );
  }

  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join("\n"));
  }
});
