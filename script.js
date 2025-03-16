
function add(num1,num2){
    number1 =parseFloat(num1);
    number2 =parseFloat(num2);
    // IF IS LONGER THAN 10 DIGITS THEN USE EXPONENTIAL
    if ((number1+number2).toString().length <9){
        return number1+number2;
    } else{
        return (number1+number2).toExponential(3);
    }

   
}

function substract(num1,num2){
    number1 =parseFloat(num1);
    number2 =parseFloat(num2);
    if ((number1-number2).toString().length <9){
        return number1-number2;
    } else{
        return (number1-number2).toExponential(3);
    }

}

function multiply(num1,num2){
    number1 =parseFloat(num1);
    number2 =parseFloat(num2);
    if ((number1*number2).toString().length <9){
        return number1*number2;
    } else{
        return (number1*number2).toExponential(3);
    }

}

function divide(num1,num2){
    number1 =parseFloat(num1);
    number2 =parseFloat(num2);
    if ((number1/number2).toString().length <9){
        return number1/number2;
    } else{
        return (number1/number2).toExponential(3);
    }

}

function operate(num,num2,numbers){
    // EMPTY NUM2 TEXTCONTENT
    num2.textContent='';
    // REPLACE IT AGAIN WITH NUM
    num2.replaceWith(num);

    // PERFORM OPERATION
    if (numbers[1]=='+'){
        num.textContent= add(numbers[0],numbers[2]);
    } else if (numbers[1]=='-'){
        num.textContent= substract(numbers[0],numbers[2]);
    } else if (numbers[1]=='x'){
        num.textContent= multiply(numbers[0],numbers[2]);
    } else if (numbers[1]=='/'){
        num.textContent= divide(numbers[0],numbers[2]);
    } 
    // IF THERE IS ANY SIGN STORED IN POSITION 3, THEN STORE IT IN POSITION 1 TO START OVER AGAIN
    if(numbers[3]){
        numbers[1]=numbers[3];

    }

    // START AGAIN STORING THE FIRST NUMBER OF THE OPERATION IN THE ARRAY
    numbers[0]=num.textContent;

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
    document.querySelector('#point'),

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

let numbers= [];
console.log(numbers);
let click = false;

const button = buttons.map((item)=>{

    item.addEventListener('click', ()=>{
// IF THERE IS MAXIMUM 10 DIGITS AND IT IS A NUMBER, THEN SHOW NUMBER
if (num.textContent.length != 9 && (item.textContent.match(regex) || item.textContent == '.') && click==false){

    // IF THERE IS ONE POINT, YOU CANNOT INPUT MORE
    if ((num.textContent.split('.').length-1) == 1){
        if (num.textContent.length != 9 && item.textContent.match(regex) && click==false){
            num.textContent+= item.textContent;

        }
    }else{
        num.textContent+= item.textContent;

    }
    numbers[0] = num.textContent;
    console.log(numbers);

}

if(numbers[0]){

// IF BUTTON ADDS IS CLICKED THEN CHANGE "CLICK" TO TRUE AND STORE THE SIGN OF THE OPERATION IN NUMBERS ARRAY 

if(item == adds){
    click=true;
    //console.log(click);
    // ONLY IF A SIGN DOESNT EXIST THEN STORES THE NEW ONE, IF IT DOES EXIST, STORE THE SIGN IN POSITION 3 OF ARRAY
    if (!numbers[1]){
        numbers[1]='+';
    }else{
        numbers[3]='+';
    }
    //IF ANY OTHER BUTTON IS CLICKED WHILE ADDS IS BEING CLICKED THEN CHANGE COLOR
    document.getElementById("adds").style.backgroundColor = "#955802";
    document.getElementById("substracts").style.backgroundColor = "#ff9601";
    document.getElementById("multiplies").style.backgroundColor = "#ff9601";
    document.getElementById("divides").style.backgroundColor = "#ff9601";

    

    
    // IF NUM2 OF THE OPERATION IS NOT EMPTY THEN PERFORMS THE OPERATION
    if (num2.textContent.length != 0){
        operate(num,num2,numbers);
    }
}

if(item == substracts){
    click=true;
    // ONLY IF A SIGN DOESNT EXIST THEN STORES THE NEW ONE, IF IT DOES EXIST, STORE THE SIGN IN POSITION 3 OF ARRAY
    if (!numbers[1]){
        numbers[1]='-';
    }else{
        numbers[3]='-';
    }
    document.getElementById("substracts").style.backgroundColor = "#955802";
    document.getElementById("adds").style.backgroundColor = "#ff9601";
    document.getElementById("multiplies").style.backgroundColor = "#ff9601";
    document.getElementById("divides").style.backgroundColor = "#ff9601";

     // IF NUM2 OF THE OPERATION IS NOT EMPTY THEN PERFORMS THE OPERATION
     if (num2.textContent.length != 0){
        operate(num,num2,numbers);

    }


    
}




if(item == multiplies){
    click=true;
    if (!numbers[1]){
        numbers[1]='x';
    }else{
        numbers[3]='x';
    }
    document.getElementById("multiplies").style.backgroundColor = "#955802";
    document.getElementById("adds").style.backgroundColor = "#ff9601";
    document.getElementById("substracts").style.backgroundColor = "#ff9601";
    document.getElementById("divides").style.backgroundColor = "#ff9601";
    

    if (num2.textContent.length != 0){
        operate(num,num2,numbers);

    }
}


if(item == divides){
    click=true;
    if (!numbers[1]){
        numbers[1]='/';
    }else{
        numbers[3]='/';
    }
    document.getElementById("divides").style.backgroundColor = "#955802";
    document.getElementById("adds").style.backgroundColor = "#ff9601";
    document.getElementById("substracts").style.backgroundColor = "#ff9601";
    document.getElementById("multiplies").style.backgroundColor = "#ff9601";

    if (num2.textContent.length != 0){
        operate(num,num2,numbers);

    }
}
if (item == clear  ){
    // START AGAIN FROM SCRATCH
    click=false;
    num.textContent='';
    numbers=[];


}




if (item == equal){
    console.log(numbers);
    // EMPTY NUM2 TEXTCONTENT
    num2.textContent='';
    // REPLACE IT AGAIN WITH NUM
    num2.replaceWith(num);
    if (numbers[1]=='+'){
        num.textContent= add(numbers[0],numbers[2]);
    } else if (numbers[1]=='-'){
        num.textContent= substract(numbers[0],numbers[2]);
    } else if (numbers[1]=='x'){
        num.textContent= multiply(numbers[0],numbers[2]);
    } else if (numbers[1]=='/'){
        num.textContent= divide(numbers[0],numbers[2]);
    } 
    //STORE THE RESULT OF THE OPERATION IN POSITION 0 
    numbers[0]=num.textContent;
    //STORE THE NEXT SIGN OF THE OPERATOR IN POSITION 1
    numbers[1]=numbers[3];
}













}
// IF NUM2 IS LESS THAN 10 DIGITS AND "CLICK" IS TRUE THEN REPLACE NUM WITH NUM2
if (num2.textContent.length != 9 && (item.textContent.match(regex) || item.textContent == '.') && click==true){
        let text ='';
        

        // IF THERE IS ONE POINT, YOU CANNOT INPUT MORE

        if ((num2.textContent.split('.').length-1) == 1){
            if (num2.textContent.length != 9 && item.textContent.match(regex) && click==true){
                text+=item.textContent;
                const textNode = document.createTextNode(text);
                num2.appendChild(textNode);
                num2.id = 'num';
                num.replaceWith(num2);
            }
        }else{
            text+=item.textContent;
                const textNode = document.createTextNode(text);
                num2.appendChild(textNode);
                num2.id = 'num';
                num.replaceWith(num2);
    
        }


        numbers[2] = num2.textContent;

        if (numbers[2]){
            document.getElementById("adds").style.backgroundColor = "#ff9601";
            document.getElementById("substracts").style.backgroundColor = "#ff9601";
            document.getElementById("multiplies").style.backgroundColor = "#ff9601";
            document.getElementById("divides").style.backgroundColor = "#ff9601";

        }
    
}



    })
})

