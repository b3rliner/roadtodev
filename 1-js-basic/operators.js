let number1 = 5;
let number2 = 35;
console.log(number1 + number2);
console.log(number1 + number2++); //++ dont work, why?

par1 = 2;
par2 = 4;
function add(par1, par2){
    let sum = par1 + par2;
    console.log(sum);
}
add(par1, par2);



let number3 = 5;
let number4 = 35;
console.log(number3 - number4);

let number5 = 64;
let number6 = 25;
console.log(number5 * number6);

let number7 = 64;
let number8 = 25;
console.log(number7 / number8);

let number9 = 64;
let number10 = 0; //does dividing by 0 work? EDIT: yes, return infinity
console.log(number9 / number10);

//if + operators

if(number1 > number2){
    console.log(`${number1} is higher than ${number2}`);
}else{
    console.log(`${number1} is lower than ${number2}`);
}

if(number1 = number2){
    console.log(`${number1} is equal ${number2}`); //hmm js bug? why 'if' changes template iterals values?
}else{
    console.log(`${number1} is not equal ${number2}`);
}

let a = 2;
let b = 4;
if(a = b){
    console.log(a); //returns a in number format
}

if(a = b){
    console.log(`${a} is equal ${b}`); 
    /*returns a in string format, why b = 4?, 'if' is a conditional operator, 
    why it changes the value of b? */
}

console.log(parseInt(`${a} is equal ${b}`)); 
console.log(parseInt(`${a} is equal ${b}`).toString()); //'to string' have a higher priority than parseint

let n1 = 4;
let n2 = 3;
let sum1 = n1%n2;
console.log(sum1);

let n3 = 2;
let n4 = 3;
let sum2 = n3%n4;
console.log(sum2);


let state1 = 4;
let state2 = 4;
if( state1 == state2){
    console.log('state1 equal state2') //now I know why there was a = b ^^ because i used one '=' character
}else{
    console.log('state1 not equal state2')
}


let state3 = 4;
let state4 = 6;
if( state1 == state2){
    console.log('state1 equal state2') //now I know why there was a = b ^^ because i used one '=' character
}else{
    console.log('state1 not equal state2')
}

let text1 = "text 1 is ";
text1 += "added to text 2";

function test(){ //functions in JS return undefined by default unless i add return

}


let object1 = {
    a: 'a parameter',
    b: 'b'
};

let car = new Object();
car.speed = 2;

let car2 ={
    speed: 2
};