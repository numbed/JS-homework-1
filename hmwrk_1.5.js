function run(){
  var a = prompt("Enter number A:");
  var b = prompt("Enter number B:");
  var c = prompt("Enter number C:");
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
  var list = [a,b,c];
  list.sort(function(a,b){return b-a});
  console.log(list);

}
run();
