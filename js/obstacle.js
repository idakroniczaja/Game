class Obstacle {
  constructor(game) {
    this.game = game;
    this.x = Math.random() * canvas.width+canvas.width;
    this.y=Math.random() * canvas.height;
    this.radius = 50;
    this.speed = Math.random() *  6 + 1;
    this.distance ;//distance between each bubble and player
    this.counted = false; //for adding only one poin for each bubble 

    this.img = new Image()
    this.img.src= './images/Monsters/allmonsters.png'
    this.width = 730;
    this.height = 650.8;  

    this.spriteX = 0; // position on the sheet
    this.spriteY = Math.floor(Math.random()*5 );// position on the sheet
  }

  drawObstacle() {
     
this.game.context.drawImage(this.img, this.width*this.spriteX, this.height*this.spriteY, this.width, this.height, this.x-50, this.y-50, this.width/7, this.height/7);

if (this.spriteX < 10) this.spriteX++
else this.spriteX=0
    // if(this.y>this.radius && this.y<=canvas.height-this.radius){
    // this.game.context.fillStyle = "green";
    // this.game.context.beginPath();
    // this.game.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // this.game.context.fill();
    // this.game.context.closePath();
    // this.game.context.stroke();
    // }

  }

  move() {
    this.x -= this.speed*2;
    const dx = this.x - this.game.player.x;
    const dy = this.y - this.game.player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);

  }
}
