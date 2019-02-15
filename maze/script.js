'use strict'

//functions
function generateBoard(whichMaze) {
  let boardNode = document.querySelector('.board');
  removeAllChildrenNodes(boardNode);
  let nestedArrMaze = whichMaze.map(row => row.split(''))
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
  if(toWhere.classList.contains('wall')){
    return
  }
  playerCell.removeChild(playerNode);
  spawnEntity('player',toWhere)
  playerNode = document.querySelector('.player');
  playerCell = playerNode.parentNode;
};
function columnIndexTransfer(whichRow) {
  if (whichRow === null) {
    return;
  }
  let columnIndex = getIndexWithinParent(playerCell);
  return whichRow.querySelector(`.cell:nth-child(${columnIndex + 1})`);
};

function handleUserInput(event) {
  // console.log(event.code);
  let targetNode
  let playerRow = playerCell.parentNode;
  let treasureNode = document.querySelector('.treasure');
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
  
  // if (treasureNode==='undefined')
  // {console.log('wrong key')}



  detectCollisionDestroy(targetNode,treasureNode,announcWinner);
};

function announcWinner(){
  console.log('WIN-WIN-WIN-WIN-WIN-WIN')
    setTimeout(()=>{
      alert('Success! Treasure is yours.')
      play()
    }, 200);
}

//helper functions
function createNode(className) {
  const node = document.createElement("div");
  node.classList.add(className);
  return node;
};

function getIndexWithinParent(element) {
  return Array.from(element.parentNode.children).indexOf(element);
};

function removeAllChildrenNodes(parentNode){
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
}
};

function detectCollisionDestroy(target,contain,actionFunc){
  if(target.contains(contain)){
    target.removeChild(contain)
    actionFunc()
    // announce action
    //add point to player score
  }
};

function removeKeyboardScrolling(){
  window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);
  }

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


