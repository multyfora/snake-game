import { gameOver } from "./game.js";
import { getSnakeLength } from "./snake.js";

export function draw(gameBoard){

if(gameOver){

    const gameOverScreen = document.createElement('div');
    // gameOverScreen.style.backgroundImage = "url('abstractBG.jpg')";
    gameOverScreen.style.height = "100vmin";
    gameOverScreen.style.width = "100vmin";
    gameOverScreen.classList.add('game-over');
    gameBoard.appendChild(gameOverScreen);

    const gameOverText = document.createElement('div');
    gameOverText.style.height = "100vmin";
    gameOverText.style.width = "100vmin";
    gameOverText.classList.add('game-over-text');
    gameOverText.innerHTML = "GAME OVER";
    gameOverScreen.appendChild(gameOverText);

    const score = document.createElement('div');
    score.classList.add('score');
    score.innerHTML = "Score: " + getSnakeLength();
    gameOverScreen.appendChild(score);

    showRestartButton();
    


    }
}

function showRestartButton(){
    document.getElementById("button").style.visibility = "visible";
}

document.getElementById("button").addEventListener('click', function(){
    
    window.location = '/snake-game/';

});