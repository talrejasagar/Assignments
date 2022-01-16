var a = 1 + 3; // 4 as number + number = number;

var b = "1" + 3; // '13' as string + number = string;

var c = "Strong" + "Engineer"; // StrongEngineer as String + String = String so it concats it;

var d = "Strong" + true; // "Strongtrue" as Sring + boolean = String;

var d = "false" + false; // "falsefalse"  as String + boolean = string;

var e = "1" + true - true; // as per BODMAS rule first addition will be done so it will become 1true which is a string and then substraction will done from that and string can not be substracted from number so and wil be NaN;

var f = "10" - false - false - true + 2; // 11 as 10-0=10 then again 10-0=10, then 10 - 1 = 9 and then final 9 + 2 = 11;

var e = "Arun" + 10.1 + 20 - 98 + true; // NaN as at the time of division it will give result as NaN;

var f = "-" + 1; //"-1"

var g = Number("32") + 2; // 34 as Number function will change string into no. and number + number = number;

var h = 2 + parseInt("ankit"); // NaN as parseint can not convert Ankit into no.;

var i = "ankit" + 2 + parseInt(2) + parseFloat(33.98); // 'ankit2233.98' as everything will be concatenated and will become string.

var j = "10" - 2; // 8

var k = "100" + -20; // '100-20' as per bodmas equation is solved from left to right so addition will be considered and concatenation will be done.

var l = "100" + 10 + "20" - "20" + true + true + false + -true; //  '1001020'/ 1001000+true =1001001/1001001 + true = 1001002/ 1001002 + false = 1001002/ 1001002 + -true = 1001001;

// Print 1 to 10

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Print 4 to 30

for (i = 4; i <= 30; i++) {
  console.log(i);
}

// Print 5 to 1

for (i = 5; i > 0; i--) {
  console.log(i);
}

// Print even number from 1 to 100

for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) console.log(i);
}

// Print odd numbers from 1 to 100

for (i = 1; i <= 100; i++) {
  if (i % 2 != 0) console.log(i);
}

// Write factorial of 10
var z = 1;
for (i = 1; i <= 10; i++) {
  z = z * i;
}
console.log(z);
//3628800 will be answer;
