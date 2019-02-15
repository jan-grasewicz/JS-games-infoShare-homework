'use strict'

//functions
function generateBoard() {
  let boardNode = document.querySelector('.board');
  removeAllChildrenNodes(boardNode);
  let nestedArrMaze = currentMaze.map(row => row.split(''))
  nestedArrMaze.forEach(row => {
    let rowNode = createNode("row");
    row.forEach(cell => {
      let cellNode = createNode("cell");
      if (cell === '#') {
        cellNode.classList.add('wall')
      }
      if (cell === '.') {
        cellNode.classList.add('path')
      }
      if (cell === 'P') {
        cellNode.classList.add('start')
      }
      if (cell === 'T') {
        cellNode.classList.add('end')
      }
      rowNode.appendChild(cellNode);
    })

    boardNode.appendChild(rowNode);
  })
};

function spawnEntity(entityClass, toWhere) {
  let node = createNode(entityClass);
  toWhere.appendChild(node);
};

function movePlayer(toWhere) {
  // console.log(targetNode)
  if(targetNode.classList.contains('wall')){
    return
  }
  playerCell.removeChild(playerNode);
  spawnEntity('player',toWhere)
  playerNode = document.querySelector('.player');
  playerCell = playerNode.parentNode;
  playerRow = playerCell.parentNode;
};
function columnIndexTransfer(whichRow) {
  if (whichRow === null) {
    return;
  }
  columnIndex = getIndexWithinParent(playerCell)
  return whichRow.querySelector(`.cell:nth-child(${columnIndex + 1})`);
};

function handleUserInput(event) {
  // console.log(event.code);
  if (event.code === "ArrowRight") {
    targetNode = playerCell.nextElementSibling;
    if (targetNode === null) {
      return;
    }
    movePlayer(targetNode);
  }

  if (event.code === "ArrowLeft") {
    targetNode = playerCell.previousElementSibling;
    if (targetNode === null) {
      return;
    }
    movePlayer(targetNode);
  }

  if (event.code === "ArrowDown") {
    targetNode = columnIndexTransfer(playerRow.nextElementSibling)
    if (targetNode === undefined) {
      return;
    }
    movePlayer(targetNode);
  }

  if (event.code === "ArrowUp") {
    targetNode = columnIndexTransfer(playerRow.previousElementSibling)
    if (targetNode === undefined) {
      return;
    }
    movePlayer(targetNode);
  }
  detectTreasureCollision();
};

function detectTreasureCollision(){
  if(targetNode.contains(treasureNode)){
    targetNode.removeChild(treasureNode)
    console.log('WIN-WIN-WIN-WIN-WIN-WIN')
    setTimeout(()=>{
      alert('Success! Treasure is yours.')
      play()
    }, 200);
    //add point to player score
  }
};

//helper functions
function createNode(className) {
  const node = document.createElement("div");
  node.classList.add(className);
  return node;
};

function getIndexWithinParent(element) {
  return Array.from(element.parentNode.children).indexOf(element);
};

window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);

function removeAllChildrenNodes(parentNode){
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
}
};
//game
let currentMaze
let targetNode;
window.addEventListener("keydown", handleUserInput);
let treasureNode
let playerNode
let playerCell
let playerRow 
let columnIndex


function play(){
  
  currentMaze = maze002;
  generateBoard();
  // let boardNode = document.querySelector('.board');
  let startNode = document.querySelector('.start');
  let endNode = document.querySelector('.end');
  spawnEntity('treasure', endNode);
  spawnEntity('player', startNode);
  targetNode;
  window.addEventListener("keydown", handleUserInput);
  treasureNode = document.querySelector('.treasure');
  playerNode = document.querySelector('.player');
  playerCell = playerNode.parentNode;
  playerRow = playerCell.parentNode;
  columnIndex = getIndexWithinParent(playerCell);
  
}

play()
//sandbox



