//only 'a' - value not assigned to the variable, error: 'a' is not defined

b = 1; //undefined variable with assigned value 1 (implied global) becomes global

let c = 1; //variable c with value 1, let = block range

//block range exercise

function blockrange1(){
    for(let l1 = 1; l1 < 3; l1++){
        console.log('test'); //returns test x2
    }
    console.log(l1); //returns not defined because l1 has block range
}//function stucks on console log with undefined error

function blockrange2(){
    for(let l1 = 1; l1 < 3; l1++){
        console.log('test'); //returns test x2
    }
    return console.log(l1); //returns undefined error
} //function stucks on console log with undefined error

function blockrange3(){
    for(let l1 = 1; l1 < 3; l1++){
        console.log('test'); //returns test x2
    }
    console.log(l1); //undefined error
    return 2; //function returns 2 but stuck on undefined error
}

var d = 1; //function range


function functionrange1(){
    for(var l1 = 1; l1 < 3; l1++){
        console.log('test'); //returns test x2
    }
    return console.log(l1); //returns 3
} //function returns undefined

function functionrange2(){
    for(var l1 = 1; l1 < 3; l1++){
        console.log('test');
    }
    console.log(l1);
}
function functionrange3(){
    for(var l1 = 1; l1 < 3; l1++){
        console.log('test');
    }
    return 2; // function returns 2
}

function functionrange4(){
    for(var l1 = 1; l1 < 3; l1++){
        console.log('test');
    }
    return console.log('test'); // function returns undefined
}

//check what function returns


function rtrn1(){

};//returns undefined

function rtrn2(){
    console.log('1');
};//returns undefined

function rtrn3(){
    return console.log('1'); //is executed forward console.log with return 1
}; //and function return undefined

function rtrn4(){
    return 1;
};//returns 1

function rtrn5(){
    return null;
};//returns null

function rtrn6(){
    return true;
};//returns true

function rtrn7(){
    return false;
};

function rtrn8(){
    return true;
    return false; //not executed
};//returns true

function rtrn9(){
    return false;
    return true; //not executed
};//returns false

function rtrn10(){
    return a + b;
};//returns error a is not defined

function rtrn11(){
    return let /*a*/ + b;
};//error unexpected indentifier

function rtrn12(){
    let a = 2;
    let b = 4;
    return a + b;
};//returns 6

function rtrn13(){
    return 'sample return';
};//returns "sample return"

function rtrn14(){
    return Math.PI;
};//returns 3.14...

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

