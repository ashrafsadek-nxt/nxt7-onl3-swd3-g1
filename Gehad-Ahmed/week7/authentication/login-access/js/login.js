let loginbtn=document.getElementById("loginBtn");
form.addEventListener('submit',async (e)=>{
  e.preventDefault()

    
  const emailVal=email.value.trim();
  const passVal=password.value;

  
  let emailfound=false;
  let users= await getuserdata(jsondata);
  let userdata=users.users;
  
  for (let user of userdata){
    if (emailVal.toLowerCase()===user.email.toLowerCase().trim() && password.value===user.password){
        console.log("good acsess this user exist");
    emailfound=true;
    break;

}
           
    
    else{
        console.log("try again it is not right");
        
    }

  }


  if(!emailfound  )
    {
    console.log("wrong email or password");



  }else{
            window.location.href="home.html"

  }
})  
  

