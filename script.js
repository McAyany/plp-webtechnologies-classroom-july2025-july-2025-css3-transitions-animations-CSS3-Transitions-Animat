// ---------------------------
// PART 2: FUNCTIONS & SCOPE
// ---------------------------

// Global variable
let multiplier = 5;

// Function with parameter & return value
function multiplyBy(value) {
  // Local scope variable
  let result = value * multiplier;
  return result;
}

// Function that uses return value
function showResult() {
  let number = 7; // Example input
  let output = multiplyBy(number);
  document.getElementById("calc-result").textContent =
    `${number} × ${multiplier} = ${output}`;
}

// ---------------------------
// PART 3: COMBINING CSS + JS
// ---------------------------
function triggerAnimation() {
  let box = document.getElementById("js-animated-box");
  
  // Toggle class to trigger CSS transition
  box.classList.toggle("animate");
}
