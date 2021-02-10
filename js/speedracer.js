let totalDistance = 0
let timer = 0.00

let distanceDisplay = document.querySelector('#distance');
let timerDisplay = document.querySelector('#timer')

let backgroundSpeed = 4
let kilometersPerSecond = .105 
let lateralSpeed = 25
let horizontalSpeed = 10

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
        this.height = height
        this.width = width

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
        this.height = height 
        this.width = width
    }
    render(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        this.y ++
        if(this.y >= 600)
        this.y = -100
    }
}

let dirt = new Obstacle(300, 100, 'brown', 200, 60)

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
    let dirtLeft = raceCar1.x + raceCar1.width > dirt.x
    console.log(dirtLeft)
    let cheat = document.querySelector('#cheat')
    cheat.innerText = `${raceCar1.x} ${raceCar1.width} ${dirt.x}`
    






}






function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    detectCollision()
    background.render();
    raceCar1.render();
    dirt.render();

    


}



document.addEventListener('keydown', movementHandler)
    
















//480*1152



