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

let gameLoopInterval = null
let statsInterval = null



////////

speedDisplay.innerText = '380 KM/H'




//////////

const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')


canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])


///////////////

let dirt = []
let cone = []

const carImg = new Image()
carImg.src = 'Images/raceCar.PNG'

class RaceCar{
    constructor(x, y, width, height, img){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.img = img
        
    }
    render(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

let raceCar1 = new RaceCar(550, 360, 50, 100, carImg)

/////////



const coneImg = new Image()
coneImg.src = 'Images/cone.PNG'
const dirtImg = new Image()
dirtImg.src = 'Images/dirt.PNG'


class Obstacle{
    constructor(x, y, color, width, height, img){
        this.x = x
        this.y = y
        this.color = color
        this.width = width  
        this.height = height
        this.img = img
    }
    render(){
        ctx.fillStyle = this.color
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        this.y += obstacleSpeed
        if(this.y >= 600)
        this.y = -2000
    }
}

let dirt1 = new Obstacle(475, -950, 'brown', 200, 60, dirtImg)
dirt.push(dirt1)
let dirt2 = new Obstacle(300, -650, 'brown', 200, 60, dirtImg)
dirt.push(dirt2)
let dirt3 = new Obstacle(625, -650, 'brown', 200, 60, dirtImg)
dirt.push(dirt3)
let dirt4 = new Obstacle(225, -1050, 'brown', 200, 60, dirtImg)
dirt.push(dirt4)
let dirt5 = new Obstacle(750, -1700, 'brown', 200, 60, dirtImg)
dirt.push(dirt5)
let dirt6 = new Obstacle(550, -1700, 'brown', 200, 60, dirtImg)
dirt.push(dirt6)
let dirt7 = new Obstacle(255, -1550, 'brown', 200, 60, dirtImg)
dirt.push(dirt7)
let dirt8 = new Obstacle(725, -2100, 'brown', 200, 60, dirtImg)
dirt.push(dirt8)
let dirt9 = new Obstacle(200, -2250, 'brown', 200, 60, dirtImg)
dirt.push(dirt9)







let cone1 = new Obstacle(475, -300, 'orange', 50, 50, coneImg)
cone.push(cone1)
let cone2 = new Obstacle(500, -250, 'orange', 50, 50, coneImg)
cone.push(cone2)
let cone3 = new Obstacle(575, -250, 'orange', 50, 50, coneImg)
cone.push(cone3)
let cone4 = new Obstacle(600, -300, 'orange', 50, 50, coneImg)
cone.push(cone4)
let cone5 = new Obstacle(450, -350, 'orange', 50, 50, coneImg)
cone.push(cone5)
let cone6 = new Obstacle(625, -350, 'orange', 50, 50, coneImg)
cone.push(cone6)
let cone7 = new Obstacle(225, -450, 'orange', 50, 50, coneImg)
cone.push(cone7)
let cone8 = new Obstacle(875, -450, 'orange', 50, 50, coneImg)
cone.push(cone8)
let cone9 = new Obstacle(300, -300, 'orange', 50, 50, coneImg)
cone.push(cone9)
let cone10 = new Obstacle(800, -300, 'orange', 50, 50, coneImg)
cone.push(cone10)
let cone11 = new Obstacle(875, -800, 'orange', 50, 50, coneImg)
cone.push(cone11)
let cone12 = new Obstacle(675, -975, 'orange', 50, 50, coneImg)
cone.push(cone12)
let cone13 = new Obstacle(725, -1025, 'orange', 50, 50, coneImg)
cone.push(cone13)
let cone14 = new Obstacle(775, -1075, 'orange', 50, 50, coneImg)
cone.push(cone14)
let cone15 = new Obstacle(450, -1275, 'orange', 50, 50, coneImg)
cone.push(cone15)
let cone16 = new Obstacle(525, -1150, 'orange', 50, 50, coneImg)
cone.push(cone16)
let cone17 = new Obstacle(225, -1375, 'orange', 50, 50, coneImg)
cone.push(cone17)
let cone18 = new Obstacle(225, -1425, 'orange', 50, 50, coneImg)
cone.push(cone18)
let cone19 = new Obstacle(275, -1400, 'orange', 50, 50, coneImg)
cone.push(cone19)
let cone20 = new Obstacle(325, -1375, 'orange', 50, 50, coneImg)
cone.push(cone20)
let cone21 = new Obstacle(275, -1350, 'orange', 50, 50, coneImg)
cone.push(cone21)
let cone22 = new Obstacle(225, -1325, 'orange', 50, 50, coneImg)
cone.push(cone22)
let cone23 = new Obstacle(825, -1525, 'orange', 50, 50, coneImg)
cone.push(cone23)
let cone24 = new Obstacle(775, -1525, 'orange', 50, 50, coneImg)
cone.push(cone24)
let cone25 = new Obstacle(725, -1525, 'orange', 50, 50, coneImg)
cone.push(cone25)
let cone26 = new Obstacle(675, -1525, 'orange', 50, 50, coneImg)
cone.push(cone26)
let cone27 = new Obstacle(775, -1425, 'orange', 50, 50, coneImg)
cone.push(cone27)
let cone28 = new Obstacle(725, -1425, 'orange', 50, 50, coneImg)
cone.push(cone28)
let cone29 = new Obstacle(550, -2050, 'orange', 50, 50, coneImg)
cone.push(cone29)
let cone30 = new Obstacle(375, -1950, 'orange', 50, 50, coneImg)
cone.push(cone30)
let cone31 = new Obstacle(425, -1950, 'orange', 50, 50, coneImg)
cone.push(cone31)
let cone32 = new Obstacle(475, -1950, 'orange', 50, 50, coneImg)
cone.push(cone32)
let cone33 = new Obstacle(600, -2100, 'orange', 50, 50, coneImg)
cone.push(cone33)
let cone34 = new Obstacle(600, -2150, 'orange', 50, 50, coneImg)
cone.push(cone34)
let cone35 = new Obstacle(550, -2200, 'orange', 50, 50, coneImg)
cone.push(cone35)



////////////

let bg = new Image();
bg.src = 'Images/Background.PNG';

function Background(y){
    this.x = 0, this.y = y, this.w = bg.width, this.h = bg.height;
    this.render = function (){
        ctx.drawImage(bg, 0, this.y += backgroundSpeed);
        if(this.y >= 0){
            this.y = -4340
            
            
        }
        
    }
    
}

let background = new Background (-4340);
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
    if(totalDistance >= 7.14){
        lateralSpeed = 0
        horizontalSpeed = 0
        backgroundSpeed = 0
        kilometersPerSecond = 0 
        obstacleSpeed = 0
        clearInterval(statsInterval)
        
    }
}



function obstacleCollision(collision1, collision2){
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
        if(obstacleCollision(raceCar1, cone[i]) === true){
            backgroundSpeed = 1.5
            setTimeout(function(){backgroundSpeed = 2.5}, 3000)
            obstacleSpeed = 1.5
            setTimeout(function(){obstacleSpeed = 2.5}, 3000)
            kilometersPerSecond = .063
            setTimeout(function(){kilometersPerSecond = .105}, 3000)
            speedDisplay.innerText = '228 KM/H'
            setTimeout(function(){speedDisplay.innerText = '380 KM/H'}, 3000)
        }
    }
    raceCar1.render();
    
    
    
}



document.addEventListener('keydown', movementHandler)


let startBtn = document.querySelector('#startBtn');


startBtn.addEventListener('click',() => {  
    statsInterval = setInterval(updateStatistics, 1000)  
    gameLoopInterval = setInterval(gameLoop, 10)
    updateStatistics();


 
});


















//480*1152



