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

const deleteButton = document
const display = document.querySelector("#display");
const digitButtons =
    document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent
    });
});

// make the operators store values
const operators = 
document.querySelectorAll(".operator");

operators.forEach(button => {

    button.addEventListener("click" ,()=>{
        let newOperator = button.textContent;
        
        if(
            firstNumber !== "" &&
            operator !== "" &&
            display.textContent !== ""
        ){

            secondNumber = display.textContent;
            
            let result = operate(
                operator,
                firstNumber,
                secondNumber
            );

            display.textContent =
            Math.round(result * 1000) / 1000;

            firstNumber = display.textContent;
        }


       firstNumber = display.textContent;
       
       operator = newOperator;
       display.textContent="";
    });
});

// make equals work
const equals =
document.querySelector("#equals");

equals.addEventListener("click",()=>{
    if(
        firstNumber === "" ||
        operator === "" ||
        display.textContent === ""
    ){
        return;
    }


    secondNumber = display.textContent;

    let result = operate(
        operator,
        firstNumber,
        secondNumber
    );

    result = 
    Math.round(result * 1000) / 1000;

    display.textContent=result;

    firstNumber=result;

    operator="";

    secondNumber="";

    resultDisplayed=true;
});

// clear button
const clear = 
document.querySelector("#clear");

clear.addEventListener("click",()=>{

    firstNumber="";
    secondNumber="";
    operator="";

    display.textContent="0";


    resultDisplayed=false;
});


const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", () => {

    if (!display.textContent.includes(".")){
        display.textContent += ".";
    }
});







// // Math functions

// function add(a, b) {
//   return a + b;
// }


// function subtract(a, b) {
//   return a - b;
// }


// function multiply(a, b) {
//   return a * b;
// }


// function divide(a, b) {

//   if (b === 0) {
//     return "Nice try 😏";
//   }

//   return a / b;
// }



// // Calculator variables

// let firstNumber = "";
// let secondNumber = "";
// let operator = "";
// let shouldReset = false;



// // Select HTML elements

// const display = document.querySelector("#display");

// const digitButtons = document.querySelectorAll(".digit");

// const operatorButtons = document.querySelectorAll(".operator");

// const equalsButton = document.querySelector("#equals");

// const clearButton = document.querySelector("#clear");

// const decimalButton = document.querySelector(".decimal");




// // Operate function

// function operate(operator, a, b) {

//   a = Number(a);
//   b = Number(b);


//   switch(operator) {

//     case "+":
//       return add(a,b);

//     case "-":
//       return subtract(a,b);

//     case "*":
//       return multiply(a,b);

//     case "÷":
//       return divide(a,b);

//   }

// }





// // Number button clicks

// digitButtons.forEach(button => {

//   button.addEventListener("click", () => {


//     if (shouldReset) {

//       display.textContent = "";
//       shouldReset = false;

//     }


//     if (display.textContent === "0") {

//       display.textContent = "";

//     }


//     display.textContent += button.textContent;


//   });

// });






// // Operator clicks

// operatorButtons.forEach(button => {


// button.addEventListener("click", () => {


// const newOperator = button.textContent;



// // Prevent double operators

// if(display.textContent === "") {

//   operator = newOperator;
//   return;

// }




// // Chain calculation

// if(
// firstNumber !== "" &&
// operator !== ""
// ){


// secondNumber = display.textContent;



// let result = operate(
// operator,
// firstNumber,
// secondNumber
// );



// result = Math.round(result * 1000) / 1000;



// display.textContent = result;



// firstNumber = result;



// }


// else {


// firstNumber = display.textContent;


// }



// operator = newOperator;


// display.textContent = "";



// });


// });






// // Equals button


// equalsButton.addEventListener("click", () => {



// if(
// firstNumber === "" ||
// operator === "" ||
// display.textContent === ""
// ){

// return;

// }




// secondNumber = display.textContent;



// let result = operate(
// operator,
// firstNumber,
// secondNumber
// );



// result = Math.round(result * 1000) / 1000;



// display.textContent = result;



// firstNumber = result;

// operator = "";

// secondNumber = "";



// shouldReset = true;



// });







// // Clear button


// clearButton.addEventListener("click", () => {


// firstNumber = "";

// secondNumber = "";

// operator = "";


// display.textContent = "0";


// shouldReset = false;


// });







// // Decimal button


// decimalButton.addEventListener("click", () => {



// if(!display.textContent.includes(".")) {


// display.textContent += ".";


// }


// });