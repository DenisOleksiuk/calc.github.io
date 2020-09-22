'use strict';

const parent = document.querySelector('.calculator-grid'),
      prev = document.querySelector('[data-previous-operand]'),
      current = document.querySelector('[data-current-operand]');

      let operator = '';
      let isAnswer = false;
parent.addEventListener('click', (e) => {
    if (e.target == parent) {
        return;
    }
            
    if (e.target.textContent == '.' && current.textContent.includes('.')) {
        console.log('hi');
        return;
    }

    if (Number(e.target.textContent) || e.target.textContent == '.' || e.target.textContent == '0') {
        if (isAnswer == true) {
            console.log(isAnswer);
            current.textContent = '';
            isAnswer = false;
        }
        current.textContent += e.target.textContent;
    }

        const equil = (x, y) => {
            switch (operator) {
                case "+":
                   return x+y;
                case "-":
                    return x-y;
                case "*":
                    return x*y;
                case "/":
                    return x/y;
            }
        };
    switch (e.target.textContent) {
        case "AC":
            current.textContent = '';
            prev.textContent = '';
            break;
        case "DEL":
            current.textContent = current.textContent.slice(0, -1);
            break;
        case "+":
            prev.textContent = current.textContent + "+";
            operator = "+"
            current.textContent = equil(parseFloat(prev.textContent), parseFloat(current.textContent))
            current.textContent = '';
            break;
        case "-":
            prev.textContent = current.textContent + "-";
            operator = "-"
            current.textContent = '';
            break;
        case "*":
            prev.textContent = current.textContent + "*";
            operator = "*";
            current.textContent = '';
            break;
        case "÷":
            prev.textContent = current.textContent + "÷";
            operator = "/";
            current.textContent = equil(parseFloat(prev.textContent), parseFloat(current.textContent))
            current.textContent = '';
            break;
        case "=":
            current.textContent = equil(parseFloat(prev.textContent), parseFloat(current.textContent))
            prev.textContent = '';
            isAnswer = true;
            break;
    }

});