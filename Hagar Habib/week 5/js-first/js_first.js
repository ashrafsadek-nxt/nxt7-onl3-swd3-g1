var x = 5;
console.log(x);
let y = 20.35;
console.log(y);
const pi = 3.14; // constant متغير بقيمة ثابته لا تتغير
console.log(pi);
var x = 5; // redeclare
console.log(x);
x = 10;
console.log(x); // reuse = change value
y = 100;
console.log(y); // reuse = change value
// var, let and const Scope
// let, const => block scope
// conditions => if
// loops => for, while, do ... while, ...
// function
console.log(typeof x);
console.log(typeof y);
console.log(typeof pi);
let firstname = "ahmed";
console.log(typeof firstname); //string
let lastname = "ahmed";
console.log(typeof lastname);
let fullname = ["aly", "amr"];
console.log(typeof fullname); //object
let eee = [
  [10, 20],
  ["aly", "amr"],
];
console.log(typeof eee); //object
let nums = [12, 45, 66];
console.log(typeof nums); //object
let aaa = true;
console.log(typeof aaa); //boolean
let aaaa = false;
console.log(typeof aaaa);
let bb = undefined;
console.log(typeof bb); //undefined
let bbb = null;
console.log(typeof bbb); //object
const c = Symbol();
console.log(typeof c); //symbol
const ff = new Array(3);
console.log(ff);
console.log(typeof ff);
const fff = new Array(10, 20, 30);
console.log(fff);
console.log(typeof fff);
const sum = function () {};
console.log(typeof sum);
const total = (x) => "nxt7"; // arrow function
console.log(typeof total);
// typeof() => js method to know datatype of variable
// casting = datatype conversion
let u = "5" + 10; // concatenation
console.log(u);
let uu = "5" * 10; // casting
console.log(uu);
let uuu = "50" / 10; // casting
console.log(uuu);
let uuuu = "50" - 10; // casting
console.log(uuuu);
let rr = true; // 1
let rrr = rr + 10;
console.log(rrr);
rr = false; // 0
rrr = rr - 10;
console.log(rrr);
console.log(rr + " " + firstname);
let degree = 100;
console.log(typeof degree); //number
let nameOne = String(degree);
console.log(nameOne);
console.log(typeof nameOne);
degree = 200;
console.log(typeof degree);
nameOne = degree.toString();
console.log(nameOne);
console.log(typeof nameOne); //string
let oo = String(null);
console.log(typeof oo);
oo = String(undefined);
console.log(typeof oo);
oo = String([10, 20]);
console.log(oo);
let mark = "20";
console.log(typeof mark);
mark = mark + 10;
console.log(mark);
let mark2 = parseInt(mark);
console.log(mark2 + 45);
mark2 = parseFloat(mark);
console.log(mark2 + 45);
let w = "42.25vh";
console.log(parseInt(w));
console.log(Number(w));
console.log(parseFloat(w));
w = "vh";
console.log(parseInt(w));
console.log(Number(w));
console.log(parseFloat(w));
console.log(Number(true));
console.log(Number(false));
// boolean() casting to false
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean());
console.log(Boolean(""));
// boolean() casting to true
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-100));
console.log(Boolean("aaa"));
console.log(Boolean("333"));

// output
alert("hello");
confirm("hello from confirm");
prompt("how are you?");
document.getElementById("firstP").innerText = "ahmed";
document.getElementById("firstDv").innerHTML = "<h1>hello form JS</h1>";
