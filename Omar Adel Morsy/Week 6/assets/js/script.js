const divs=document.getElementsByTagName("div");
console.log(divs);

function action(){
  for(let i=0;i<divs.length;i++){
    divs[i].classList.toggle("show")
  }
}