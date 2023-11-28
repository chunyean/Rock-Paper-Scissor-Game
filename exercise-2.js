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
// const winningRule = {
//   ROCK: "SCISSOR",
//   SCISSOR: "PAPER",
//   PAPER: "ROCK",
// };

const gameRule = {
  ROCK: { winAgainst: "SCISSOR" },
  SCISSOR: { winAgainst: "PAPER" },
  PAPER: { winAgainst: "ROCK" },
};

const keyOfGameRule = Object.keys(gameRule);

// Common Function
const randomIdx = () => Math.floor(Math.random() * 3);

//Objective 1 function
const winningSituation = (firstPlayer) => {
  secondPlayer = keyOfGameRule[randomIdx()];
  if (gameRule.hasOwnProperty(firstPlayer)) {
    if (firstPlayer === secondPlayer) {
      return ` Player and Computer choose the same ${secondPlayer}. This round is a Tie Game`;
    } else if (gameRule[firstPlayer].winAgainst === secondPlayer) {
      return `Player choose ${firstPlayer} and Computer choose ${secondPlayer}. This round Player Win.`;
    } else {
      return `Player choose ${firstPlayer} and Computer choose ${secondPlayer}. This round Computer Win.`;
    }
  } else {
    return `Please key in again. You choice is not between Rock, Paper, Scissor`;
  }
};

//objective 2 function
const winningSituation2 = () => {
  firstPlayer = keyOfGameRule[randomIdx()];
  secondPlayer = keyOfGameRule[randomIdx()];
  if (gameRule.hasOwnProperty(firstPlayer)) {
    if (firstPlayer === secondPlayer) {
      return ` Computer and Computer2 choose the same ${secondPlayer}. This round is a Tie Game`;
    } else if (gameRule[firstPlayer].winAgainst === secondPlayer) {
      return `Computer choose ${firstPlayer} and Computer2 choose ${secondPlayer}. This round Computer Win.`;
    } else {
      return `Comouter choose ${firstPlayer} and Computer2 choose ${secondPlayer}. This round Computer2 Win.`;
    }
  }
};

// Objective 1 complete
rl.question(
  `Welcome to Rock, Paper, Scissor Game. Please key in your choice.`,
  function (playerChoice) {
    const result = winningSituation(playerChoice.toUpperCase());
    console.log(result);
    rl.close();
  }
);

//objective 2 completed
// rl.question(`Start the game for Computer vs Computer`, () => {
//   console.log(winningSituation2());
//   rl.close();
// });
