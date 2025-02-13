
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
let numbers=[];

const button = buttons.map((item)=>{

    item.addEventListener('click', ()=>{
            results.textContent+= item.textContent;
        console.log(numbers);
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

            //if adds is pressed, and there is no number first, it doesn't make effect
            if(results.textContent=='+'){
                results.textContent='';


            } 
            
            //if the same sign appears at least twice, then only show once

            else if(results.textContent.split('+').length - 1 >= 2){
                result.textContent=results.textContent.slice(0,-1);
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
            console.log('el index del last sign: '+results.textContent.split('').indexOf('-'));
            

            if(results.textContent=='-'){
                results.textContent='';
                
            } else if(results.textContent.split('-').length - 1 >= 2){
                result.textContent=results.textContent.slice(0,-1);

            } 
            
            // else if(results.textContent.split('').indexOf('-') > 1){
            //     result.textContent=results.textContent.slice(0,-1);

            // }
        }

        if(item == multiplies){
            numbers = result.textContent.split(/[-+x/]/);
            if (numbers[1]!=''){

                if(results.textContent.slice(-1)=='x'){
                    operate(results.textContent);
                    results.textContent+='x';
                  }  

            }
            if(results.textContent=='x'){
                results.textContent='';
                
            } else if(results.textContent.split('x').length - 1 >= 2){
                result.textContent=results.textContent.slice(0,-1);
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
            if(results.textContent=='/'){
                results.textContent='';
                
            } else if(results.textContent.split('/').length - 1 >= 2){
                result.textContent=results.textContent.slice(0,-1);
            }
        }

        if(item == clear){
            result.textContent= '';
        }
        

        if (item == equal){

            //if equal is pressed, and there is no number first, it doesn't make effect
            if(numbers[0]==undefined){
                results.textContent='';
            }else{
                operate(result.textContent);   

            }
            
        }
        
        if (item == comma){
            if(results.textContent==','){
                results.textContent='';
                
            } 
            
        }

    })
})

