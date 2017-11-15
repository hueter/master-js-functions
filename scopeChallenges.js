// 1. What does printFriend print? Why?
var friend = 'Chewie';

function printFriend() {
  console.log(friend);
  friend = 'R2D2';
}

// 2. What does printFriendAgain print? Why?
function printFriendAgain() {
  console.log(friend);
  var friend = 'R2D2';
}

// 3. What is printed below? Why?

console.log('I live near ' + address);
var address = '3338 17th St, San Francisco';

// 4. What is printed below? Why?

console.log('I live near ' + addressString());
function addressString() {
  return '3338 17th St, San Francisco'
}

// 5. What is printed below? Why?

console.log('My name is ' + myName());
var myName = function() {
  return 'Michael';
}