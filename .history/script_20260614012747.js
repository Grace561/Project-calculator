// create the math function
// function add(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }


// create variable 
// let firstNumber = "";
// let secondNumber = "";
// let operator = "";
// let resultDisplayed = false;

// create the operate function
// function operate(operator, a, b) {
//     a = Number(a);
//     b = Number(b);

//     switch (operator) {
//         case "+":
//             return add(a, b);

//             case "-":
//                 return subtract(a, b);

//                 case "*":
//                     return multiply(a, b);

//                     case "/":
//                         return divide(a, b);
//     }
// }

// const deleteButton = document.querySelector("#delete")

// const display = document.querySelector("#display");
// const digitButtons =
//     document.querySelectorAll(".digit");

// digitButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         display.textContent += button.textContent
//     });
// });

// make the operators store values
// const operators = 
// document.querySelectorAll(".operator");

// operators.forEach(button => {

//     button.addEventListener("click" ,()=>{
//         let newOperator = button.textContent;
        
//         if(
//             firstNumber !== "" &&
//             operator !== "" &&
//             display.textContent !== ""
//         ){

//             secondNumber = display.textContent;
            
//             let result = operate(
//                 operator,
//                 firstNumber,
//                 secondNumber
//             );

//             display.textContent =
//             Math.round(result * 1000) / 1000;

//             firstNumber = display.textContent;
//         }


//        firstNumber = display.textContent;
       
//        operator = newOperator;
//        display.textContent="";
//     });
// });

// make equals work
// const equals =
// document.querySelector("#equals");

// equals.addEventListener("click",()=>{
//     if(
//         firstNumber === "" ||
//         operator === "" ||
//         display.textContent === ""
//     ){
//         return;
//     }


//     secondNumber = display.textContent;

//     let result = operate(
//         operator,
//         firstNumber,
//         secondNumber
//     );

//     result = 
//     Math.round(result * 1000) / 1000;

//     display.textContent=result;

//     firstNumber=result;

//     operator="";

//     secondNumber="";

//     resultDisplayed=true;
// });

// // clear button
// const clear = 
// document.querySelector("#clear");

// clear.addEventListener("click",()=>{

//     firstNumber="";
//     secondNumber="";
//     operator="";

//     display.textContent="0";


//     resultDisplayed=false;
// });

// deleteButton.addEventListener("click", () => {

//   if (display.textContent.length > 1) {

//     display.textContent =
//     display.textContent.slice(0, -1);

//   } else {

//     display.textContent = "0";

//   }

// });

// const decimal = document.querySelector(".decimal");

// decimal.addEventListener("click", () => {

//     if (!display.textContent.includes(".")){
//         display.textContent += ".";
//     }
// });


let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldReset = false;


const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");



function add(a,b){
    return a+b;
}


function subtract(a,b){
    return a-b;
}


function multiply(a,b){
    return a*b;
}


function divide(a,b){
    return a/b;
}



function operate(a,operator,b){

    a = Number(a);
    b = Number(b);


    if(operator === "+"){
        return add(a,b);
    }


    if(operator === "-"){
        return subtract(a,b);
    }


    if(operator === "×"){
        return multiply(a,b);
    }


    if(operator === "÷"){
        return divide(a,b);
    }

}




function updateDisplay(value){

    display.textContent=value;

}




buttons.forEach(button=>{


button.addEventListener("click",()=>{


let value = button.textContent;



// clear

if(value==="C"){

firstNumber="";
secondNumber="";
operator="";
updateDisplay("0");

return;

}



// delete

if(value==="⌫"){

display.textContent =
display.textContent.slice(0,-1) || "0";

return;

}




// numbers

if(!isNaN(value) || value==="."){


if(shouldReset){

display.textContent="";
shouldReset=false;

}


display.textContent += value;


return;

}




// operators

if(["+","-","×","÷"].includes(value)){


firstNumber = display.textContent;

operator=value;

shouldReset=true;


return;

}




// equals

if(value==="="){


secondNumber = display.textContent;


let answer = operate(
firstNumber,
operator,
secondNumber
);



updateDisplay(
Math.round(answer*100000)/100000
);


firstNumber="";
secondNumber="";
operator="";


}



});


});