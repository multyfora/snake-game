import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";
import { getSnakeHead, snakeIntersect } from "./snake.js"
import { draw as drawGameOver } from "./gaveOver.js";


let lastRenderTime = 0;
export let gameOver = false;

const gameBoard = document.getElementById("game-board");
function main(currentTime){

    
    if(!gameOver) window.requestAnimationFrame(main);
    

    const deltaTimeSeconds = (currentTime-lastRenderTime)/1000;
    if (deltaTimeSeconds < 1/SNAKE_SPEED) return;

    
    lastRenderTime=currentTime;

    update();
    draw();

}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    drawGameOver(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect();
}


window.onload = function() {
    document.onselectstart = function() { return false; } // for IE
    document.onmousedown = function() { return false; } // for other browsers
}
