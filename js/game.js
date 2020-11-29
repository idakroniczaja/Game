class Game {
  constructor() {
    this.canvas = undefined;
    this.context = undefined;
    this.player = new Player(this);
    this.bubble = new Bubble(this);
    this.obstacle = new Obstacle(this);
    this.bubblesArray = [];
    this.obstacleArray = [];
    this.frame = 0;
    this.score = 0;
    this.lives = 3;
    this.over = false;
    this.gamespeed = 3;
    this.BG = {
      x1: 0,
      x2: canvas.width,
      y: 0,
      width: canvas.width,
      height: canvas.height,
      image1: {
        img: undefined,
      },
      image2: {
        img: undefined,
      },
      image3: {
        img: undefined,
      },
      image4: {
        img: undefined,
      },
      image5: {
        img: undefined,
      },
    };
  }

  createBackground() {
    if (this.BG.x1 <= -this.BG.width + this.gamespeed)
      this.BG.x1 = this.BG.width;
    else this.BG.x1 -= this.gamespeed;

    if (this.BG.x2 <= -this.BG.width + this.gamespeed)
      this.BG.x2 = this.BG.width;
    else this.BG.x2 -= this.gamespeed;

  this.BG.image4.img = new Image();
    this.BG.image4.img.src = "./images/Mountain/candies/layer04_clouds.png";

    this.context.drawImage(this.BG.image4.img,this.BG.x1,this.BG.y,this.BG.width, this.BG.height);
    this.context.drawImage(this.BG.image4.img,this.BG.x2,this.BG.y,this.BG.width,this.BG.height);
    
this.BG.image5.img = new Image();this.BG.image5.img.src = "./images/Mountain/candies/layer05_rocks.png";

    this.context.drawImage(this.BG.image5.img,this.BG.x1,this.BG.y,this.BG.width, this.BG.height);
    this.context.drawImage(this.BG.image5.img,this.BG.x2,this.BG.y,this.BG.width,this.BG.height);

    this.BG.image1.img = new Image();
    this.BG.image1.img.src ="./images/Mountain/candies/layer01_ground.png";

    this.context.drawImage(this.BG.image1.img, this.BG.x1,this.BG.y,this.BG.width,this.BG.height );
    this.context.drawImage(this.BG.image1.img,this.BG.x2,this.BG.y,this.BG.width, this.BG.height );

        this.BG.image3.img = new Image();
    this.BG.image3.img.src = "./images/Mountain/candies/layer03_trees.png";

    this.context.drawImage(this.BG.image3.img,this.BG.x1,this.BG.y,this.BG.width, this.BG.height);
    this.context.drawImage(this.BG.image3.img,this.BG.x2,this.BG.y,this.BG.width,this.BG.height);

    this.BG.image2.img = new Image();
    this.BG.image2.img.src = "./images/Mountain/candies/layer02_cake.png";

    this.context.drawImage(this.BG.image2.img,this.BG.x1,this.BG.y,this.BG.width, this.BG.height);
    this.context.drawImage(this.BG.image2.img,this.BG.x2,this.BG.y,this.BG.width,this.BG.height);




  }

  movingBubbles() {
    if (this.frame % 20 == 0) {
      this.bubblesArray.push(new Bubble(this));
    }
    this.bubblesArray.forEach((bubble, i) => {
      bubble.drawBubble();
      bubble.move();
      if (this.bubble.y < 0) {
        this.bubblesArray.splice(i, 1);
      }
    });
    for (let i = 0; i < this.bubblesArray.length; i++) {
      if (this.bubblesArray[i].y < 0 - this.radius * 2) {
        this.bubblesArray.splice(i, 1);
      }
      if (
        this.bubblesArray[i].distance <
        this.bubblesArray[i].radius + this.player.radius
      ) {
        if (!this.bubblesArray[i].counted) {
          this.score++;
          this.bubblesArray[i].counted = true;
          this.bubblesArray.splice(i, 1);
        }
      }
    }
  }

  movingObstacles() {
    if (this.frame % 30 == 0) {
      this.obstacleArray.push(new Obstacle(this));
    }
    this.obstacleArray.forEach((obstacle, i) => {
      obstacle.drawObstacle();
      obstacle.move();
      if (this.obstacle.x < 0) {
        this.obstacleArray.splice(i, 1);
      }
    });
    for (let i = 0; i < this.obstacleArray.length; i++) {
      if (
        this.obstacleArray[i].distance <
        this.obstacleArray[i].radius + this.player.radius
      ) {
        // (console.log('collison'));
        if (!this.obstacleArray[i].counted) this.lives--;
        this.obstacleArray[i].counted = true;
      }
      if (this.lives === 0) {
        this.gameOver();
      }
    }
  }

  gameOver() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //set background
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const newImg = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
      width: 150,
      height: 150,
      img: undefined,
    };

    newImg.img = new Image();
    newImg.img.src = `./images/fish-left - Copy.png`;


      this.context.drawImage(
        newImg.img,
        newImg.x,
        newImg.y,
        newImg.width,
        newImg.height
      );
    

    this.over = true;
    //put some text game over

    this.context.font = "70px";
    this.context.fillStyle = "red";
    this.context.fillText("game over", 200, 100);
  }

  // init() {
  //   this.canvas = document.getElementById("canvas");
  //   this.context = this.canvas.getContext("2d");

  //   this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

  //   this.createBackground();

  //   this.player.drawPlayer();
  //   this.player.move();

  //   this.movingBubbles();
  //   this.movingObstacles();

  //   this.context.fillStyle = "black";
  //   this.context.fillText("score: " + this.score, 10, 50);
  //   this.context.fillStyle = "red";
  //   this.context.fillText("lives: " + this.lives, 10, 80);

  //   this.frame++;
  //   if (this.frame % 2) this.player.frameX === 0;

  //   if (this.over === false) {
  //     requestAnimationFrame(() => this.init());
  //   }
  // }

  init() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");

  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.createBackground();


     setInterval(() => {
       this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.createBackground();

       this.player.drawPlayer();
       this.player.move();

       this.movingBubbles();
       this.movingObstacles();

       this.context.fillStyle = "black";
       this.context.fillText("score: " + this.score, 10, 50);
       this.context.fillStyle = "red";
       this.context.fillText("lives: " + this.lives, 10, 80);

       this.frame++;

     }, 1000 / 20);




  }
  
}



