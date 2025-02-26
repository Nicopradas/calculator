
function add(num1,num2){
    number1 =parseFloat(num1);
    number2 =parseFloat(num2);
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

const num = document.querySelector('#num');
const num2 = document.createElement('p');

const regex = /[0-9]/g;
const numbers= [];
let click = false;

const button = buttons.map((item)=>{

    item.addEventListener('click', ()=>{
// IF THERE IS MAXIMUM 10 DIGITS AND IT IS A NUMBER, THEN SHOW NUMBER
if (num.textContent.length != 10 && item.textContent.match(regex) && click==false){
    num.textContent+= item.textContent;
    numbers[0] = num.textContent;
    console.log(numbers);

}

// IF BUTTON ADDS IS CLICKED THEN CHANGE "CLICK" TO TRUE AND STORE THE SIGN OF THE OPERATION IN NUMBERS ARRAY 
if(item == adds){
    click=true;
    console.log(click);
    numbers[1]='+';
    // IF NUM2 OF THE OPERATION IS NOT EMPTY THEN PERFORMS THE OPERATION
    if (num2.textContent.length != 0){
        // EMPTY NUM2 TEXTCONTENT
        num2.textContent='';
        // REPLACE IT AGAIN WITH NUM
        num2.replaceWith(num);
        // PERFORM OPERATION
        //num.textContent= parseInt(numbers[0])+parseInt(numbers[2]);
        num.textContent= add(numbers[0],numbers[2]);

        // START AGAIN STORING THE FIRST NUMBER OF THE OPERATION IN THE ARRAY
        numbers[0]=num.textContent;
    }
}
if(item == substracts){
    click=true;
    numbers[1]='-';
}
if(item == multiplies){
    click=true;
    numbers[1]='x';
}
if(item == divides){
    click=true;
    numbers[1]='/';
}

// IF NUM2 IS LESS THAN 10 DIGITS AND "CLICK" IS TRUE THEN REPLACE NUM WITH NUM2
if (num2.textContent.length != 10 && item.textContent.match(regex) && click==true){
        let text ='';
        text+=item.textContent;

        const textNode = document.createTextNode(text);
        num2.appendChild(textNode);
        num2.id = 'num';
        num.replaceWith(num2);
        

        numbers[2] = num2.textContent;
        console.log(numbers);
    
}



    })
})

