function add(a,b){
    console.log(a+b);
    return a + b;
}

function subtract(a,b){
    console.log(a-b);
    return a-b;
}

function multiply(a,b){
    console.log(a*b);
    return a*b;
}

function divide(a,b){
    console.log(a/b);
    return a/b;
}

function operate(firstNum,operator,secoundNum){
    switch(operator){
        case "add":
            add(firstNum,secoundNum);
            break;
        case "subtract":
            subtract(firstNum,secoundNum);
            break;
        case "multiply":
            multiply(firstNum,secoundNum);
            break;
        case "divide":
            divide(firstNum,secoundNum);
            break;
    }
}

