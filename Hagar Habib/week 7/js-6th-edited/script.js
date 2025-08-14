function b(x) {
  const p = document.getElementById("first");
  p.innerText = x;
}

function a() {
  b("ahmad");
}

a();
//============ callback
function sum(y) {
  const p = document.getElementById("second");
  p.innerText = y;
}

function total(num1, num2) {
  let add = num1 + num2;
  return add;
}
sum(total(2, 10));
//================
function show(z) {
  const p = document.getElementById("third");
  p.innerText = z;
}
function getShow(num1, num2, myCall) {
  let add = num1 + num2;
  myCall(add);
}
getShow(2, 10, show); //show is callback function

//=================== callback
const nums = Array(10, 4, 11, 6, 1, 4, 2);
function rrr(num, call) {
  const arr = []; // empty array to hold the greater than 4 num
  for (let x of num) {
    if (call(x)) {
      arr.push(x);
    }
  }
  return arr;
}
let f = rrr(nums, (y) => y > 4);
const p = document.getElementById("fourth");
p.innerText = f;

//Asynchronous

function display() {
  const p = document.getElementById("fifth");
  p.innerText = "Hello JS";
}
setTimeout(display, 4000);

//==============count down
let counter = 5;

let timerId = setInterval(() => {
  // console.log(counter);
  counter--;

  if (counter === 0) {
    clearInterval(timerId);
    console.log("Time's up!");
  }
}, 1000);

//=============== promise
// info function in promise , t , f ,fuction(value), function (error)---> all is functions
function info(data) {
  const p = document.getElementById("sixth");
  p.innerText = data;
}

//create promise object
let pro = new Promise(function (t, f) {
  //process take time
  let d = 2;
  if (d > 0) {
    t("true");
  } else {
    f("false");
  }
});
// console.log(pro);
// console.log(typeof pro);
console.log(10);
pro.then(
  function (value) {
    info(value);
  },
  function (error) {
    info(error);
  }
);

//=========== simple ex for promise

let myPromise = new Promise((resolve, reject) => {
  resolve("Hello World!");
});

myPromise.then((result) => {
  console.log(result);
});
//============
let myPromise1 = new Promise((resolve, reject) => {
  let success = false; // if false then error

  if (success) {
    resolve(" Everything is fine!");
  } else {
    reject(" Something went wrong!");
  }
});

myPromise1
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

console.log(myPromise1);
//====================== pizza ex Promise
let pizzaPromise = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if (success === true) {
      resolve("Pizza is ready!");
    } else {
      reject("No pizza for you!");
    }
  }, 3000);
});

pizzaPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
//=============
let checkEven = new Promise((resolve, reject) => {
  let number = 3;
  if (number % 2 === 0) {
    resolve("The number is even");
  } else {
    reject("The number is odd");
  }
});
checkEven
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
//=================
let order = new Promise((resolve, reject) => {
  let orderReady = true;
  setTimeout(() => {
    if (orderReady) {
      resolve("Order shipped!");
    } else {
      reject("Order delayed!");
    }
  }, 2000);
});

// order
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//async await ..
async function checkDelivery() {
  try {
    let result = await order;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
checkDelivery();
