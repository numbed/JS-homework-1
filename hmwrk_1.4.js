function run(){
  var a = prompt("Enter number A:");
  var b = prompt("Enter number B:");
  a = parseFloat(a);
  b = parseFloat(b);
  if (a>b) {
    b = [a, a = b][0];
    console.log("a: "+a+" b: "+b);
  } else {
    console.log("a: "+a+" b: "+b);
  }
}
run();
