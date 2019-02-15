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

function movePlayer1(toWhere) {
    if (toWhere.classList.contains('wall')) {
        return
    }
    player1Node.parentNode.removeChild(player1Node);
    spawnEntity('player1', toWhere)

    player1Node = document.querySelector('.player1');
    let treasureNode = document.querySelector('.treasure');
    detectCollisionDestroy(toWhere, treasureNode, announcWinner);
};

function handleUserInput(event) {
    console.log(event.code);
    let target1Node
    let target2Node
    if (event.code === "ArrowRight") {
        target1Node = targetCellRight(player1Node);
        if (target1Node === null) {
            return;
        }
        movePlayer1(target1Node);
    }

    if (event.code === "ArrowLeft") {
        target1Node = targetCellLeft(player1Node);
        if (target1Node === null) {
            return;
        }
        movePlayer1(target1Node);
    }

    if (event.code === "ArrowDown") {
        target1Node = targetCellDown(player1Node);
        if (target1Node === undefined) {
            return;
        }
        movePlayer1(target1Node);
    }

    if (event.code === "ArrowUp") {
        target1Node = targetCellUp(player1Node);
        if (target1Node === undefined) {
            return;
        }
        movePlayer1(target1Node);
    }
    //second player controls
    if (event.code === "KeyD") {
        target2Node = targetCellRight(player2Node);
        if (target2Node === null) {
            return;
        }
        movePlayer1(target2Node);
    }

    if (event.code === "KeyA") {
        target2Node = targetCellLeft(player2Node);
        if (target2Node === null) {
            return;
        }
        movePlayer1(target2Node);
    }

    if (event.code === "KeyS") {
        target2Node = targetCellDown(player2Node);
        if (target2Node === undefined) {
            return;
        }
        movePlayer1(target2Node);
    }

    if (event.code === "KeyW") {
        target2Node = targetCellUp(player2Node);
        if (target2Node === undefined) {
            return;
        }
        movePlayer1(target2Node);
    }
};

function targetCellRight(whichPlayerNode) {
    return whichPlayerNode.parentNode.nextElementSibling;
}
function targetCellLeft(whichPlayerNode) {
    return whichPlayerNode.parentNode.previousElementSibling;
}
function targetCellDown(whichPlayerNode) {
    let playerRow = whichPlayerNode.parentNode.parentNode;
    if (playerRow.nextElementSibling === null) {
        return;
    }
    let columnIndex = getIndexWithinParent(whichPlayerNode.parentNode);
    return playerRow.nextElementSibling.querySelector(`.cell:nth-child(${columnIndex + 1})`);
}
function targetCellUp(whichPlayerNode) {
    let playerRow = whichPlayerNode.parentNode.parentNode;
    if (playerRow.previousElementSibling === null) {
        return;
    }
    let columnIndex = getIndexWithinParent(whichPlayerNode.parentNode);
    return playerRow.previousElementSibling.querySelector(`.cell:nth-child(${columnIndex + 1})`);
}

function announcWinner() {
    console.log('WIN-WIN-WIN-WIN-WIN-WIN')
    setTimeout(() => {
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

function removeAllChildrenNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
};

function detectCollisionDestroy(target, contain, actionFunc) {
    if (target.contains(contain)) {
        target.removeChild(contain)
        actionFunc()
        // announce action
        //add point to player score
    }
};

function removeKeyboardScrolling() {
    window.addEventListener("keydown", function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
}