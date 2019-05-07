let num1;
let num2;
let result;

function readinputs(){
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
}

function printResult(){
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Answer = " +result;
}


function addition(){
    readinputs();
    result = num1 + num2;
    printResult(result);
}

function subtraction(){
    readinputs();
    result = num1 - num2;
    printResult(result);
    
}

function multiplication(){
    readinputs();
    result = num1 * num2;
    printResult(result);
}

function division(){
    readinputs();
    result = num1 / num2;
    printResult(result);
    
}