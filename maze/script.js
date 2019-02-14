'use strict'

//mazes
const maze001 = [
    '#########',
    '#.....#.#',
    '#.###..T#',
    '#..#..#.#',
    '#.#######',
    '#..#..P.#',
    '#.##.##.#',
    '#.....#.#',
    '#########',
  ]

//constants and variables
const boardNode=document.querySelector('.board');

let currentMaze=maze001;

//functions
function generateBoard(){
  let nestedArrMaze=currentMaze.map(row=>row.split(''))
  nestedArrMaze.forEach(row=>{
    let rowNode = createNode("row");
    row.forEach(cell=>{
      let cellNode = createNode("cell"); 
        if(cell==='#'){
          cellNode.classList.add('wall')
        }
        if(cell==='.'){
          cellNode.classList.add('path')
        }
        if(cell==='P'){
          cellNode.classList.add('start')
        }
        if(cell==='T'){
          cellNode.classList.add('end')
        }
      rowNode.appendChild(cellNode);
    })

    boardNode.appendChild(rowNode);
  })
}

function spawnPlayer(toWhere){
  let playerNode=createNode('player');
  toWhere.appendChild(playerNode);
}

function movePlayer(toWhere) {
  playerCell.removeChild(playerNode);
  spawnPlayer(toWhere)
  playerNode=document.querySelector('.player');
  playerCell= playerNode.parentNode;
}

//helper functions
function createNode(className) {
  const node = document.createElement("div");
  node.classList.add(className);
  return node;
}

//game
generateBoard()
const startNode= document.querySelector('.start');
const endNode= document.querySelector('.end');
spawnPlayer(startNode)
let playerNode=document.querySelector('.player');
let playerCell= playerNode.parentNode;
let playerRow=playerCell.parentNode;


//sandbox

 
window.addEventListener("keyup", handleUserInput);

function handleUserInput(event) {
  
  console.log(event.code);
  if (event.code === "ArrowRight") {
    const targetNode = playerCell.nextElementSibling;
    if (targetNode === null) {
      return;
    }
    movePlayer(targetNode);
  }

  if (event.code === "ArrowLeft") {
    const targetNode = playerCell.previousElementSibling;
    if (targetNode === null) {
      return;
    }
    movePlayer(targetNode);
  }

  if (event.code === "ArrowDown") {
    const targetNode = playerRow.nextElementSibling;
    if (targetNode === null) {
      return;
    }
    movePlayer(targetNode);
  }

  if (event.code === "ArrowUp") {
    const targetNode = playerRow.previousElementSibling;
    if (targetNode === null) {
      return;
    }
    movePlayer(targetNode);
  }
  // detectTresureCollision();
}