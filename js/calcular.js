document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator__keys');
    const display = calculator.querySelector('.calculator__display');
    let firstValue = '';
    let operator = '';
    let isCalculating = false;
  
    keys.addEventListener('click', e => {
      if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
  
        if (!action) {
          if (isCalculating) {
            display.textContent = keyContent;
            isCalculating = false;
          } else if (display.textContent === '0') {
            display.textContent = keyContent;
          } else {
            display.textContent += keyContent;
          }
        }
  
        if (action === 'decimal') {
          if (!display.textContent.includes('.')) {
            display.textContent += '.';
          }
        }
  
        if (action === 'clear') {
          display.textContent = '0';
          firstValue = '';
          operator = '';
          isCalculating = false;
          // Remove the "is-depressed" class from all keys
          const allKeys = keys.querySelectorAll('button');
          allKeys.forEach(key => {
            key.classList.remove('is-depressed');
          });
          return; // Exit the event listener
        }
  
        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide' ||
          action === 'porcentaje' ||
          action === 'cuadrado' ||
          action === 'raiz'
        ) {
          firstValue = display.textContent;
          operator = action;
          isCalculating = true;
        }
  
        if (action === 'calculate') {
          const secondValue = display.textContent;
          if (firstValue && operator && secondValue) {
            display.textContent = calculate(firstValue, operator, secondValue);
            firstValue = '';
            operator = '';
            isCalculating = false;
          }
        }
  
        // Remove the "is-depressed" class from all keys
        const allKeys = keys.querySelectorAll('button');
        allKeys.forEach(key => {
          key.classList.remove('is-depressed');
        });
  
        // Add the "is-depressed" class to the operator key
        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide' ||
          action === 'porcentaje' ||
          action === 'cuadrado' ||
          action === 'raiz'
        ) {
          key.classList.add('is-depressed');
        }
      }
    });
  
    const calculate = (n1, operator, n2) => {
      const num1 = parseFloat(n1);
      const num2 = parseFloat(n2);
  
      if (operator === 'add') {
        return num1 + num2;
      } else if (operator === 'subtract') {
        return num1 - num2;
      } else if (operator === 'multiply') {
        return num1 * num2;
      } else if (operator === 'divide') {
        return num1 / num2;
      } else if (operator === 'porcentaje') {
        return (num1 * num2) / 100;
      } else if (operator === 'cuadrado') {
        return Math.pow(num1, 2);
      } else if (operator === 'raiz') {
        return Math.sqrt(num1);
      }
  
      return '';
    };
  });
  