const inputNumbers = {
    firstNum: "",
    secoundNum: "",
}
let operator = "";

let showSection = document.querySelector("#show");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operators");
let clear = document.querySelector("#ac");
let decimal = document.querySelector("#decimal");
let flag = true; //for preventing the prime number from changing after selecting the operator
let flagEqual = false;
let flagOperator = false;




function checkDecimal() {
    if (showSection.textContent.includes(".")) {
        decimal.disabled = true;
        console.log("turm off")
    } else {
        decimal.disabled = false;
        console.log("turn on")
    }
}


function clearAll() {
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
}

clear.addEventListener("click", clearAll)


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
    if (b == 0) {
        return "Eror"
    }
    else {
        return a / b;
    }
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
    console.log(`first number is ${inputNumbers.firstNum} and sec number is ${inputNumbers.secoundNum}`)
    inputNumbers.firstNum = result;
    inputNumbers.secoundNum = "";
    console.log(`result is ${result} and ryp`, typeof (showSection.textContent));
    console.log(`dar nahayatfirst number is ${inputNumbers.firstNum} and sec number is ${inputNumbers.secoundNum}`)
    return result;
}


function getFirstNum(resetAfterEquel = "") {
    let finalInputNum = resetAfterEquel;
    // decimal.disabled = false;
    console.log("get first num is run");
    console.log(finalInputNum);
    showSection.textContent = finalInputNum;
    inputNumbers.firstNum = finalInputNum;
    numbers.forEach((element) => {
        element.addEventListener("click", function (e) {
            if (!flag) { return }; // Preventing the prime number from changing after selecting the operator

            if (e.target.textContent === "+/-"){
                if(finalInputNum === "" || finalInputNum === "0"){return}
                let currentValue = Number(finalInputNum) * -1;
                finalInputNum = currentValue.toString();
                showSection.textContent = finalInputNum;
                inputNumbers.firstNum = finalInputNum;
                console.log(" sign run");
                console.log(`finalInputNum at sign is ${finalInputNum}`)
                return finalInputNum;
            };

            if (e.target.textContent === "del") {
                if(finalInputNum === "" || finalInputNum === "0"){return};
                finalInputNum = finalInputNum.slice(0, finalInputNum.length -1);
                showSection.textContent = finalInputNum;
                inputNumbers.firstNum = finalInputNum;
                console.log(`del is runing and finalinputnum is ${finalInputNum}`);
                return finalInputNum;
            }


            inputNum = e.target.textContent;
            finalInputNum += inputNum;            
            showSection.textContent = finalInputNum;
            inputNumbers.firstNum = finalInputNum;
            console.log(finalInputNum)
            console.log(`first number is ${inputNumbers.firstNum}`); 
            checkDecimal();
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
                console.log("madenazar")
                console.log(e.target.textContent)

                checkDecimal()

                getFirstNum(e.target.textContent)
                return;
            };

            if (e.target.textContent === "+/-"){
                if(finalInputNum === "" || finalInputNum === "0"){return}
                let currentValue = Number(finalInputNum) * -1;
                finalInputNum = currentValue.toString();
                showSection.textContent = finalInputNum;
                inputNumbers.secoundNum = finalInputNum;
                console.log(" sign secnum is run");
                console.log(`finalInputNum at sign is ${finalInputNum}`)
                return finalInputNum;
            }

            if (e.target.textContent === "del") {
                if(finalInputNum === "" || finalInputNum === "0"){return};
                finalInputNum = finalInputNum.slice(0, finalInputNum.length -1);
                showSection.textContent = finalInputNum;
                inputNumbers.secoundNum = finalInputNum;
                console.log(`del secnum is runing and finalinputnum is ${finalInputNum}`);
                return finalInputNum;
            }

            inputNum = e.target.textContent;
            finalInputNum += inputNum;
            showSection.textContent = finalInputNum;
            inputNumbers.secoundNum = finalInputNum;
            console.log(`secound number is ${inputNumbers.secoundNum} and typ`, typeof (showSection.textContent));

            decimal = document.querySelector("#decimal"); // مقداردهی دوباره به دکمه‌ی دسیمال
            if (showSection.textContent.includes(".")) {
                decimal.disabled = true;  // غیرفعال کردن دکمه‌ی دسیمال
            } else {
                decimal.disabled = false; // فعال کردن دکمه‌ی دسیمال
            }


            return finalInputNum
            // finalInputNum is string
        })
    });
}


function getOperator() {
    operators.forEach((element) => {
        element.addEventListener("click", function (e) {
            if (flagOperator == true) {
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
                    // operate(inputNumbers.firstNum, operator, inputNumbers.secoundNum);
                    flagEqual = true;
                    flagOperator = false;
                    flag = true;
                    break;
            }
            console.log(e.target.textContent)
        })
    });
}


getFirstNum()

getOperator()





