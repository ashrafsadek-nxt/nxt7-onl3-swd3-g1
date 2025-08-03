let taskcontainer=document.getElementById('task-container')
let container=""

let srcobj={
    src1:"assets/imgs/order-food 1.png",
    src2:"assets/imgs/food 1.png",
    src3:"assets/imgs/order 1.png"
}

for (x in srcobj) {
    container+=`<div class="task-content text-center bg-primary-subtle text-black bg-footer d-flex align-items-center justify-content-center flex-column">
       <h3 class="text-center my-3 mt-5 fw-bold">task heading</h3>
       <img src="${srcobj[x]}" width="100" alt="">
       <p class="my-3">Lorem ipsum dolor sit rem id incidunt h placeat tenetur illum asperiores odit.</p>
     </div>`
    
    
}

taskcontainer.innerHTML=container


