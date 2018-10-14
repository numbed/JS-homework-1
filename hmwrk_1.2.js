function run(){
var a = prompt("Enter number A:");
a = parseFloat(a);
var b = prompt("Enter number B:");
b = parseFloat(b);
console.log("A: "+a+" B: "+b);

var addition = a + b;
console.log("Addition: "+addition);

var subtraction = a - b;
console.log("Substraction: " + subtraction);

var multiplication = a*b;
console.log("Multiplication: " + multiplication);

var division = a%b;
console.log("Division remainder: "+division);


}
run();
