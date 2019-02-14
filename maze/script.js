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
const playerNode=document.querySelector('.player');
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
  let playerCell= playerNode.parentElement;
  playerCell.removeChild(playerNode);
  spawnPlayer(toWhere)
  console.log(playerCell)
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
spawnPlayer(startNode)



//sandbox
