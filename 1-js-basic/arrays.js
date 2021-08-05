let array01 = Array.from('abcd');
let array02 = Array.from('1234');
let array03 = Array.from('!@#$');

let array04 = Array.isArray(['abcd']);
let array05 = Array.isArray('1234');
let array06 = Array.isArray('!@#$');

let array07 = Array.of('a', 'b', 'c', 'd');
let array08 = Array.of('1', '2', '3', '4');
let array09 = Array.of('!', '@', '#', '$');


let array10 = ['a', 'b'].concat(['c', 'd']);
let array11 = ['1', '2'].concat(['3', '4']);
let array12 = ['!', '@'].concat(['#', '$']);

let array13 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].copyWithin(2, 3);
let array14 = ['1', '2', '3', '4'].copyWithin(1, 2);
let array15 = ['!1', '@2', '#', '$', '%', '^', '&', '*'].copyWithin(1, 3);
let array16 = ['1', '2', '3', '4'].copyWithin(3, 0);

let array17 = ['a', 'b', 'c', 'd'].filter(letter => letter === 'a', 'b');
let array18 = ['1', '2', '3', '4'].filter(letter => letter === '1', '2');
let array19 = ['1', '2', '3', '4'].filter(letter => letter === '1', '3');
let array20 = ['1', '2', '3', '4'].filter(letter => letter === '1');
let array21 = ['a', 'b', 'c'].fill('a');
let array22 = ['1', '2', '3'].fill('2');
let array23 = ['a', 'b', 'c'].find(letter => letter === 'a');
let array24 = ['a', 'b', 'c'].map(letter => console.log(letter));
let array25 = ['a', 'b', 'c'].every(letter => letter === 'a');
let array26 = ['a', 'b', 'c'].some(letter => letter === 'a');
let array27 = ['1', '2', '3'].some(letter => letter === '1');
let array28 = ['1', '2', '3'].some(letter => letter === '');
let array29 = ['1', '2', '3'].some(letter => letter === true);
let array30 = ['1', '2', []].some(letter => letter === []);
let array31 = ['a', 'b', 'c'].includes(letter => letter === 'a');
let array32 = ['1', '2', '3'].includes(letter => letter === '2');

let array33 = ['a', 'b'].join('+');
let array34 = ['1', '2'].join(' ');
let array35 = ['a', 'b'].join(1);

let array36 = ['a', 'b', 'c'].pop();
let array37 = ['1', '2', '3'].pop();
let array38 = ['!', '@', '#'].pop();

let array39 = ['a', 'b', 'c'].push('e');
let array40 = ['1', '2', '3'].push('');
let array41 = ['a', 'b', 'c'].push('e');

let array42 = ['a', 'b', 'c'].reverse();
let array43 = ['a', 'b', 'c'].splice(1,2);
let array44 = ['a', 'b', 'c'].slice(1,2);
let array45 = ['a', 'b', 'c'].toString();
let array46 = ['1', '2', '3'].toString();
let array47 = ['a', 'b', 'c'].shift();
let array48 = ['1', '2', '3'].shift();

let array49 = ['a', 'b', 'c'].unshift('a');
let array50 = ['1', '2', '3'].unshift([]);
let array51 = ['1', '2', '3'].unshift([]);

let array52 = ['a', 'b', 'c'].reduce((a,b)=>a+b);
let array53 = ['1', '2', '3'].reduce((a,b)=>a+b*2);
let array54 = ['1', '2', '3', '4', '5', '6', '7', '8'].reduce((a,b)=>a+(b+a));
let array55 = ['1', '2', '3', '4', '5', '6', '7', '8'].reduce((a,b)=>a+b^2);