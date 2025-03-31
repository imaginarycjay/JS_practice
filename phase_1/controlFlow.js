/* let score = 75;

// Conditional statements
if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 75) {
  console.log("Good job!");
} else {
  console.log("Keep practicing!");
} */

/* // Loop example
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
} */

// Function call controlling the flow
/* function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); */

/* let x = 1;
while (x <= 5) {  
  console.log(x);  
  x++;  
} */

// challenge 1
const prompt = require('prompt-sync')();



console.log('Odd or Even Game');
let userInput;
let retry = true;

while (retry){
  userInput = (Number(prompt('Enter a number: ')));

  if(isNaN(userInput)){
    console.log('Only input whole numbers');
  } else if (userInput % 2 === 0){
    console.log('Even number');
  } else {
    console.log('Odd number');
  }

  let ask = prompt('Do u wanna try again? (y/n): ');
  if (ask !== 'y'){
    retry = false;
  }
}