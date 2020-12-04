class Obstacle {
  constructor(game) {
    this.game = game;
    this.x = Math.random() * canvas.width + canvas.width;
    this.y=Math.random() * canvas.height ;
    this.radius = 40;
    this.speed = Math.random() *  10 + 1;
    this.distance ;//distance between each bubble and player
    this.counted = false; //for adding only one poin for each bubble 

    this.img = new Image()
    this.img.src= './images/Monsters/spritesheet.png'
    this.width = 585;
    this.height = 590;  

    this.spriteX = 0; // position on the sheet
    this.spriteY = Math.floor(Math.random()*6);// position on the sheet


  }

  drawObstacle() {
     if(this.y > this.radius &&  this.y < canvas.height - this.radius)
     
this.game.context.drawImage(this.img, this.width*this.spriteX, this.height*this.spriteY, this.width, this.height, this.x-this.radius, this.y-this.radius, this.width/5, this.height/5);

if (this.spriteX < 4) this.spriteX++
else this.spriteX=0


  }

  move() {
    this.x -= this.speed*2;

    const dx = this.x - this.game.player.x;
    const dy = this.y - this.game.player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);

  }
}
