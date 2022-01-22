//way 1 

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


//Way 2

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

// using loop

var z = 1;
for (var i = 1; i <= 5; i++) {
  z = z * i;
}
console.log(z);
