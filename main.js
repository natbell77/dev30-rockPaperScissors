function getUserChoice(userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log("Invalid user choice");
    }
}

function getComputerChoice() {
    var random = Math.floor(Math.random() * 2.9);
    var result = '';
    switch (random) {
        case 0:
            result = 'rock';
            break;
        case 1:
            result = 'paper';
            break;
        case 2:
            result = 'scissors';
            break;
    }
    return result;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return `User used the bomb :O!\nUSER WINS!`;
    }

    if (userChoice === computerChoice) {
        return `User: ${userChoice}\nComputer: ${computerChoice}\n\nIT WAS A TIE!`
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return `User: ${userChoice}\nComputer: ${computerChoice}\n\nCOMPUTER HAS WON!`;
        } else {
            return `User: ${userChoice}\nComputer: ${computerChoice}\n\nUSER HAS WON!`;
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return `User: ${userChoice}\nComputer: ${computerChoice}\n\nCOMPUTER HAS WON!`
        } else {
            return `User: ${userChoice}\nComputer: ${computerChoice}\n\nUSER HAS WON!`
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return `User: ${userChoice}\nComputer: ${computerChoice}\n\nCOMPUTER HAS WON!`
        } else {
            return `User: ${userChoice}\nComputer: ${computerChoice}\n\nUSER HAS WON!`
        }
    }
}

function playGame() {
    return determineWinner(getUserChoice('paper'), getComputerChoice());
}
var result = playGame();
console.log(result);

