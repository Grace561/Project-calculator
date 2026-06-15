

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
if 



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