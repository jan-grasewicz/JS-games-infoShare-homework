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
// columnIndexTransfer(player1Row.nextElementSibling)
// function columnIndexTransfer(whichRow) {
//   if (player1Row.nextElementSibling === null) {
//       return;
//   }
//   let columnIndex = getIndexWithinParent(player1Node.parentNode);
//   return player1Row.nextElementSibling.querySelector(`.cell:nth-child(${columnIndex + 1})`);
// };

// let targetCellRight = whichPlayerNode=>whichPlayerNode.parentNode.nextElementSibling;
function targetCellRight(whichPlayerNode){
  return whichPlayerNode.parentNode.nextElementSibling;
}
function targetCellLeft(whichPlayerNode){
  return whichPlayerNode.parentNode.previousElementSibling;
}
function targetCellDown(whichPlayerNode){
  let playerRow = whichPlayerNode.parentNode.parentNode;
  if (playerRow.nextElementSibling === null) {
    return;
  }
  let columnIndex = getIndexWithinParent(whichPlayerNode.parentNode);
  return playerRow.nextElementSibling.querySelector(`.cell:nth-child(${columnIndex + 1})`);
}
function targetCellUp(whichPlayerNode){
  let playerRow = whichPlayerNode.parentNode.parentNode;
  if (playerRow.previousElementSibling === null) {
    return;
  }
  let columnIndex = getIndexWithinParent(whichPlayerNode.parentNode);
  return playerRow.previousElementSibling.querySelector(`.cell:nth-child(${columnIndex + 1})`);
}