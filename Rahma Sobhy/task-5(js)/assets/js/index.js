function login(){
    const head = document.getElementById('result');
    const re_email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; 
    const email = document.getElementById('email');
    let em = email.value;
    const passwordRegex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
    const password = document.getElementById('password');
    let pwd = password.value;
    if(re_email.test(em)){
        if(passwordRegex.test(pwd)){
            head.innerText = "you are login";
        }
        else{
            head.innerText = "password is wrong";
        }
    }
    else{
        head.innerText = "email is wrong";
    }
}

    function toggleDarkMode() {
        document.body.classList.toggle("dark");
    }



