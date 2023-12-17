import { gameOver } from "./game.js";


export function draw(gameBoard){

if(gameOver){

    const gameOverScreen = document.createElement('div');
    gameOverScreen.style.backgroundImage = "url('abstractBG.jpg')";
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

    showRestartButton();



    }
}

function showRestartButton(){
    document.getElementById("button").style.visibility = "visible";
}

document.getElementById("button").addEventListener('click', function(){
    
    window.location = '/';

});