let totalDistance = 0
let timer = 0.00

let distanceDisplay = document.querySelector('#distance');
let timerDisplay = document.querySelector('#timer')
let speedDisplay = document.querySelector('#spedometer')

let backgroundSpeed = 2.5
let kilometersPerSecond = .105 
let lateralSpeed = 25
let horizontalSpeed = 20
let obstacleSpeed = 2.5

speedDisplay.innerText = '380 KM/H'

const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')


canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

let gameLoopInterval = setInterval(gameLoop, 10)
let timerInterval = setInterval(updateTimer, 1000)
let distanceInterval = setInterval(updateDistace, 1000)





class RaceCar{
    constructor(x, y, color, width, height){
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height

    }
    render(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let raceCar1 = new RaceCar(550, 360, 'red', 50, 100)

/////////

class Obstacle{
    constructor(x, y, color, width, height){
        this.x = x
        this.y = y
        this.color = color
        this.width = width  
        this.height = height
    }
    render(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        this.y += obstacleSpeed
        if(this.y >= 600)
        this.y = -700
    }
}

let dirt = new Obstacle(300, -200, 'brown', 200, 60)
let cone1 = new Obstacle(600, -350, 'orange', 50, 50)
let dirt2 = new Obstacle(500, -500, 'brown', 200, 60)
let cone2 = new Obstacle(250, -300, 'orange', 50, 50)
let dirt3 = new Obstacle(700, -800, 'brown', 200, 60)
let cone4 = new Obstacle(400, -650, 'orange', 50, 50)


///////////////

let bg = new Image();
bg.src = 'Images/Background.PNG';

function Background(y){
    this.x = 0, this.y = y, this.w = bg.width, this.h = bg.height;
    this.render = function (){
        ctx.drawImage(bg, 0, this.y += backgroundSpeed);
        if(this.y >= 0){
            this.y = -4320
    
        
        }

    }

}

let background = new Background (-4320);
///////////



function movementHandler(e){
    switch (e.key){
        case('ArrowRight'):
            raceCar1.x = raceCar1.x + lateralSpeed 
            break
        case('ArrowLeft'):
            raceCar1.x = raceCar1.x - lateralSpeed     
            break
        case('ArrowUp'):
            raceCar1.y = raceCar1.y - horizontalSpeed
            break
        case('ArrowDown'):
            raceCar1.y = raceCar1.y + horizontalSpeed
            break
    } 

}

/////////

function updateTimer(){
    timer ++;
    timerDisplay.innerText = "0:00:" + timer;

}

updateTimer();

function updateDistace(){
    totalDistance += kilometersPerSecond;
    distanceDisplay.innerText = 'Kilometers Traveled: ' + totalDistance;
}


function detectCollision(){
    
    let cheat = document.querySelector('#cheat')
    cheat.innerText = `${raceCar1.x} ${raceCar1.width} ${dirt.x}`

    let dirtLeft = raceCar1.x + raceCar1.width > dirt.x

    let dirtRight = raceCar1.x < dirt.x + dirt.width
    
    let dirtTop = raceCar1.y + raceCar1.height > dirt.y

    let dirtBottom = raceCar1.y < dirt.y + dirt.height

    if(dirtLeft && dirtRight && dirtTop && dirtBottom){
        backgroundSpeed = 1
        setTimeout(function(){backgroundSpeed = 2.5}, 5000)
        obstacleSpeed = 1
        setTimeout(function(){obstacleSpeed = 2.5}, 5000)
        kilometersPerSecond = .042
        setTimeout(function(){kilometersPerSecond = .105}, 5000)
        speedDisplay.innerText = '152 KM/H'
        setTimeout(function(){speedDisplay.innerText = '380 KM/H'}, 5000)
    


    } 
    else if(raceCar1.x < 225 || raceCar1.x > 875){
        backgroundSpeed = .5
        setTimeout(function(){backgroundSpeed = 4}, 100)
        obstacleSpeed = .5
        setTimeout(function(){obstacleSpeed = 2.5}, 100)
        kilometersPerSecond = .021
        setTimeout(function(){kilometersPerSecond = .105}, 100)
        speedDisplay.innerText = '76 KM/H'
        setTimeout(function(){speedDisplay.innerText = '380 KM/H'}, 100)

        
    }

}

//function endgame(){ once 10k are met}



function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    detectCollision()
    background.render();
    raceCar1.render();
    dirt.render();
    cone1.render();
    dirt2.render();
    cone2.render();
    dirt3.render();
    cone4.render();

    


}



document.addEventListener('keydown', movementHandler)
    
















//480*1152



