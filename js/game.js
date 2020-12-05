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
    this.didColide = false;
    this.gamespeed = 3;
    this.sound = document.createElement("audio");  

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

  init() {
     const intro = document.getElementById("intro");
     intro.style.visibility = "hidden";

    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.createBackground();

    const interval = setInterval(() => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);


      this.createBackground();

      this.movingBubbles();
      this.movingObstacles();
  
      this.player.drawPlayer();
      this.player.move();
  

  
      this.frame++;

      if (this.score % 5 === 0) {
        this.obstacle.speed += 1;
      }

      if (this.lives === 0) {
        clearInterval(interval);
        this.gameOver();
      }

      if (this.score === 30) {
        clearInterval(interval);
        this.gameWin();
      }
    }, 1000 / 20);
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

    this.context.drawImage(
      this.BG.image4.img,
      this.BG.x1,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );
    this.context.drawImage(
      this.BG.image4.img,
      this.BG.x2,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );

    this.BG.image5.img = new Image();
    this.BG.image5.img.src = "./images/Mountain/candies/layer05_rocks.png";

    this.context.drawImage(
      this.BG.image5.img,
      this.BG.x1,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );
    this.context.drawImage(
      this.BG.image5.img,
      this.BG.x2,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );

    this.BG.image1.img = new Image();
    this.BG.image1.img.src = "./images/Mountain/candies/layer01_ground.png";

    this.context.drawImage(
      this.BG.image1.img,
      this.BG.x1,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );
    this.context.drawImage(
      this.BG.image1.img,
      this.BG.x2,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );

    this.BG.image3.img = new Image();
    this.BG.image3.img.src = "./images/Mountain/candies/layer03_trees.png";

    this.context.drawImage(
      this.BG.image3.img,
      this.BG.x1,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );
    this.context.drawImage(
      this.BG.image3.img,
      this.BG.x2,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );

    this.BG.image2.img = new Image();
    this.BG.image2.img.src = "./images/Mountain/candies/layer02_cake.png";

    this.context.drawImage(
      this.BG.image2.img,
      this.BG.x1,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );
    this.context.drawImage(
      this.BG.image2.img,
      this.BG.x2,
      this.BG.y,
      this.BG.width,
      this.BG.height
    );

    this.context.font = '25px Arial'
      this.context.fillStyle = "#B30F7A";
      this.context.fillText("score: " + this.score, 10, 50);
      this.context.fillStyle = "brown";
      this.context.fillText("lives: " + this.lives, 10, 80);

  }

  movingBubbles() {
    if (this.frame % 20 == 0) {
      this.bubblesArray.push(new Bubble(this));

    }
    this.bubblesArray.forEach((bubble, i) => {
      bubble.drawBubble();
      bubble.move();
         if (this.bubblesArray[i].y > this.canvas.height) {
           this.score--;
        this.bubblesArray.splice(i, 1);
      }
    });
    // console.log(this.bubblesArray.length);
    for (let i = 0; i < this.bubblesArray.length; i++) {
      if ( this.bubblesArray[i].distance <this.bubblesArray[i].radius + this.player.radius) {
        if (!this.bubblesArray[i].counted) {
          this.sound.src = "./sounds/point.wav";
           this.sound.play();
          this.score++;
          this.bubblesArray[i].counted = true;
          this.bubble.didColide = true;
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
    
    });


    for (let i = 0; i < this.obstacleArray.length; i++) {
      if (this.obstacleArray[i].x < 0) {
        this.obstacleArray.splice(i, 1);
      }
      //  console.log(this.obstacleArray.length);
      if (this.obstacleArray[i].distance <this.obstacleArray[i].radius + this.player.radius ) {
        // (console.log('collison'));
        if (!this.obstacleArray[i].counted) this.lives--;
        this.obstacleArray[i].counted = true;
        this.didColide = true;
        this.sound.src = "./sounds/collision.ogg";
        this.sound.play();
      }
    }
  }

  gameOver() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     const background = {
      x: 0,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height,
      img: undefined,
    };

    background.img = new Image();
    background.img.src = `./images/Mountain/layer06_sky.png`;

    background.img.addEventListener("load", () => {
      this.context.drawImage(background.img, background.x, background.y, background.width, background.height);
    });

    const newImg = {
      x: 400,
      y: 100,
      width: 400,
      height: 400,
      img: undefined,
    };

    newImg.img = new Image();
    newImg.img.src = `./images/game_over_PNG18.png`;

    newImg.img.addEventListener("load", () => {
      this.context.drawImage(newImg.img, newImg.x, newImg.y, newImg.width, newImg.height);
    });

const button = document.getElementById('gameOver');
button.style.visibility = "visible";

button.addEventListener('click', ()=>{
    button.style.visibility = "hidden";

}   )

 this.sound.src = "./sounds/gameOver.wav";
 this.sound.play();

  }

  gameWin() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

this.context.fillStyle = '#f9f6f6'
this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);


    const newImg = {
      x:200,
      y: 0,
      width: 800,
      height: 600,
      img: undefined,
    };

    newImg.img = new Image();
    newImg.img.src = `./images/169-1699685_transparent-well-done-png.jpg`;

    newImg.img.addEventListener("load", () => {
      this.context.drawImage( newImg.img,  newImg.x,  newImg.y,  newImg.width, newImg.height);
    });

    const button = document.getElementById("gameOver");
    button.style.visibility = "visible";

    button.addEventListener("click", () => {
      button.style.visibility = "hidden";
    });

 this.sound.src = './sounds/Jingle_Win_00.mp3';
 this.sound.play();


  }
}
