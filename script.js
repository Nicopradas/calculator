
function add(num1,num2){
    number1 =parseInt(num1);
    number2 =parseInt(num2);

    return number1+number2;
}

function substract(num1,num2){
    number1 =parseInt(num1);
    number2 =parseInt(num2);

    return number1-number2;
}

function multiply(num1,num2){
    number1 =parseInt(num1);
    number2 =parseInt(num2);

    return number1*number2;
}

function divide(num1,num2){
    number1 =parseInt(num1);
    number2 =parseInt(num2);

    return number1/number2;
}

function operate(result){
    //create variable with clean operation (ex: 8+8):
    let resultOp = result.slice(0,-1);

    console.log(resultOp);
    //IF RESULT CONTAINS '+' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
    if (resultOp.includes('+')){
        numbers = resultOp.split('+');

        console.log(numbers);

        results.textContent = (add(numbers[0],numbers[1]));
    //IF RESULT CONTAINS '-' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
    }  
    else if (resultOp.includes('-')){
        numbers = resultOp.split('-');

        console.log(numbers);

        results.textContent = (substract(numbers[0],numbers[1]));

    }
    //IF RESULT CONTAINS '+' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION

    else if (resultOp.includes('x')){
        numbers = resultOp.split('x');
        console.log(numbers);
        results.textContent = multiply(numbers[0],numbers[1]);
    }
    //IF RESULT CONTAINS '+' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION

    else if (resultOp.includes('/')){
        numbers = resultOp.split('/');
        console.log(numbers);
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

    document.querySelector('#adds'),
    document.querySelector('#substracts'),
    document.querySelector('#equal'),
    document.querySelector('#multiplies'),
    document.querySelector('#divides'),
    document.querySelector('#clear'),
]    
const results = document.querySelector('#result');
let numbers=[];

const button = buttons.map((item)=>{

    item.addEventListener('click', ()=>{

            result.textContent+= item.textContent;

        //IF THE BUTTON IS ADDS THEN CREATE ARRAY NUMBERS EN SEPARATE EACH DIGIT BEFORE +
        if(item == adds ){
            numbers = result.textContent.split('+');
            //IF THE SECOND DIGIT IS NOT EMPTY, THEN THE OPERATION CAN BE DONE
            if (numbers[1]!=''){
               // console.log(result.textContent);
                //result.textContent= (add(numbers[0],numbers[1]));
               operate(result.textContent);   

            }
        }

        if(item == substracts){
            numbers = result.textContent.split('-');
            if (numbers[1]!=''){
                operate(result.textContent);   

            }
        }

        if(item == multiplies){
            numbers = result.textContent.split('x');
            if (numbers[1]!=''){
                operate(result.textContent);   

            }
        }

        if(item == divides){
            numbers = result.textContent.split('/');
            if (numbers[1]!=''){
                operate(result.textContent);   

            }
        }

        if(item == clear){
            result.textContent= '';

        }
        

        //IF THE BUTTON IS EQUAL 
        if (item == equal){
            console.log(result.textContent);
            operate(result.textContent);   
            
        }
            
        
    })
})

