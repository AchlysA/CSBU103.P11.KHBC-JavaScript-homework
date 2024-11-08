let displayValue = '';
    function appendToDisplay(value) {
      if (displayValue === '0' && value !== '.') {
        displayValue = '';
      }
      displayValue += value;
      updateDisplay();
    }
    function updateDisplay() {
      document.getElementById("display").textContent = displayValue || '0';
    }
    function clearDisplay() {
      displayValue = '0';
      updateDisplay();
    }
    function calculate() {
      try {
        const sanitizedExpression = displayValue
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/\^/g, '**');

        displayValue = eval(sanitizedExpression).toString();
      } catch (error) {
        displayValue = 'Error';
      }
      updateDisplay();
    }