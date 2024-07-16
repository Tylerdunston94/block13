/**
 * Takes a Fahrenheit temperature and returns the temperature in Celsius
 * @param {string} fahren temperature in degrees Fahrenheit
 * @returns {number} the temperature in degrees Celsius
 */
function convertToCelcius(fahren) {
  let celsius = (fahren - 32) * (5/9);
  return celsius;
}

/**
 * Takes both numbers (F, C) and displays a message with
 * both numbers and how that temperature makes you feel using this chart:
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren Fahrenheit temperature
 * @param {number} celc Celsius temperature
 */
function createMessage(fahren, celc) {
  let message = `The temperature in Fahrenheit is ${fahren} and in Celsius is ${celc}. It feels `;
  
  if (fahren < 32) {
    message += `"very cold"`;
  } else if (fahren < 64) {
    message += `"cold"`;
  } else if (fahren < 86) {
    message += `"warm"`;
  } else {
    message += `"hot"`;
  }

  return message;
}

/**
 * Takes a number and returns a random integer between 0 and the limit
 * @param {number} limit maximum limit to generate a random number
 * @returns {number} a random integer between 0 and the limit
 */
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = parseInt(prompt(
  "Enter a number, we will convert that number from Fahrenheit to Celsius"
));
let celc = convertToCelcius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = parseInt(prompt(
  "Let's try that again. Enter a number, we will convert that number from Fahrenheit to Celsius"
));
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);
