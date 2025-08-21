let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.getElementById("sign-in-form")
const jsondata="https://api.jsonbin.io/v3/b/6897e5ced0ea881f405582c4"
const X_MASTER_KEY="$2a$10$mY79yo7Lxsipl7vgD5JcX.3Kfpk.1BOOdM4qS2qCDUuCXzd3Z6zWO"


function nextspan(spanEelement,color,message){
  let inputsibling=spanEelement.nextElementSibling //spanEelement will contain the span eleent for username and email etc
  // inputsibling=span 
  inputsibling.textContent=message;
  inputsibling.style.color=color

 
}

function applyEmailRegex(emailtest){
  const emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  if(emailregex.test(emailtest)){
    nextspan(email,"","")
    

    console.log("email match regex");
    return true
    
  }else{
    
    nextspan(email,"#E4A11B","example:user@example.com")
    console.log("email doesnt match");
    return false;
    
  }
}



 email.addEventListener('input',()=>{
      applyEmailRegex(email.value);

})


async function getuserdata(keyapi) {
  const response=await fetch(keyapi,{
    headers:{
      "X-MASTER-KEY":X_MASTER_KEY,
       "Content-Type":"application/json"
    }
  });
  const data=await response.json();
  const users=data.record;
  console.log(data);
  console.log(users);
  
  return (users);

  
}



