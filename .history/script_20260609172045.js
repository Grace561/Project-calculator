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


// create variable 
let firstNumber = "";
let secondNumber = "";
let Operator = "";
let resultDisplayed = false;

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


const display = document.querySelector("#display");
const digitButtons =
    document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent
    });
});

// store first Number

Operator = "+";
firstNumber = display.textContent;
display.textContent = "";

// store second Number
secondNumber = display.textContent;

// make equals Work


// clear button
clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    Operator = "";

    display.textContent = "0";
}); 

if (
    firstNumber &&
    perator &&
    display.textContent
) {
    firstNumber = operate(
        operator,
        firstNumber,
        display.textContent
    );

    display.textContent = firstNumber;
}



    




