currentselect='card-1';
imgText=document.getElementsByClassName(currentselect)[0].firstElementChild //select text for new current
imgText.style.opacity=1;
document.addEventListener('click', function(e){
    if(e.target.classList.contains('select')){
        document.getElementsByClassName(currentselect)[0].classList.remove('size-s');
        console.log(document.getElementsByClassName(currentselect)[0]);
        e.target.classList.add('size-s');
        //hide text
        imgText=document.getElementsByClassName(currentselect)[0].firstElementChild
        imgText.style.opacity=0;
        
        currentselect=e.target.classList[1] //set new current
        //show text 
        setTimeout(function(){ //text appear after selected img take a suitable size
            imgText=document.getElementsByClassName(currentselect)[0].firstElementChild //select text for new current
            imgText.style.opacity=1;
        },300)
        
    }
    
    
});