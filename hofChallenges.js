/* 
1. Write a function that returns a function that prints "hello world"
*/
function higherOrderHelloWorld() {}

// Tests for #1
higherOrderHelloWorld()(); // hello world
var higherOrderHelloWorld = higherOrderHelloWorld();
higherOrderHelloWorld(); // hello world

// ----------------------------------------------

/* 
2. Write a function that takes a number,
that returns a function that takes another number,
that returns the sum of the two numbers
*/

function higherOrderSum() {}

// Tests for #2
higherOrderSum(5)(10); // 15
var add10 = higherOrderSum(10);
add10(5); // 15
add10(10); // 20

// ----------------------------------------------

/* 
3. Write a function that returns a greeting,
that returns a function that takes a name OR just says "Stranger"
by default
*/

function higherOrderGreet() {}

// Tests for #3
higherOrderGreet()(); // Hello Stranger
higherOrderGreet()('Whiskey'); // Hello Whiskey
var greet = higherOrderGreet();
greet('Adele'); // Hello Adele

// ----------------------------------------------

/* 
*** BONUS ***
4. Write a function that takes a callback to implement the
  forEach array method.
*/

function myForEach(arr, callback) {}

// test for #4
var myArr = ['one', 'two', 'three', 'four'];
myForEach(myArr, function(element, i) {
  console.log(element, i);
});
/*
one
two
three
four
*/

// ----------------------------------------------

/* 5. 
*** BONUS ***
Write a function that takes a callback to implement the
   forEach array method.
*/
function myMap(arr, callback) {}

// test for #5
var mySecondArr = [1, 2, 3, 4, 5];
console.log(
  myMap(mySecondArr, function(element, i) {
    return element * element;
  })
);
/**
 * 1
 * 4
 * 9
 * 16
 * 25
 */
