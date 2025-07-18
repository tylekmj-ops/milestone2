let xPos = 250;
let yPos = 475;
let basketyPos = yPos - 50

let life = 3
let score = 0


let myLeft, myRight, myTop, myBottom;

let enemyLeft, enemyRight, enemyTop, enemyBottom;

let bombArray = []

function preload(){
  //Ignore the first 2 images lol (walk left/right bombs)

    flyBomb = loadImage('images/flyBombOmb.png');
    basket = loadImage('images/Basket.png')

}

function setup(){
    createCanvas(500,500);
    noStroke();
    imageMode(CENTER)
    
    for(let i = 0; i < 30; i++){
        let temp = new Bombs (random(0,500) , random(0,300) , random(1,4))
        bombArray.push(temp);
    }
    
}

function draw(){
    if(keyIsDown(LEFT_ARROW)){
        xPos -= 10;
    }

    if(keyIsDown(RIGHT_ARROW)){
        xPos += 10;
    }

    background(0);
    textSize(20);
    fill(255);
    text('Score:', 0,15);
    text(score, 60,17)

     ellipse(xPos,yPos, 50, 50);
     image(basket,xPos,basketyPos,50,50)

    for(let i = 0; i < bombArray.length; i++){

        image(flyBomb, bombArray[i].enemyxPos,bombArray[i].enemyyPos, 50,50);
        bombArray[i].enemyyPos += bombArray[i].speedValue;

        flyBombTop = bombArray[i].enemyyPos - 25
        flyBombBottom = bombArray[i].enemyyPos + 25
        playerTop = yPos - 25
        playerBottom = yPos + 25
        basketxPos = bombArray[i].enemyxPos
        playerLeft = xPos - 25;
        playerRight = xPos + 25;
        enemyxPos = bombArray[i].enemyxPos
        enemyyPos = bombArray[i].enemyyPos
        flyBombLeft = bombArray[i].enemyxPos - 25
        flyBombRight = bombArray[i].enemyxPos + 25


        if(playerTop < flyBombBottom && playerBottom > flyBombTop && playerLeft < flyBombRight && playerRight > flyBombLeft){
            bombArray[i].enemyyPos = -25;
            score += 1
        }else if(bombArray[i].enemyyPos > 525){
            bombArray[i].enemyxPos = random(0,500)
            bombArray[i].enemyyPos = -25;
            life -= 1

        }
    
    }
}

class Bombs{
    constructor(x,y,speed){
        this.enemyxPos = x;
        this.enemyyPos = y;
        this.speedValue = speed;
    }
}



//Jhoan you should present your screen because there is literally nothing to show for my screen. It just says loading

//I FIXED IT, im pasting it rn, if tylek isint able too I can, ill present it then. 

//
//Do you want to present it Jhoan or is tylek able to present it?
//


//It still says loading for my live. Its not the images im getting an event error. Ok. 

//Last minute clutch bro LOLLL