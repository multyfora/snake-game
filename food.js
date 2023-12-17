import { onSnake, expandSnake } from "./snake.js";
import { randomGridPos } from "./grid.js";


let food = getRandomFoodPos();
let EXPANSION_RATE = 5;



export function update(){
    EXPANSION_RATE = document.getElementById("snake-expansion-range").value;
    if(onSnake(food)) {

        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPos();

    }
}


export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);

}

function getRandomFoodPos(){
    let newFoodPos;
    while(newFoodPos == null || onSnake(newFoodPos)){
        newFoodPos = randomGridPos();
    }
    return newFoodPos;
}