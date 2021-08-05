// only 'a' - value not assigned to the variable, error 'a' is not defined

b = 1; //variable becomes global with value 1

let c = 1; //block range


function checkrange1(){
    for(let l1 = 1; l1 < 3; l1++){
        console.log('test');
    }
    console.log(l1); //not defined because l1 has block range
}

var d = 1; //function range

function checkrange2(){
    for(var l1 = 1; l1 < 3; l1++){
        console.log('test');
    }
    console.log(l1); //not defined because l1 has block range
}


//hoisting

function hoistingcheck1(){
    var h1 = 1;
    console.log(h1);
}

function hoistingcheck2(){
    console.log(h1); // - undefined nr1 in console
    var h1 = 1;
} //function return -  undefined nr2 in console

function hoistingcheck3(){
    var h1;
    console.log(h1); // - first undefined
    h1 = 1;
} //function return - second undefined

function hoistingcheck4(){
    var h1 = 1;
    console.log(h1); // - 1
} //where second undefined in console?
//Why doesn't the function, 
//when returning a value 1 from the console log, doesn't return the second undefined from the function return?


function hoistingcheck5(){
    x = 5; 
    console.log(x);
    var x;
} //console returns 5 and undefined



const e = 1; //constant variable




console.log('Test log'); //console returns log
console.log(window); //console returns window object
console.log(alert()); //console returns alert in console log - why it works?
console.log(alert(`test`)); 

console.log('hello world');

let changehtml1 = document.querySelector('body');
changehtml1.textContent = 'test'; // text/plain

let changehtml2 = document.querySelector('body');
changehtml2.concat('changehtml1'); // text/html add test2 to test

//append vs concat 