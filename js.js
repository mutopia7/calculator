const inputNumbers = {
    firstNum: 0,
    secoundNum: 0,

}
let operator = ""

let showSection = document.querySelector("#show");
let numbers = document.querySelectorAll(".num");


function add(a, b) {
    console.log(a + b);
    return a + b;
}

function subtract(a, b) {
    console.log(a - b);
    return a - b;
}

function multiply(a, b) {
    console.log(a * b);
    return a * b;
}

function divide(a, b) {
    console.log(a / b);
    return a / b;
}

function operate(firstNum, operator, secoundNum) {
    switch (operator) {
        case "add":
            add(firstNum, secoundNum);
            break;
        case "subtract":
            subtract(firstNum, secoundNum);
            break;
        case "multiply":
            multiply(firstNum, secoundNum);
            break;
        case "divide":
            divide(firstNum, secoundNum);
            break;
    }
}


function getFirstNum() {
    let finalInputNum = "";
    numbers.forEach((element) => {
        element.addEventListener("click", function (e) {
            inputNum = e.target.textContent;
            finalInputNum += inputNum;
            showSection.textContent = finalInputNum;
            inputNumbers.firstNum = finalInputNum;
            console.log(finalInputNum)
            console.log(inputNumbers)
            // finalInputNim is string
        })
    });
}

function getSecNum() {
    let finalInputNum = "";
    numbers.forEach((element) => {
        element.addEventListener("click", function (e) {
            inputNum = e.target.textContent;
            finalInputNum += inputNum;
            showSection.textContent = finalInputNum;
            inputNumbers.secoundNum = finalInputNum;
            console.log(finalInputNum)
            console.log(inputNumbers)
            // finalInputNim is string
        })
    });
}

function getOperator(){
    let operators = document.querySelectorAll(".operators");
    operators.forEach((element) => {
        element.addEventListener("click", function (e) {
            switch(e.target.textContent){
                case "/":
                    operator = "divide";
                    console.log(operator);
                    getSecNum()
                    break;
                case "*":
                    operator = "multiply";
                    console.log(operator);
                    getSecNum()
                    break;
                case "-":
                    operator = "subtract";
                    console.log(operator);
                    getSecNum()
                    break;
                case "+":
                    operator = "add";
                    console.log(operator);
                    getSecNum()
                    break;
                case "=":
                    console.log("moasvi");
                    break
            }
            console.log(e.target.textContent)
        })
    });
}


getFirstNum()
getOperator()





