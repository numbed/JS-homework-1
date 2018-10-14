function run(){
  var a = prompt("Enter number A:");
  var b = prompt("Enter number B:");
  b = [a, a = b][0];
  console.log("a: "+a+" b: "+b);
}
run();
