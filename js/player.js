class Player {
  constructor(game){
    this.game = game;
    this.x = canvas.width/2;
    this.y = canvas.height /2;
    this.radius = 50;
    this.spriteWidth = 715;
    this.spriteHeight = 543;
    this.width = this.spriteWidth/5;
    this.height = this.spriteHeight/5 ;
    this.playerImg = new Image();
    this.frameX = 0;
  

  }


drawPlayer(){
  // this.game.context.fillStyle = "red";
  // this.game.context.beginPath();
  // this.game.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  // this.game.context.fill();
  // this.game.context.closePath();

 this.playerImg.src = './images/Bird/fly/spritesheet.png'
 this.game.context.drawImage(this.playerImg, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x-75, this.y-45, this.width, this.height);

}

move(){
  //  document.addEventListener("keydown", (event) => {
  //    console.log(this.x)
  //    switch (event.code) {
  //      case "ArrowLeft":
  //     if (this.x >0+this.radius) this.x -= 1;
  //        break;
  //      case "ArrowRight":
  //        if (this.x<canvas.width-this.radius ) this.x +=1;
  //        break;
  //      case "ArrowUp":
  //         if (this.y > 0 + this.radius) this.y -= 1;
  //        break;
  //      case "ArrowDown":
  //     if (this.y < canvas.height-this.radius) this.y += 1;
  //        break;
  //      default:
  //        console.log("You can use only arrows!");
  //    }
  //  });




   document.addEventListener("mousedown", (event) => {
     let canvasPosition = this.game.canvas.getBoundingClientRect();

     let mouseX = event.x - canvasPosition.left;
     let mouseY = event.y - canvasPosition.top;
     //  console.log(mouseX, mouseY);

     const dx = this.x - mouseX;
     const dy = this.y - mouseY;
     //  console.log(dx,dy)

     if (mouseX != this.x){
       this.x -= dx/100;
     }
     if (mouseY !=this.y){
       this.y -= dy/100;
     }

   });


     if (this.frameX >=1 )  this.frameX = 0
     else  this.frameX++
      


};



}

