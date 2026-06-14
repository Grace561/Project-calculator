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
let operator = "";
// let resultDisplayed = false;

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

const operat