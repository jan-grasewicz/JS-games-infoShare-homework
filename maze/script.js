'use strict'

//game
let playerNode
let playerCell

function play(whichMaze=maze002){
  removeKeyboardScrolling()
  window.addEventListener("keydown", handleUserInput);
  generateBoard(whichMaze);
  let startNode = document.querySelector('.start');
  let endNode = document.querySelector('.end');
  spawnEntity('treasure', endNode);
  spawnEntity('player', startNode);
  playerNode = document.querySelector('.player');
  playerCell = playerNode.parentNode;
}

play()
//sandbox


