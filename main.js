var email="abc1234@gmail.com";
var num=1234456778900123;

var input1=prompt("ENTER YOUR EMAIL ID");
var input2=prompt("ENTER YOUR PASSWORD");

var test1=email.slice(0,3);
//console.log(test1);

var test2=test1.padEnd(7,"*");
//console.log(test2);

var test3=email.slice(-10);
console.log(test2+test3);


var test4=num.toString();
var test5=test4.slice(-4);
var test6=test5.padStart(16,"*");
console.log(test6);
