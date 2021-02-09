const canvas = document.querySelector('#canvas')
console.log(canvas)

const ctx = canvas.getContext('2d')


canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

let gameLoopInterval = setInterval(gameLoop, 100)



class RaceCar{
    constructor(x, y, color, height, width){
        this.x = x
        this.y = y
        this.color = color
        this.height = height
        this.width = width

    }
    render(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }
}



let raceCar1 = new RaceCar(550, 360, 'red', 50, 100)



let bg = new Image();
bg.src = 'Images/Background.jpg';

function Background(){
    this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
    this.render = function (){
        ctx.drawImage(bg, this.y ++, 0);
        if(this.y <= -1499){
            this.y = 0
        }
    }
}

let background = new Background ();

function movementHandler(e){
    switch (e.key){
        case('ArrowRight'):
            raceCar1.x = raceCar1.x + 15 
            break
        case('ArrowLeft'):
            raceCar1.x = raceCar1.x - 15     
            break
        case('ArrowUp'):
            raceCar1.y = raceCar1.y - 10
            break
        case('ArrowDown'):
            raceCar1.y = raceCar1.y + 10
            break
    }
    

}
// ArrowRight/ArrowLeft

function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    background.render();
    
    raceCar1.render();

}

document.addEventListener('keydown', movementHandler)










//480*1152


// let gameLoopInterval = setInterval(gameLoop, 60)











// function gameLoop(){
//     ctx.clearRect(0,0, canvas.width, canvas.height)



// }

