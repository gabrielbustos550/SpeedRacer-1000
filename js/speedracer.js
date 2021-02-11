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

let gameLoopInterval = null
let statsInterval = setInterval(updateStatistics, 1000)

let dirt = []
let cone = []



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
        this.y = -2000
    }
}

let dirt1 = new Obstacle(225, -650, 'brown', 200, 60)
dirt.push(dirt1)
let dirt2 = new Obstacle(475, -650, 'brown', 200, 60)
dirt.push(dirt2)
let dirt3 = new Obstacle(725, -650, 'brown', 200, 60)
dirt.push(dirt3)
let cone1 = new Obstacle(475, -300, 'orange', 50, 50)
cone.push(cone1)
let cone2 = new Obstacle(500, -250, 'orange', 50, 50)
cone.push(cone2)
let cone3 = new Obstacle(575, -250, 'orange', 50, 50)
cone.push(cone3)
let cone4 = new Obstacle(600, -300, 'orange', 50, 50)
cone.push(cone4)
let cone5 = new Obstacle(450, -350, 'orange', 50, 50)
cone.push(cone5)
let cone6 = new Obstacle(625, -350, 'orange', 50, 50)
cone.push(cone6)



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


function updateStatistics(){
    totalDistance += kilometersPerSecond;
    distanceDisplay.innerText = 'Kilometers Traveled: ' + totalDistance;
    timer += 1;
    timerDisplay.innerText = "0:00:" + timer;

    if(totalDistance >= 7){
        lateralSpeed = 0
        horizontalSpeed = 0
        backgroundSpeed = 0
        kilometersPerSecond = 0 
        obstacleSpeed = 0
        clearInterval(statsInterval)

    }
}
updateStatistics();




function obstacleCollision(collision1, collision2){
    
    let cheat = document.querySelector('#cheat')
    cheat.innerText = `${raceCar1.x} ${raceCar1.width} ${dirt1.x}`
    


    let dirtLeft = collision1.x + collision1.width > collision2.x

    let dirtRight = collision1.x < collision2.x + collision2.width
    
    let dirtTop = collision1.y + collision1.height > collision2.y

    let dirtBottom = collision1.y < collision2.y + collision2.height

    if(dirtLeft && dirtRight && dirtTop && dirtBottom){
        return true
        
    } 
    
}
function detectOutOfBounds(){
    if(raceCar1.x < 225 || raceCar1.x > 875){
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





function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    background.render();
    for(let i = 0; i < dirt.length; i ++){
        dirt[i].render();
        if(obstacleCollision(raceCar1, dirt[i]) === true){
            backgroundSpeed = 1
            setTimeout(function(){backgroundSpeed = 2.5}, 5000)
            obstacleSpeed = 1
            setTimeout(function(){obstacleSpeed = 2.5}, 5000)
            kilometersPerSecond = .042
            setTimeout(function(){kilometersPerSecond = .105}, 5000)
            speedDisplay.innerText = '152 KM/H'
            setTimeout(function(){speedDisplay.innerText = '380 KM/H'}, 5000)
        }
    }
    for (let i = 0; i < cone.length; i ++){
        cone[i].render();
    }
    raceCar1.render();

    
    
}



document.addEventListener('keydown', movementHandler)


gameLoopInterval = setInterval(gameLoop, 10)


















//480*1152



