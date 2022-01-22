//Factorial way 1

function fact(x) {
  if (x === 0) {
    return 1;
  } else {
    x = x * fact(x - 1);
    return x;
  }
}
var z = -5;
if (z > 0) {
  var y = fact(z);
  console.log(y);
} else {
  console.log("Not a positive no.");
}

//Factorial Way 2

var i = 1;
var z = 1;
function fact(number) {
  z = z * i;
  i++;

  if (i <= number) {
    fact(number);
  }
}
fact(5);
console.log(z);

//Factorial using loop

var z = 1;
for (var i = 1; i <= 5; i++) {
  z = z * i;
}
console.log(z);

// Counting of number
var i = 0;
function count(z) {
  i++;
  if (i <= z) {
    console.log(i);
    count(z);
  }
}
count(10);

//  Reverse Counting of number
function countd(z) {
  var i = z;
  z--;

  if (z >= 0) {
    console.log(i);
    countd(z);
  }
}

countd(100);

// Print even No.
var i = 0;
function even(z) {
  i++;
  if (i <= z) {
    if (i % 2 === 0) {
      console.log(i);
    }
    even(z);
  }
}
even(10);

// Print odd No.

var i = 0;
function odd(z) {
  i++;
  if (i <= z) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    odd(z);
  }
}
odd(10);
