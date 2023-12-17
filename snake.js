import { getInputDir } from "./input.js";

export let SNAKE_SPEED = 5;
const snakeBody = [{x: 11, y: 11}];
let newSegments = 0;

export function update(){
    SNAKE_SPEED = document.getElementById("snake-speed-range").value;
    addSegments();


    const inputDir = getInputDir();
    for (let i = snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = { ...snakeBody[i]}
    }

    snakeBody[0].x += inputDir.x;
    snakeBody[0].y += inputDir.y;
}


export function draw(gameBoard){
    snakeBody.forEach((segment, index) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
        if(index%2 ===0) snakeElement.style.transform = "scale(1.01)";
        if(index===0){ 
        snakeElement.style.scale = "1.1";
        snakeElement.style.boxShadow = "#FFFFFF 0px 0px 1.9vmin";
        snakeElement.style.backgroundColor = "#FA00AA";

    }
        if(index===snakeBody.length-2) snakeElement.style.transform = "scale(0.8)";
        if(index===snakeBody.length-1) snakeElement.style.transform = "scale(0.5)";
        

    });
    
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersect(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}

export function expandSnake(amount){

    newSegments += amount;

}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false; 
        return equalPositions(segment,position);
    });
}

function equalPositions(pos1, pos2){
     return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments(){
    for(let i = 0; i<newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length-1]});
    }
    newSegments = 0;
}