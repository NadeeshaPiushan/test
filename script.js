// Array of digits to simulate the rolling effect
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function to update the digit display
function updateDigit(digitElement, targetDigit) {
  let currentDigit = 0;
  let startTime = null;
  const interval = setInterval(() => {
    digitElement.textContent = digits[currentDigit];
    currentDigit = (currentDigit + 1) % digits.length;

    if (startTime === null) {
      startTime = new Date().getTime();
    }

    const elapsedTime = new Date().getTime() - startTime;
    if (currentDigit === targetDigit && elapsedTime >= 10000) {
      clearInterval(interval);
    }
  }, 50); // Keep the original animation speed (50ms)
}

// Function to roll the three digits
function rollDigits() {
  const digit1 = Math.floor(Math.random() * 10);
  const digit2 = Math.floor(Math.random() * 10);
  const digit3 = Math.floor(Math.random() * 10);

  const digit1Element = document.getElementById('digit1');
  const digit2Element = document.getElementById('digit2');
  const digit3Element = document.getElementById('digit3');

  updateDigit(digit1Element, digit1);
  updateDigit(digit2Element, digit2);
  updateDigit(digit3Element, digit3);
}

// Add event listener to the "Role" button
const rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', rollDigits);

