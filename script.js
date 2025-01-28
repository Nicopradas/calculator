
function add(num1,num2){
    number1 =parseInt(num1);
    number2 =parseInt(num2);

    return number1+number2;
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
// let num1 = parseInt(prompt('Write first number'));
// let num2 = parseInt(prompt('Write second number'));
// let operator = (prompt('What operator (ex: add, substract, multiply, divide)'));
// operate(num1,num2,operator);
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

    document.querySelector('#adds'),
    document.querySelector('#equal'),
]    
    const adds = document.querySelector('#adds');
    const substracts = document.querySelector('#substracts');
    const multiplies = document.querySelector('#multiplies');
    const divides = document.querySelector('#divides');
    const equal = document.querySelector('#equal');
    const clear = document.querySelector('#clear');
    const result = document.querySelector('#result');

// buttonsaddEventListener('click', ()=>{
//     result.textContent+= one.textContent;
// })
    
// two.addEventListener('click', ()=>{
//     result.textContent+= two.textContent;
// })
let numbers=[];

const button = buttons.map((item)=>{

    item.addEventListener('click', ()=>{

            result.textContent+= item.textContent;

        //IF THE BUTTON IS ADDS THEN CREATE ARRAY NUMBERS EN SEPARATE EACH DIGIT BEFORE +
        if(item == adds ){
            numbers = result.textContent.split('+');
            console.log(numbers);
            //IF THE SECOND DIGIT IS NOT EMPTY, THEN THE OPERATION CAN BE DONE
            if (numbers[1]!=''){
                result.textContent= (add(numbers[0],numbers[1]));

            }
        }
        //IF THE BUTTON IS EQUAL THEN IF RESULT.TEXCONTENT CONTAINS '+' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
        if (item == equal){
            if (result.textContent.indexOf('+')){
                numbers = result.textContent.split('+');
                result.textContent = (add(numbers[0],numbers[1]));
            }
        }
            
        
    })
})