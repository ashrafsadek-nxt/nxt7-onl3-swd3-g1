function price(){
    // get native language
    const native=document.getElementById("native");
    let nativelang=native.value;
    console.log(nativelang);
    // get target language
    const target=document.getElementById("target");
    let targetlang=target.value;
    console.log(targetlang);
    // get word count
    const count=document.getElementById("count");
    let word_count=count.value;
    console.log(word_count);
    let wordNumber=parseFloat(word_count);
    console.log(typeof(wordNumber));
    let totalPrice=0;
    if(targetlang=="english")
        {
            totalPrice=wordNumber*0.5;
            console.log("English selected, price per word is "+ totalPrice);
        }
    else if(targetlang=="spanish")
        {
            totalPrice=wordNumber*0.7;
            console.log("Spanish selected, price per word is "+ totalPrice);
        }
    else if(targetlang=="french")
        {
            totalPrice=wordNumber*0.9;
            console.log("French selected, price per word is "+ totalPrice);
        }
    else if(targetlang=="german")
        {
            totalPrice=wordNumber*1.1;
            console.log("German selected, price per word is "+ totalPrice);
        }
    else if(targetlang=="chinese")
        {
            totalPrice=wordNumber*1.3;
            console.log("Chinese selected, price per word is "+ totalPrice);
        }
    else if(targetlang=="japanese")
        {
            totalPrice=wordNumber*1.4;
            console.log("Japanese selected, price per word is "+ totalPrice);
        }
    else if(targetlang=="italian")
        {
            totalPrice=wordNumber*1.2;
            console.log("Italian selected, price per word is "+ totalPrice);
        }
    else
        {
            totalPrice=wordNumber*1.5;
            console.log("Other language selected, price per word is "+ totalPrice);
        }
    // display total price
    const totalPriceDisplay=document.getElementById("showPrice");
    totalPriceDisplay.innerHTML="Total Price: $" + totalPrice;
}

function restuser(){
    // get username
    let storedUser="rahma";
    const username=document.getElementById("username");
    let user=username.value;
    const contain=document.getElementById("container");
    if(user==storedUser){
        contain.style.display="block";
        console.log("Username is correct, showing password input.");
    }
}
function login()
{
    const head = document.getElementById('result');
    const passwordRegex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
    let storedUsername = 123;
    const username = document.getElementById('username');
    let un = username.value;
    const password = document.getElementById('password');
    let pwd = password.value;
    if(un != storedUsername)
    {
        head.innerText = "username is wrong";   
    }
    else{
        
        if(passwordRegex.test(pwd))
        {
            head.innerText = "you are login";
        }
        else{
            head.innerText = "password must contain capital letter, small letter, number, symbols and more than 8 characters";
        }
    }
}