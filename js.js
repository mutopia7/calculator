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

const inputNumbers = {
    firstNum: 0,
    secoundNum: 0,

}
let operator = ""


let showSection = document.querySelector("#show");

function getNum() {
    let numbers = document.querySelectorAll(".num");
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


getNum()





