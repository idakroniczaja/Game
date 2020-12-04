


window.onload = () => {
  document.querySelector("#intro button").onclick = () => {
 let myGame = new Game();
  myGame.init();
  game = true;
  };

  document.querySelector('#gameOver').onclick = () => {
    
     let myGame = new Game();
     myGame.init();
     game = true;
  }


};

 


