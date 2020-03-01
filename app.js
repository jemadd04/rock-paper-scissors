let userScore = 0;
let cpuScore = 0;
// DOM Variables
const USER_SCORE_SPAN = document.getElementById('user-score');
const CPU_SCORE_SPAN = document.getElementById('cpu-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice, cpu) {
  const smallUserWord = '(user)'.fontsize(3).sup();
  const smallCpuWord = '(cpu)'.fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  USER_SCORE_SPAN.innerHTML = userScore;
  CPU_SCORE_SPAN.innerHTML = cpuScore;
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(cpu)}${smallCpuWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, cpu) {
  const smallUserWord = '(user)'.fontsize(3).sup();
  const smallCpuWord = '(cpu)'.fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  cpuScore++;
  USER_SCORE_SPAN.innerHTML = userScore;
  CPU_SCORE_SPAN.innerHTML = cpuScore;
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(cpu)}${smallCpuWord}. You lose!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, cpu) {
  const smallUserWord = '(user)'.fontsize(3).sup();
  const smallCpuWord = '(cpu)'.fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(cpu)}${smallCpuWord}. It's a draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

game('c');

function main() {
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

main();
