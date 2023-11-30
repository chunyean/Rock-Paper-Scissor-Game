// Information

// User Story:
// As a frequent game player,
// I’d like to play rock, paper, scissors
// So that I can spend an hour of my day having fun.

// Game Rules:
// - Rock wins scissor
// - Paper wins Rock
// - Scissor wins Paper
// - If both are same, its a Tie

// Objective:
// - I should be able to play Player vs Computer.
// - I should be able to play Computer vs Computer.
// - Each new game should be a different game.

// The game is a command line application.

// (Don’t know the game? https://en.wikipedia.org/wiki/Rock_paper_scissors)

// Technical constraints:
// - The solution should be easily runnable from the command line.

//set up Command Line input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// common declaration
const gameRule = {
  rock: { winAgainst: "scissor" },
  scissor: { winAgainst: "paper" },
  paper: { winAgainst: "rock" },
};

const choiceOption = Object.keys(gameRule);

// Common Function
function computerChoice() {
  function randomIdx() {
    return Math.floor(Math.random() * 3);
  }
  return choiceOption[randomIdx()];
}

//function to control main menu and choose between two game mode
function mainMenu() {
  rl.question(
    `Welcome to Rock, Paper, Scissor Game. 

Please choose a game mode. 

(Please key in "p" represent for Player vs Computer or key in "c" represent of Computer vs Computer).
(Exit game key in "e")`,
    (gameMode) => {
      if (gameMode === "p") {
        playerVScomputer();
      } else if (gameMode === "c") {
        computerVScomputer();
      } else if (gameMode === "e") {
        rl.close();
      } else {
        rl.question(
          "Please key in either 'p', 'c' or 'e'.(Please press any key back to main menu)",
          (answer) => {
            if (answer) {
              mainMenu();
            }
          }
        );
      }
    }
  );
}


// first game mode player vs computer and winning condition
function playerVScomputer() {
  rl.question(
    `Please choose an option("rock", "paper", "scissor" or "exit" this mode)`,
    (playerChoice) => {
      if (playerChoice.toLowerCase() === "exit") {
        mainMenu();
      } else if (gameRule.hasOwnProperty(playerChoice)) {
        const computer = computerChoice();
        if (playerChoice === computer) {
          console.log(
            `Player and Computer choose the same ${computer}. This round is a Tie Game`
            // "This round is a Tie Game"
          );
        } else if (gameRule[playerChoice].winAgainst === computer) {
          console.log(
            `Player choose ${playerChoice} and Computer choose ${computer}. This round Player Win.`
            // 'This round Player Win.'
          );
        } else {
          console.log(
            `Player choose ${playerChoice} and Computer choose ${computer}. This round Computer Win.`
            // 'This round Computer Win.'
          );
        }
      } else {
        console.log(
          "You key in the wrong option. Please key in either 'rock', 'paper', scissor"
        );
        playerVScomputer();
      }
      rl.question(`Do you want to play again?(Yes or No)`, (answer) => {
        if (answer.toLowerCase() === "yes") {
          playerVScomputer();
        } else {
          mainMenu();
        }
      });
    }
  );
}

// second game mode computer vs computer and winning condition.
function computerVScomputer() {
  rl.question(`Start the game for Computer vs Computer.`, () => {
    const computer1 = computerChoice();
    const computer2 = computerChoice();

    if (computer1 === computer2) {
      console.log(
        `Computer1 and Computer2 choose the same ${computer2}. This round is a Tie Game`
      );
    } else if (gameRule[computer1].winAgainst === computer2) {
      console.log(
        `Computer1 choose ${computer1} and Computer2 choose ${computer2}. This round Computer1 Win.`
      );
    } else {
      console.log(
        `Computer1 choose ${computer1} and Computer2 choose ${computer2}. This round Computer2 Win.`
      );
    }
    rl.question(`Do you want to play again?(Yes or No)`, function (answer) {
      if (answer.toLowerCase() === "yes") {
        computerVScomputer();
      } else {
        mainMenu();
      }
    });
  });
}

mainMenu();

// module.exports for unit testing
module.exports = { computerChoice: computerChoice, choiceOption: choiceOption };
