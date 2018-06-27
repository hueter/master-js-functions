/* 
1. Write a function that returns a function that prints "hello world"
*/
function higherOrderHelloWorld() {}

// Tests for #1
higherOrderHelloWorld()(); // hello world
var helloWorld = higherOrderHelloWorld();
helloWorld(); // hello world

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
3. Write a function that includes a greeting "Hello ",
    and returns a function that takes a 'name' parameter
     OR uses "Stranger" as a default
*/

function higherOrderGreet() {}

// Tests for #3
higherOrderGreet()(); // Hello Stranger
higherOrderGreet()('Whiskey'); // Hello Whiskey
var greet = higherOrderGreet();
greet('Adele'); // Hello Adele

// ----------------------------------------------

/* 
4. Write a function that takes a callback to implement the
  forEach array method.
*/

function customForEach(arr, callback) {}

// test for #4
var myArr = ['one', 'two', 'three', 'four'];
customForEach(myArr, function(element, i) {
  console.log(element, i);
});
/*
one, 0
two, 1
three, 2
four, 3
*/

// ----------------------------------------------

/* 5. 
Write a function that takes a callback to implement the
   forEach array method.
*/
function customMap(arr, callback) {}

// test for #5
var mySecondArr = [1, 2, 3, 4, 5];
console.log(
  customMap(mySecondArr, function(element, i) {
    return element * element;
  })
);
/**
 * (5) [1, 4, 9, 16, 25]
 */

// ----------------------------------------------

/**
  * 
  * 6. Write a function called customFilter which accepts an array and a callback function. The callback takes a two parameters called val (current element) and idx (current index) and return a boolean based on some comparison to the value.

The function should return an array of all values that pass the comparison test.
Do not use the built in filter function, the tests will fail!

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  */

function customFilter(arr, callback) {}

// tests for #6

var arr = [1, 2, 3, 4, 5];

customFilter(arr, function(val, idx) {
  return val > 3;
}); // [4,5]

customFilter(['a', 1, '2', 3], function(val, idx) {
  return typeof val === 'string';
}); // ["a","2"]

customFilter([1, 2, 3, 4, 5], function(val, idx) {
  return typeof val === 'string';
}); // []

// ----------------------------------------------
