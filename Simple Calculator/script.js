// Get the calculator display
const display = document.getElementById("display");


// Add a number or operator to the display
function appendValue(value) {
    display.value += value;
}


// Clear the complete calculator display
function clearDisplay() {
    display.value = "";
}


// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// Calculate the entered expression
function calculate() {

    try {

        // Check whether the display is empty
        if (display.value === "") {
            return;
        }

        // Prevent division by zero
        if (display.value.includes("/0")) {
            display.value = "Cannot divide by 0";
            return;
        }

        // Calculate the expression
        display.value = eval(display.value);

    } catch (error) {

        // Show message for invalid input
        display.value = "Error";
    }
}