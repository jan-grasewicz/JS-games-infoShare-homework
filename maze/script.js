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
const boardNode= document.querySelector('.board');
const startNode= document.querySelector('.start');
let currentMaze=maze001

//functions
function generateBoard(){
  let nestedArrMaze= currentMaze.map(row=>row.split(''))
  nestedArrMaze.forEach(row=>{
    let rowNode = createNode("row");
    row.forEach(cell=>{
      let cellNode = createNode("cell"); 
        if(cell==='#'){
          cellNode.classList.add('wall')
        }else
        if(cell==='.'){
          cellNode.classList.add('path')
        }else
        if(cell==='P'){
          cellNode.classList.add('start')
        }else
        if(cell==='T'){
          cellNode.classList.add('end')
        }
      rowNode.appendChild(cellNode);
    })

    boardNode.appendChild(rowNode);
  })
}

function spawnPlayer(){
  let playerNode=createNode('player');
  startNode.appendChild(playerNode);
}

//helper functions
function createNode(className) {
  const node = document.createElement("div");
  node.classList.add(className);
  return node;
}
//game
generateBoard()
spawnPlayer()

//sandbox


