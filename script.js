
function calculate() {
	let display = document.getElementById("display");
	let input_expression = display.value;
	let result;
	try {
		// Converting degrees to radians
		input_expression = input_expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
		input_expression = input_expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
		input_expression = input_expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
		result = eval(input_expression);
		display.value = result;
	} catch (error) {
		display.value = "Error";
	}
}

function backspace() {
	let display = document.getElementById("display");
	display.value = display.value.slice(0, -1);
}
function squareRoot() {
	let display = document.getElementById("display");
	display.value += "sqrt(";
}

function base10Log() {
	let display = document.getElementById("display");
	display.value += "log(";
}

function pi() {
	let display = document.getElementById("display");
	display.value += "3.141592";
}

function e() {
	let display = document.getElementById("display");
	display.value += "e";
}

function power() {
	let display = document.getElementById("display");
	display.value += "**";
}
