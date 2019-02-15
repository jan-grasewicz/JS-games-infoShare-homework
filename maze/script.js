'use strict'

//game
let player1Node


function play(whichMaze=maze002){
  removeKeyboardScrolling()
  window.addEventListener("keydown", handleUserInput);
  generateBoard(whichMaze);
  let startNode = document.querySelector('.start');
  let endNode = document.querySelector('.end');
  spawnEntity('treasure', endNode);
  spawnEntity('player1', startNode);
  spawnEntity('player2', startNode);
  player1Node = document.querySelector('.player1');
}

play()
//sandbox

