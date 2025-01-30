
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

            results.textContent+= item.textContent;

        //IF THE BUTTON IS ADDS THEN CREATE ARRAY NUMBERS EN SEPARATE EACH DIGIT IF ANY SIGN IS CLICKED
        if(item == adds ){
            numbers = result.textContent.split(/[-+x/]/);
            //IF POSITION 1 OF THE CREATED ARRAY IS NOT EMPTY, THEN STORE THE NEXT SIGN FOR THE NEXT OPERATION
            if (numbers[1]!=''){
                if(results.textContent.slice(-1)=='+'){
                  operate(results.textContent);
                  results.textContent+='+';
                }
                
                
                 

            }
        }

        if(item == substracts){
            numbers = result.textContent.split(/[-+x/]/);
            if (numbers[1]!=''){

                if(results.textContent.slice(-1)=='-'){
                    operate(results.textContent);
                    results.textContent+='-';
                  }  

            }
        }

        if(item == multiplies){
            numbers = result.textContent.split(/[-+x/]/);
            if (numbers[1]!=''){

                if(results.textContent.slice(-1)=='x'){
                    operate(results.textContent);
                    results.textContent+='x';
                  }  

            }
        }

        if(item == divides){
            numbers = result.textContent.split(/[-+x/]/);
            if (numbers[1]!=''){

                if(results.textContent.slice(-1)=='/'){
                    operate(results.textContent);
                    results.textContent+='/';
                  }  

            }
        }

        if(item == clear){
            result.textContent= '';

        }
        

        if (item == equal){
            operate(result.textContent);   
            
        }
            
        
    })
})

