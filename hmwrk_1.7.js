function run() {
	var hour = prompt("Enter hour:\nonly whole numbers (7,14,22)");
	var cash = prompt("Enter cash:");
	var health = confirm("Are you healthy?\nOK for YES | CANCEL for NO");
	hour = parseInt(hour);
	cash = parseFloat(cash);
	if (health == true) { //if I'm sick
		if (hour > 22 && cash > 100) {
			console.log("I'm ready for party. Let's get wasted!");
		} else {
			console.log("Loneliness awaits me!");
		}
		
	} else { //if I'm healty

		console.log("I will stay at home.");
		if (cash > 50) {
			console.log("I will buy medicine.");
		} else {
			console.log("Herbal tea, here I come!");
		}
	}
}
run();
