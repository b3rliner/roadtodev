const obj1 = {}; //const vs let in defining objects - which better?

const obj2 = {
    num1: 34,
    say1: function(){
        console.log('test');
    },
    arr1: [1,2,3]
};

//this exercise

const obj3 = {
    text1: 'text1',
    text2: this.t1 + 'text2'
};

const obj4 = {
    t1: t2 = t3 = t4 = 'some text' //t2, t3, t4 are variables with same value - implied globals
    //t2, t3 are global variables (window.t2) because they dont have var, let before

};
