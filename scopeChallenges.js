// 1. What does printFriend print? Why?
var friend = 'Chewie';

function printFriend() {
  console.log(friend);
  friend = 'R2D2';
}

/**
 * *** SOLUTION ***
 *  It prints "Chewie" because lexical scoping says we inherit
 *   the value of friend from the parent scope (global). 
 *   friend is then re-assigned after executing console.log.
 * 
 */

// 2. What does printFriendAgain print? Why?
function printFriendAgain() {
  console.log(friend);
  var friend = 'R2D2';
}

/**
 * *** SOLUTION ***
 *  It prints "undefined" because a newly-declared "friend" exists 
 *    in this function scope (as a shadow), but it is hoisted 
 *     up without its value.
 * 
 */

// 3. What is printed below? Why?

console.log('I live near ' + address);
var address = '3338 17th St, San Francisco';

/**
 * *** SOLUTION ***
 *  It prints "I live near undefined" because address is hoisted up
 *   but its value is yet to be assigned by the time we reference it.
 * 
 */

// 4. What is printed below? Why?

console.log('I live near ' + addressString());
function addressString() {
  return '3338 17th St, San Francisco'
}

/**
 * *** SOLUTION ***
 *  It prints "I live near 3338 17th St, San Francisco" because addressString
 *   is hoisted up as a function declaration, meaning it gets to be fully executed.
 */

// 5. What is printed below? Why?

console.log('My name is ' + myName());
var myName = function() {
  return 'Michael';
}

/**
 * *** SOLUTION ***
 *  It throws a TypeError because while myName is hoisted, it is undefined
 *   at the time of execution, so trying to call a function on an undefined value
 *   throws a TypeError.
 */