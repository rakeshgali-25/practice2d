const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

function ratioAndFactorial(first, second, third) {
  const ratio = ratioOfTwoNumbers(first, second);
  const factorial = factorialOfNumber(third);
  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
