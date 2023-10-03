// Get the display element
const display = document.getElementById('display')

// Function to append clicked button value to the display
function appendToDisplay(value) {
	display.value += value
}

// Function to calculate the result of the expression
function calculate() {
	try {
		const result = eval(display.value)
		display.value = result
	} catch (error) {
		display.value = 'Error'
	}
}

// Function to clear the display
function clearDisplay() {
	display.value = ''
}
