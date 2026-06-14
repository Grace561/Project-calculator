// create the math function
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// create the operate function
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b);

            case "-":
                return subtract(a, b);

                case "*":
                    return multiply(a, b);

                    case "/":
                        return divide(a, b);
    }
}

// create variable 
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldRestScreen = false;

const display = document.querySelector("#display");
const digitButtons =
    document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent
    });
});

// store first Number

currentOperator = "+";
firstNumber = display.textContent;
display.textContent = "";

// store second Number
secondNumber = display.textContent;

// make equals Work
const result = operate(
    currentOperator,
    firstNumber,
    secondNumber
);
display.textContent = result;

// clear button
clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";

    display.textContent = "0";
}); 

if (
    firstNumber &&
    currentOperator &&
    display.textContent
) {
    firstNumber = operate(
        currentOperator,
        firstNumber,
        display.textContent
    );

    display.textContent = firstNumber;
}
// round long decimals
const result = operate(
    currentOperator,
    firstNumber,
    secondNumber
);

result

    

if (currentOperator && display.textContent === "") {
    currentOperator = operator;
    result;
}

if (shouldRestScreen){
    display.textContent = "";
    shouldRestScreen = false;
}

