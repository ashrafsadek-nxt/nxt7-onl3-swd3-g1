const warnings = document.querySelectorAll(".warning");

warnings.forEach(warning => {
    warning.style.display = "none";
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    let hasError = false;
    warnings.forEach(warning => {
        warning.style.display = "none";
    });

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/g;
    const usernameRegex = /^[a-zA-Z0-9 _-]+$/;

    if (username === "") {
        hasError = true;
        warnings[0].style.display = "block";
    } else if (!username.match(usernameRegex)) {
        hasError = true;
        warnings[1].style.display = "block";
    }
    if (email === "" || !email.match(emailRegex)) {
        hasError = true;
        warnings[2].style.display = "block";
    }
    if (password === "") {
        hasError = true;
        warnings[3].style.display = "block";
    }

    if (hasError) {
        e.preventDefault();
    }
});
    