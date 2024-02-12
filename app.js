// Today's forecast is 293 Kelvin
const kelvin = 293;
// Convert Kelvin to Celsius by subtracting 273 from the kelvin variable
const celsius = kelvin - 273;
// Calculates fahrenheit from celsius
let fahrenheit = celsius * (9/5) + 32;
// Prevent decimal using Math.floor();
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);