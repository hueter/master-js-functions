/* 
1. Write a function that returns a function that prints "hello world"
*/
function higherOrderHelloWorld() {
  return function() {
    console.log('hello world');
  };
}

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

function higherOrderSum(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

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

function higherOrderGreet() {
  return function(name = 'Stranger') {
    return 'hello ' + name;
  };
}

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

function myForEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// test for #4
var myArr = ['one', 'two', 'three', 'four'];
myForEach(myArr, function(element, i) {
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
*** BONUS ***
Write a function that takes a callback to implement the
   forEach array method.
*/
function myMap(arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i));
  }
  return newArr;
}

// test for #5
var mySecondArr = [1, 2, 3, 4, 5];
console.log(
  myMap(mySecondArr, function(element, i) {
    return element * element;
  })
);
/**
 * (5) [1, 4, 9, 16, 25]
 */
