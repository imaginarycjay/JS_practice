const prompt = require('prompt-sync')();

console.log('Guess a number game!');
console.log('Select difficulty (1-3)');
console.log('Easy (1)' + '\nMedium (2)' + '\nHard (3)' + "\n-------------------");
const UserChoice = Number(prompt('Enter a value: '))

function easy(){
    return randomNumber = Math.floor(Math.random() * 10) + 1; 
}function medium(){
    return randomNumber = Math.floor(Math.random() * 50) + 1; 
}function hard(){
    return randomNumber = Math.floor(Math.random() * 100) + 1; 
}
function UserGuess(){
    const userInput1 = Number(prompt('Enter your guess: '));
    return userInput1;
}

let loop = true;
do {
    switch (UserChoice){
        case 1:
            console.log('Easy dificulty. Guess 0-10: ');
            if(UserGuess() != easy()){
                console.log('Wrong guess');
                console.log(`Correct Answer is: ${easy()}`);
            } else {
                console.log('You guessed right!');
            }
            break;
        case 2:
            console.log('Medium dificulty. Guess 0-50: ');
            if (UserGuess() != medium()) {
                console.log('Wrong guess');
                console.log(`Correct Answer is: ${medium()}`);
            } else {
                console.log('You guessed right!');
            }
            break;
        case 3:
            console.log('Hard dificulty. Guess 0-100: ');
            if (UserGuess() != hard()) {
                console.log('Wrong guess');
                console.log(`Correct Answer is: ${hard()}`);
            } else {
                console.log('You guessed right!');
            }
            break;
        default:
            console.log('Wrong input. Numbers 1-3 is only accepted.');
    }

    let loopChoice = prompt('Do you wanna try again? (y/n): ');
    if (loopChoice.toLowerCase() !== 'y'){
        loop = false;
    }
} while (loop)










