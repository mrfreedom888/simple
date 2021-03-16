"use strict";


// if (4) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok'): console.log('error');

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('неверно');
//         break;
//     case '100':
//         console.log('error');
//         break;
//     case '50':
//         console.log('в точку');
//         break;
//     default:
//         console.log('не в этот раз!!');
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);

// }

// const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ''),
//         b = prompt("На сколько оцените его от 0 - 10", '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }


// }
// if (personalMovieDB.count < 10) {
//     console.log('посмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log('вы класический зритель ');
// } else if (personalMovieDB.count >= 30) {
//     console.log('вы еиноман');
// } else {
//     console.log('произогла ошибка');
// }


// console.log(personalMovieDB);


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }
// showFirstMessage('hello world');
// console.log(num);


// console.log(calc(4, 5));
// console.log(calc(2, 7));
// console.log(calc(100, 11));

// function calc(a, b) {
//     return (a + b);
// }



// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);




// let logger = function() {
//     console.log('hey');
// };

// logger();

// const calc = (a, b) => {

//     return 10 + 20;
// };


// let a = +prompt('vedit chislo');

// function addTwo(x) {
//     let ret = x + 2;
//     return ret;
// }
// let b = addTwo(a);
// console.log(b);

// let val1 = 2;

// function multiplyThis(n) {
//     let ret = n * val1;
//     return ret;
// }
// let multiplied = multiplyThis(6);
// console.log('example of scope:', multiplied);

// let val = 7;

// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b;
//         return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);

// function createCounter() {
//     let counter = 0;
//     console.log(counter);
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// const c4 = increment();
// const c5 = increment();
// const c6 = increment();
// const c7 = increment();
// const c8 = increment();

// console.log('example increment', c1, c2, c3, c4, c5, c6, c7, c8);

// let names = "John";

// function sayHi() {
//     console.log("Hi, " + names);

// }

// names = "Pete";

// sayHi();

function makeWorker() {
    let namev = "Pete";

    return function() {
        console.log(namev);
    };
}
let namev = "John";

let work = makeWorker();

work();
console.log(work);