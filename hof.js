// 1. Write a function that takes a callback to implement the
//    forEach array method.

function myForEach(arr, callback) {}

// test for #1
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

function myMap(arr, callback) {}

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
