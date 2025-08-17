


let signupBtn=document.getElementById("signupBtn")

let username=document.getElementById("username")
let confirmPassword=document.getElementById("confirmPassword")
let terms=document.getElementById("agree")
let agreelabel=document.querySelector('.agreebtn')
// const jsondata="https://api.jsonbin.io/v3/b/6897e5ced0ea881f405582c4"
// const X_MASTER_KEY="$2a$10$mY79yo7Lxsipl7vgD5JcX.3Kfpk.1BOOdM4qS2qCDUuCXzd3Z6zWO"


// validation 



// compare the password with password match
function passmatch(pass,confirmpass){
  if(pass==confirmpass & pass!="" & pass!=""){
    console.log("pass matches");
    return true
  }else{
    console.log("password doesn't mtch");
    
  }


}

// to set the regex



function applyUsernameRegex(usernamep){
  const usernameRegex=/^(?=.{4,}$)[A-Za-z][A-Za-z0-9_!\-]*\d[A-Za-z0-9_!\-]*$/

    if(usernameRegex.test(usernamep)){
      nextspan(username,"green","username looks good ✅")

    console.log("username match regex");
    
  }else{
          nextspan(username,"#E4A11B","Username must start with a letter,  _ ,contain number!")


    console.log("username doesnt match regex");
    
  }

}
// applyUsernameRegex(username.value)
function applyPassRejex(pass){
    const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\-?])[A-Za-z\d!@#$%^&*_\-?]{8,}$/

  if(passregex.test(pass)){
    nextspan(password,"green ","good password ✅")


    console.log("pass match regex");
    
   }else{
    nextspan(password,"#E4A11B ","password At least one uppercase letter (A–Z),lowercase letter (a–z), number, special character, min-lenght 8 chars 😃")

    console.log("pass doesnt match regex");
    
   }
}



// start appliny regex on changing the input value


username.addEventListener('input',()=>{
  applyUsernameRegex(username.value)

})
password.addEventListener('input',()=>{
  applyPassRejex(password.value)


    
  
  
})
confirmPassword.addEventListener('input',()=>{
  if(passmatch(password.value,confirmPassword.value)){
      nextspan(confirmPassword,"green"," password matches ✅")
      console.log("maty matchy");
      

  }
  else{
        nextspan(confirmPassword,"#E4A11B "," passwords don't match 😕")

  } 

})

function agreeterms(){
  if (!agree.checked) {
    // e.preventDefault();
     nextspan(agreelabel,"#E4A11B","please check to continue")
  } else {
     nextspan(agreelabel,"red"," ")
  }
  
}

// ////////////end vlidtion////////////////////////////////
// start get update data
// get user data 


// update user data
async function updateData(updateusersdata){
  const res=await fetch(jsondata,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "X-MASTER-KEY":X_MASTER_KEY
    },
    body: JSON.stringify({users:updateusersdata})

  })
  const data=await res.json();
  console.log("updated data",data);
  

}

async function addUser(newUser) {
  const data = await getuserdata(jsondata); 
  const userarray = data.users; // i want to get array to modify on it (the array to push and pop)
  userarray.push(newUser); 
  await updateData(userarray); 
}
form.addEventListener("change",()=>{
    if (username.value === "" || email.value === "" || password.value === "" || !agree.checked) {
    signupBtn.disabled = true;   
} else {
    signupBtn.disabled = false;
}

})

// !agree.checked ===>checkbox is 



// apply all in click
// signupBtn.addEventListener('click',async ()=>{
//   const usernamVal=username.value.trim();
//   const emailVal=email.value.trim();
//   const passVal=password.value;
//   const passConfirmVal=confirmPassword.value;

//   let newuser={
//     username:usernamVal,
//     email:emailVal,
//     password:passVal
//   }
  

  
//   let emailfound=false;
//   let users= await getuserdata(jsondata);
//   let userdata=users.users;
//   // console.log(userdata);

//   // trim to remove all spaces
//   for (let user of userdata) {
//    if(emailVal.toLowerCase()===user.email.toLowerCase().trim()){
//     console.log("this email alredy exist");
//     emailfound=true
//     break ;
  
//    }    
//   }
//   //  just to check out on emailflag
//   // console.log(emailfound);
  
//     agreeterms()


//   if(!emailfound && usernamVal !== "" && passVal !== "" && passConfirmVal !== "")
//     {

//     applyEmailRegex(emailVal);
//     applyPassRejex(passVal)
//     passmatch(passVal,passConfirmVal);
//     addUser(newuser);


//     console.log("the user has been added sucssesfffffulyyyy");
    
//     // window .location.href="login.html"
   


//   }
  
  



  

  

// })



form.addEventListener('submit',async (e)=>{
  e.preventDefault()

    



  const usernamVal=username.value.trim();
  const emailVal=email.value.trim();
  const passVal=password.value;
  const passConfirmVal=confirmPassword.value;

  let newuser={
    username:usernamVal,
    email:emailVal,
    password:passVal
  }
  

  
  let emailfound=false;
  let users= await getuserdata(jsondata);
  let userdata=users.users;
  
  // trim to remove all spaces
  for (let user of userdata) {
   if(emailVal.toLowerCase()===user.email.toLowerCase().trim()){
    console.log("this email alredy exist");
    emailfound=true
    break ;
  
   }    
  }
  //  just to check out on emailflag
  // console.log(emailfound);
  
    agreeterms()


  if(!emailfound && usernamVal !== "" && passVal !== "" && passConfirmVal !== "")
    {

    applyEmailRegex(emailVal);
    applyPassRejex(passVal)
    passmatch(passVal,passConfirmVal);
    await addUser(newuser);


    console.log("the user has been added sucssesfffffulyyyy");
    
    window .location.href="login.html"
   


  }
})  
  
