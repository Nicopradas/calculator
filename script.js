
function add(num1,num2){
    number1 =parseFloat(num1.replace(/,/g, "."));
    number2 =parseFloat(num2.replace(/,/g, "."));
    return number1+number2;
   
}

function substract(num1,num2){
    number1 =parseFloat(num1.replace(/,/g, "."));
    number2 =parseFloat(num2.replace(/,/g, "."));

    return number1-number2;
}

function multiply(num1,num2){
    number1 =parseFloat(num1.replace(/,/g, "."));
    number2 =parseFloat(num2.replace(/,/g, "."));

    return number1*number2;
}

function divide(num1,num2){
    number1 =parseFloat(num1.replace(/,/g, "."));
    number2 =parseFloat(num2.replace(/,/g, "."));

    return number1/number2;
}

function operate(result){
    //create variable with clean operation (ex: 8+8):
    let resultOp = result.slice(0,-1);
    //IF RESULT CONTAINS '+' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
    if (resultOp.includes('+')){
        numbers = resultOp.split('+');


        results.textContent = (add(numbers[0],numbers[1]));
    //IF RESULT CONTAINS '-' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
    }  
    else if (resultOp.includes('-')){
        numbers = resultOp.split('-');


        results.textContent = (substract(numbers[0],numbers[1]));

    }
    //IF RESULT CONTAINS 'x' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION

    else if (resultOp.includes('x')){
        numbers = resultOp.split('x');
        results.textContent = multiply(numbers[0],numbers[1]);
    }
    //IF RESULT CONTAINS '/' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION

    else if (resultOp.includes('/')){
        numbers = resultOp.split('/');
        results.textContent = divide(numbers[0],numbers[1]);
    }
}




const buttons = [
    document.querySelector('#zero'),
    document.querySelector('#one'),
    document.querySelector('#two'),
    document.querySelector('#three'),
    document.querySelector('#four'),
    document.querySelector('#five'),
    document.querySelector('#six'),
    document.querySelector('#seven'),
    document.querySelector('#eight'),
    document.querySelector('#nine'),
    document.querySelector('#comma'),

    document.querySelector('#adds'),
    document.querySelector('#substracts'),
    document.querySelector('#equal'),
    document.querySelector('#multiplies'),
    document.querySelector('#divides'),
    document.querySelector('#clear'),
]    
const results = document.querySelector('#result');
const regex = /[0-9]/g;
const numbers= [];
const button = buttons.map((item)=>{

    item.addEventListener('click', ()=>{

// IF THERE IS MAXIMUM 10 DIGITS AND IT IS A NUMBER, THEN SHOW NUMBER
if (results.textContent.length != 10 && item.textContent.match(regex)){
    results.textContent+= item.textContent;
    numbers[0] = results.textContent;
    console.log(numbers);

}
if(item == adds){
    

}




    })
})

