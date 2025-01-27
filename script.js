
function add(num1,num2){
    return num1+num2;
}

function substract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operator){
    
    if (operator == 'add'){
        console.log(add(num1,num2));
    } else if(operator == 'substract'){
        console.log(substract(num1,num2));

    } else if (operator == 'multiply'){
        console.log(multiply(num1,num2));

    } else if(operator == 'divide'){
        console.log(divide(num1,num2));

    }  else{
        console.log('THAT OPERATION IS NOT VALID');
    }

}
let num1 = parseInt(prompt('Write first number'));
let num2 = parseInt(prompt('Write second number'));
let operator = (prompt('What operator (ex: add, substract, multiply, divide)'));
operate(num1,num2,operator);