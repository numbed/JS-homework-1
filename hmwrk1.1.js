<<<<<<< HEAD
function run() {
	var a = prompt("Enter value for number A: ");
	var b = prompt("Enter value for number B: ");
	var c = prompt("Enter value for number C: ");

	function compare(a, b, c) {
		if (a < b) {
			console.log("A < B");
			if (c < b && c > a) {
				console.log("number C: " + c + " is between A: " + a + " and B: " + b);
			} else {
				console.log("number C: " + c + " is outside of the A: " + a + " and B: " + b + " range");
			}
		} else if (a > b) {
			console.log("A > B");
			if (c < a && c > b) {
				console.log("number C: " + c + " is between A: " + a + " and B: " + b);
			} else {
				console.log("number C: " + c + " is outside of the A: " + a + " and B: " + b + " range");
			}
		} else if (a == b) {
			if (c == a) {
				console.log("A = B = C \nnumber A: " + a + " equals number B: " + b + " and numbed C: " + c);
			} else {
				console.log("A = B \nnumber A: " + a + " equals number B: " + b + "\nnumber C:" + c + "is different from A and B");
			}
		}
	}
	compare(a, b, c);
}

run();
=======
function run() {
	var a = prompt("Enter value for number A: ");
	var b = prompt("Enter value for number B: ");
	var c = prompt("Enter value for number C: ");

	function compare(a, b, c) {
		if (a < b) {
			console.log("A < B");
			if (c < b && c > a) {
				console.log("number C: " + c + " is between A: " + a + " and B: " + b);
			} else {
				console.log("number C: " + c + " is outside of the A: " + a + " and B: " + b + " range");
			}
		} else if (a > b) {
			console.log("A > B");
			if (c < a && c > b) {
				console.log("number C: " + c + " is between A: " + a + " and B: " + b);
			} else {
				console.log("number C: " + c + " is outside of the A: " + a + " and B: " + b + " range");
			}
		} else if (a == b) {
			if (c == a) {
				console.log("A = B = C \nnumber A: " + a + " equals number B: " + b + " and numbed C: " + c);
			} else {
				console.log("A = B \nnumber A: " + a + " equals number B: " + b + "\nnumber C:" + c + "is different from A and B");
			}
		}
	}
	compare(a, b, c);
}

run();
>>>>>>> 616b7f3a6ea7de8e91dd0a3e52a138c950dae079
