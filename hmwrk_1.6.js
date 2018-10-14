function run(){
  var a1 = prompt("Enter number a1:");
  var a2 = prompt("Enter number a2:");
  var a3 = prompt("Enter number a3:");
  var list = [a1,a2,a3];
  console.log(list.join("\n").toString());
  [a1, a2, a3] = [a2, a3, a1];
  var list2 = [a1,a2,a3];
  console.log(list.join("\n").toString());


}
run();
