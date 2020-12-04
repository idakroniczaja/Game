class Player {
  constructor(game){
    this.game = game;
    this.x = canvas.width/2;
    this.y = canvas.height /2;
    this.mouseX;
    this.mouseY;
    this.radius = 50;
    this.spriteWidth = 715;
    this.spriteHeight = 543;
    this.width = this.spriteWidth/5;
    this.height = this.spriteHeight/5 ;
    this.playerImg = new Image();
    this.frameX = 0;
  
  }


drawPlayer(){

 if (this.game.didColide === true) {

   this.playerImg.src = "./images/Bird/got hit/collision.png";
   this.game.didColide = false;
 } else if (this.x >= this.mouseX) {
  
   this.playerImg.src = "./images/Bird/fly/spritesheet3.png";
 } else 
  this.playerImg.src = "./images/Bird/fly/spritesheet.png";
    this.game.context.drawImage(this.playerImg, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 75, this.y - 45, this.width, this.height
    );

 if (this.game.bubble.didColide === true) {
  this.width+=3;
  this.height+=3;
  this.radius+=2;
this.game.bubble.didColide = false;
 }

};



move(){

   document.addEventListener("mousedown", (event) => {
     let canvasPosition = this.game.canvas.getBoundingClientRect();
// console.log(canvasPosition)
     this.mouseX = event.x - canvasPosition.left;
     this.mouseY = event.y - canvasPosition.top;
  // console.log(this.mouseX, this.mouseY);

     const dx = this.x -this. mouseX;
     const dy = this.y - this.mouseY;
      // console.log(dx,dy)

 if (this.mouseX != this.x)  {
       this.x -= dx/50;
       if(this.x < this.radius){
         this.x = this.radius + 10
       }else if (this.x > canvas.width-this.radius)
       {this.x = canvas.width - this.radius - 10
      }
     }


     if (this.mouseY !=this.y){
       this.y -= dy/50;
       if(this.y < this.radius){
         this.y = this.radius -10
       }else if (this.y>canvas.height-this.radius){
         this.y = canvas.height - this.radius-3
       }
     
}


    
  

   });


     if (this.frameX >=1 )  this.frameX = 0
     else  this.frameX++
      


};



}

