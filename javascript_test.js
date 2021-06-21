var output = {val1:"", val2:"", operation:""};

function evaluate(){
	const rhs = parseFloat(output.val1)
	const lhs = parseFloat(output.val2)

	switch(output.operation) {
		case "+":
			return rhs + lhs;
		case "-":
			return rhs - lhs;
		case "*":
			return rhs * lhs;
		case "/":
			return rhs / lhs;
	}

}

function write_to_output(input) {

	switch (input) {
		case "C":
			output.val1 = ""
			output.val2 = ""
			output.operation = ""

			document.getElementById("output").innerHTML = "\n"

			break;
		case "+":
			output.operation = input;
			break;
		case "-":
			output.operation = input;
			break;
		case "*":
			output.operation = input;
			break;
		case "/":
			output.operation = input;
			break;
		case "=":
			const result = evaluate();
			output.val1 = result;
			output.operation = "";
			output.val2 = "";
			break;
		default:
			if (output.operation !== ""){
				output.val2 += input;
				break;
			}
			else {
				output.val1 += input;
				break;
			}
		break;

	}

	document.getElementById("output").innerHTML = output.val1 + " " + output.operation + " " + output.val2

}
