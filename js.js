const inputNumbers = {
    firstNum: "",
    secoundNum: "",
}
let operator = "";

let showSection = document.querySelector("#show");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operators");
let clear = document.querySelector("#ac");
let flag = true;

clear.addEventListener("click", () =>{
    showSection.textContent = 0;
    inputNumbers.firstNum = 0;
    inputNumbers.secoundNum = 0;
    flag = true;
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
            showSection.textContent = result;
            inputNumbers.firstNum = result
            break;
        case "subtract":
            result = subtract(first, secound);
            showSection.textContent = result;
            inputNumbers.firstNum = result
            break;
        case "multiply":
            result = multiply(first, secound);
            showSection.textContent = result;
            inputNumbers.firstNum = result
            break;
        case "divide":
            result = divide(first, secound);
            showSection.textContent = result;
            inputNumbers.firstNum = result;
            break;
    }
}


function getFirstNum() {
    let finalInputNum = "";
    console.log("get first num is run")
    numbers.forEach((element) => {
        element.addEventListener("click", function (e) {
            if (!flag) {return}; // Preventing the prime number from changing after selecting the operator
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
    console.log(`first num at top getsecNum function is ${inputNumbers.firstNum}`);
    console.log(`get sec num is run`);
    console.log(`final inpt num at top getsecNum function is ${finalInputNum}`);
    console.log(`secound number at top getsecNum function is ${inputNumbers.secoundNum}`);
    console.log(flag)
    
    // copy from all numbers for disconect pre-eventlistener to buttons 
    numbers.forEach((element) => {
        element.replaceWith(element.cloneNode(true));
    });
    numbers = document.querySelectorAll(".num");
    numbers.forEach((element) => {
        if (flag){return};
        element.addEventListener("click", function (e) {
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


function getOperator(){
    operators.forEach((element) => {
        element.addEventListener("click", function (e) {
            switch(e.target.textContent){
                case "/":
                    operator = "divide";
                    console.log(operator);
                    flag = false;
                    getSecNum();
                    break;
                case "*":
                    operator = "multiply";
                    console.log(operator);
                    flag = false;
                    getSecNum();
                    break;
                case "-":
                    operator = "subtract";
                    console.log(operator);
                    flag = false;
                    getSecNum();
                    break;
                case "+":
                    operator = "add";
                    console.log(operator);
                    flag = false;
                    getSecNum();
                    break;
                case "=":
                    console.log(operator);
                    operate(inputNumbers.firstNum, operator, inputNumbers.secoundNum);
                    
                    break
            }
            console.log(e.target.textContent)
        })
    });
}



getFirstNum()

getOperator()



