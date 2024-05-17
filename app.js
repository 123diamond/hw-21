/*
 - OPERATORS
   -arithmetics
     +,-,/,*,**,%,++,--


   -assignment
      = , +=

   -comparison
     ==, ===, !=, !==, <, >, <=, >=

   -logical 
     &&, //, !
*/




/*    -arithmetics
let a = 20;
let b = 50;
let c = a-b;
console.log(c);


let a = 10;
let c = a % 2;
console.log(c);
*/


/* -assignment
let a = 10;
a += 5;
console.log(a);
*/



/* -comparison
let a = 11;
let c = a % 2;

if(c == 0){
    console.log("this is an evan number");
}
else{
    console.log("this is an odd number");
}
*/


/* -logical 

let a = 80;
if(a >= 80 && a<=100){
  console.log("A+");
}else{
  console.log('please enter a valid number....');
}



if(!10 == 10){
  console.log('its ok');
}else{
  console.log('its not ok...')
}

*/



/* --function_1
function funName(a){
  console.log('this is first function...'  +a);
}

funName(50)


--function_2
function funName(a){
  console.log('this is first function...'  +a);
}

function newFun(a){
  console.log('this is second function...'  +a);
}

newFun(funName())

*/


/*     -----------

let rs = document.querySelector('.rs');

let a = prompt('enter first number');
let a = prompt('enter second number');


let rslt = number(a) + number(b);

document.write(rslt)

*/












let light = document.querySelector('.light');
let on = document.querySelector('.on');
let off = document.querySelector('.off');

on.addEventListener('click', function(){
  light.src = 'https://www.w3schools.com/js/pic_bulbon.gif '
});



off.addEventListener('click' , function(){
  light.src ='https://www.w3schools.com/js/pic_bulboff.gif'
});








