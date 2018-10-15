function run(){
  var a1 = prompt("Enter number a1:");
  var a2 = prompt("Enter number a2:");
  var a3 = prompt("Enter number a3:");
  [a1, a2, a3] = [1, 2, 3];
  console.log(a+" "+a2+ " " + a3);
  [a2, a3, a1] = [a, a2, a3];
  console.log(a+" "+a2+ " " + a3);

}
run();
