let taskcontainer=document.getElementById('task-container')
let container=""


let product=[
    {
        title:"jacket",
        imgsrc:"assets/imgs/product3.jpg",
        description:"simple jacket can be outfitted with many shaps",
        price:"2000eg",
        quantity:"1"
    },
     {
        title:"plover",
        imgsrc:"assets/imgs/product2.jpg",
        description:"cute and lovely plover to warm you",
        price:"1000eg",
        quantity:"1"
    },
     {
        title:"pants",
        imgsrc:"assets/imgs/trousers-2685231_1280.jpg",
        description:"these pants is very good for you",
        price:"3000eg",
        quantity:"0"
    }

]

product.forEach(x =>{
    container+=`<div class="task-content text-center text-black bg-footer w-100 d-flex align-items-center justify-content-center flex-column">
      <h3 class="text-center text-capitalize my-3 mt-2 fs-1 fw-bold title">${x.title}</h3>
      <img src="${x.imgsrc}" alt="" width="100">
      <p class="my-3 discription">${x.description}</p>
      <div class="d-flex align-items-center justify-content-around gap-3 ">
        <span class="price fw-bold fs-4 text-warning p-3 ">${x.price} </span>
        <span class="quntity text-white bg-dark border-2 px-3 py-1">${x.quantity>0?x.quantity:"unavailable"}</span>

      </div>
      

    </div>`

}) 
    
    
    
 


taskcontainer.innerHTML=container




