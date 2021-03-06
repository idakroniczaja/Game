class Bubble {
  constructor(game) {
    this.game = game;
    this.radius = 50;
    this.x = Math.random() * canvas.width - this.radius;
    this.y = 0;
    this.didColide = false;

    
    this.img = new Image();
    this.img.src = "./images/donuts/donuts.png";
    this.width = 548;
    this.height = 461;  

 
    this.speed = Math.random() * 15+3;
    this.distance ;//distance between each bubble and player
    this.counted = false; //for adding only one poin for each bubble 

  this.spriteX = Math.floor(Math.random() * 11); // position on the sheet
   this.spriteY = 0;// position on the sheet


  }



  drawBubble() {
    if (this.x > this.radius+5 && this.x < canvas.width-this.radius)
     this.game.context.drawImage(this.img,this.width * this.spriteX, this.height * this.spriteY, this.width, this.height,this.x - 40, this.y - 40, this.width / 7,this.height / 7);
  }


  move() {
    this.y += this.speed*2;
    const dx = this.x - this.game.player.x;
    const dy = this.y - this.game.player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
}