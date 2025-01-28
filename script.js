
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
]    
    const adds = document.querySelector('#adds');
    const substracts = document.querySelector('#substracts');
    const multiplies = document.querySelector('#multiplies');
    const divides = document.querySelector('#divides');
    const equal = document.querySelector('#equal');
    const clear = document.querySelector('#clear');
    const result = document.querySelector('#result');


let numbers=[];

const button = buttons.map((item)=>{

    item.addEventListener('click', ()=>{

            result.textContent+= item.textContent;

        //IF THE BUTTON IS ADDS THEN CREATE ARRAY NUMBERS EN SEPARATE EACH DIGIT BEFORE +
        if(item == adds ){
            numbers = result.textContent.split('+');
            // console.log(numbers);
            //IF THE SECOND DIGIT IS NOT EMPTY, THEN THE OPERATION CAN BE DONE
            if (numbers[1]!=''){
                result.textContent= (add(numbers[0],numbers[1]));

            }
        }

        if(item == substracts){
            numbers = result.textContent.split('-');
            if (numbers[1]!=''){
                result.textContent= (substract(numbers[0],numbers[1]));

            }
        }

        if(item == multiplies){
            numbers = result.textContent.split('x');
            if (numbers[1]!=''){
                result.textContent= (multiply(numbers[0],numbers[1]));

            }
        }

        if(item == divides){
            numbers = result.textContent.split('/');
            if (numbers[1]!=''){
                result.textContent= (divide(numbers[0],numbers[1]));

            }
        }


        //IF THE BUTTON IS EQUAL 
        if (item == equal){
            //IF RESULT.TEXCONTENT CONTAINS '+' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
            if (result.textContent.includes('+')){
                numbers = result.textContent.split('+');
                numbers[1] = numbers[1].slice(0,-1);

                console.log(numbers);

                result.textContent = (add(numbers[0],numbers[1]));
            //IF RESULT.TEXCONTENT CONTAINS '-' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
            }  
            else if (result.textContent.includes('-')){
                numbers = result.textContent.split('-');
                numbers[1] = numbers[1].slice(0,-1);

                console.log(numbers);

                result.textContent = (substract(numbers[0],numbers[1]));

            } 
            //IF RESULT.TEXCONTENT CONTAINS 'x' SEPARATE IT INTO AN ARRAY AND PERFORM ITS OPERATION
            else if (result.textContent.includes('x')){
                numbers = result.textContent.split('x');
                numbers[1] = numbers[1].slice(0,-1);
                console.log(numbers);
                result.textContent = multiply(numbers[0],numbers[1]);
            }

            else if (result.textContent.includes('/')){
                numbers = result.textContent.split('/');
                numbers[1] = numbers[1].slice(0,-1);
                console.log(numbers);
                result.textContent = divide(numbers[0],numbers[1]);
            }

            
        }
            
        
    })
})