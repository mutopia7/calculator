const inputNumbers = {
    firstNum: "",
    secoundNum: "",
}
let operator = "";

let showSection = document.querySelector("#show");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operators");
let clear = document.querySelector("#ac");
let flag = true; //for preventing the prime number from changing after selecting the operator
let flagEqual = false;
let flagOperator = false;



clear.addEventListener("click", () => {
    showSection.textContent = 0;
    inputNumbers.firstNum = 0;
    inputNumbers.secoundNum = 0;
    flag = true;
    flagOperator = false;
    flagEqual = false;
    operator = "";
    finalInputNum = "";
    console.log(`first num is : ${inputNumbers.firstNum} | secound num is ${inputNumbers.secoundNum}`)
    getFirstNum()
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Error"; // جلوگیری از تقسیم بر صفر
}

function operate(firstNum, operator, secoundNum) {
    let first = Number(firstNum);
    let secound = Number(secoundNum);
    let result;
    switch (operator) {
        case "add":
            result = add(first, secound);
            break;
        case "subtract":
            result = subtract(first, secound);
            break;
        case "multiply":
            result = multiply(first, secound);
            break;
        case "divide":
            result = divide(first, secound);
            break;
    }
    showSection.textContent = result;
    inputNumbers.firstNum = result;
    inputNumbers.secoundNum = "";
    console.log(`result is ${result}`)
    return result;
}


function getFirstNum(resetAfterEquel = "") {
    let finalInputNum = resetAfterEquel;
    console.log("get first num is run")
    numbers.forEach((element) => {
        element.addEventListener("click", function (e) {
            if (!flag) { return }; // Preventing the prime number from changing after selecting the operator
            inputNum = e.target.textContent;
            finalInputNum += inputNum;
            showSection.textContent = finalInputNum;
            inputNumbers.firstNum = finalInputNum;
            console.log(`first number is ${inputNumbers.firstNum}`);
            return finalInputNum
            // finalInputNum is string
        })
    });
}

function getSecNum() {
    let finalInputNum = "";
    inputNumbers.secoundNum = ""; 
    console.log(`get sec num is run`);
    // copy from all numbers for disconect pre-eventlistener to buttons 
    numbers.forEach((element) => {
        element.replaceWith(element.cloneNode(true));
    });
    numbers = document.querySelectorAll(".num");
    numbers.forEach((element) => {
        element.addEventListener("click", function (e) {
            if (flagEqual) {
                inputNumbers.firstNum = 0;
                inputNumbers.secoundNum = 0;
                flag = true;
                flagOperator = false;
                operator = "";
                flagEqual = false; // ریست مساوی
                finalInputNum = "";
                getFirstNum(e.target.textContent)
            };
            inputNum = e.target.textContent;
            finalInputNum += inputNum;
            showSection.textContent = finalInputNum;
            inputNumbers.secoundNum = finalInputNum;
            console.log(`secound number is ${inputNumbers.secoundNum}`);
            return finalInputNum
            // finalInputNum is string
        })
    });
}


function getOperator() {
    operators.forEach((element) => {
        element.addEventListener("click", function (e) {
            if (flagOperator == true){
                operate(inputNumbers.firstNum, operator, inputNumbers.secoundNum);
                flagOperator = false;
            };
            switch (e.target.textContent) {
                case "/":
                    operator = "divide";
                    console.log(operator);
                    flag = false;
                    flagEqual = false;
                    flagOperator = true;
                    getSecNum();
                    break;
                case "*":
                    operator = "multiply";
                    console.log(operator);
                    flag = false;
                    flagEqual = false;
                    flagOperator = true;
                    getSecNum();
                    break;
                case "-":
                    operator = "subtract";
                    console.log(operator);
                    flag = false;
                    flagEqual = false;
                    flagOperator = true;
                    getSecNum();
                    break;
                case "+":
                    operator = "add";
                    console.log(operator);
                    flag = false;
                    flagEqual = false;
                    console.log(`flagOperator is ${flagOperator}`)
                    flagOperator = true;
                    getSecNum();
                    break;
                case "=":
                    console.log(operator);
                    operate(inputNumbers.firstNum, operator, inputNumbers.secoundNum);
                    flagEqual = true;
                    flagOperator = false;
                    return;
            }
            console.log(e.target.textContent)
        })
    });
}



getFirstNum()

getOperator()



