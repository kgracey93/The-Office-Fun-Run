class Game {
  constructor() {
    this.obstacles = [];
    this.lives = 5;
    this.points = 0;
    this.gameOver = false;
    this.gameStart = false;
    this.level = 1;
    this.endGameNames = ['Ryan Howard', 'Pam Beesly', 'Jim Halpert', 'Dwight Schrute', 'Michael Scott'];
    this.endGameReasons = [
      'Falisification of online sales \nand drug use during company events.',
      `Using company time to work on \npersonal illustration projects \nand excessive use of office supplies.`,
      'Harassing cowokers with petty pranks \nand spending more time flirting \nwith the receptionist than working.',
      'Lying to your boss about \nhaving a denist appointment.',
      'Distracting your employees, \noffensive comments,\nsleeping with your boss. \nMust we go on?',
    ];
    this.obstacleSound;
    this.themeSong;
    this.slider;
    this.levelCounter;
    this.hurdleFallen;
  }

  preloadGame() {
    this.prizes = [];
    this.backgroundImage = loadImage('./assets/background.png');
    this.ryan = loadImage('./assets/ryan.gif');
    this.pam = loadImage('./assets/pam.gif');
    this.jim = loadImage('./assets/jim.gif');
    this.dwight = loadImage('./assets/dwight.gif');
    this.michael = loadImage('./assets/michael.gif');
    this.hurdleImage = loadImage('./assets/hurdle.png');
    this.ryanPrize = { image: loadImage('./assets/ryanPrize.png'), level: 1 };
    this.pamPrize = { image: loadImage('./assets/pamPrize.png'), level: 2 };
    this.jimPrize = { image: loadImage('./assets/jimPrize.png'), level: 3 };
    this.dwightPrize = {
      image: loadImage('./assets/dwightPrize.png'),
      level: 4,
    };
    this.michaelPrize = { image: loadImage('./assets/dundie.png'), level: 5 };
    this.obstacleSounds = [
      loadSound('./assets/thats-what-she-said1.mp3'),
      loadSound('./assets/boom-roasted.mp3'),
      loadSound('./assets/thats-what-she-said2.mp3'),
      loadSound('./assets/what-is-your-problem.mp3'),
      loadSound('./assets/thats-what-she-said3.mp3'),
    ];
    this.themeSong = loadSound('./assets/The Office.mp3');
    this.slider = createSlider(0, 1, 0.5, 0.01);
    this.levelCounter = [
      {img: loadImage('./assets/lvl1.png'), saying: 'Welcome to the office! You are a temp!'},
      {img: loadImage('./assets/lvl2.png'), saying: 'You have been promoted to receptionist!'},
      {img: loadImage('./assets/lvl3.png'), saying: 'You have been promoted to salesperson!'},
      {img: loadImage('./assets/lvl4.png'), saying: 'You are now assistant to the regional manager!'},
      {img: loadImage('./assets/lvl5.png'), saying: 'You have been promoted to manager!'}
    ];
    this.ryanGif = [
      
    ]
  }

  setupGame() {
    this.background = new Background(this.backgroundImage);
    this.player = new Player(
      this.ryan,
      this.pam,
      this.jim,
      this.dwight,
      this.michael
    );
    this.slider.parent('slider-holder');
  }

  drawGame() {
    this.themeSong.setVolume(this.slider.value());
    this.background.drawBackground();
    this.player.drawPlayer();

    // Obstacles
    if (frameCount % 200 === 0) {
      this.obstacles.push(new Obstacle(this.hurdleImage));
    }

    this.obstacles.forEach(function (obstacle) {
      obstacle.drawObstacle();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      if (!obstacle.collision(this.player)) {
        return true;
      } else {
        this.lives -= 1;
        document.querySelector('.lives').innerText = this.lives;
        this.obstacleSounds[this.lives].play();
        if (this.lives === 0) {
          this.gameOver = true;
        }
        return false;
      }
    });

    // Michael Prizes
    // Ideally I add this functionality to the prize then pass the new image as a parameter to update the prize above
    //
    if (this.level == 1) {
      this.prizeBehavior(this.ryanPrize);
    }

    if (this.points == 20) {
      this.level = 2;
    }

    if (this.level == 2) {
      this.prizeBehavior(this.pamPrize);
      document.querySelector('#level-status').innerText = this.levelCounter[1].saying;
      document.querySelector('#level-image').innerHTML = `<div id = 'level-image'> <img class='level-pic' src="./assets/lvl2.png" alt="level2"> </div>`;
    }

    if (this.points == 40) {
      this.level = 3;
    }
    if (this.level == 3) {
      this.prizeBehavior(this.jimPrize);
      document.querySelector('#level-status').innerText = this.levelCounter[2].saying;
      document.querySelector('#level-image').innerHTML = `<div id = 'level-image'> <img class='level-pic' src="./assets/lvl3.png" alt="level3"> </div>`;
    }

    if (this.points == 60) {
      this.level = 4;
    }
    if (this.level == 4) {
      this.prizeBehavior(this.dwightPrize);
      document.querySelector('#level-status').innerText = this.levelCounter[3].saying;
      document.querySelector('#level-image').innerHTML = `<div id = 'level-image'> <img class='level-pic' src="./assets/lvl4.png" alt="level4"> </div>`;
    }

    if (this.points == 80) {
      this.level = 5;
    }

    if (this.level == 5) {
      this.prizeBehavior(this.michaelPrize);
      document.querySelector('#level-status').innerText = this.levelCounter[4].saying;
      document.querySelector('#level-image').innerHTML = `<div id = 'level-image'> <img class='level-pic' src="./assets/lvl5.png" alt="level5"> </div>`;
    }
  }
  prizeBehavior(imageObject) {
    this.prizes = this.prizes.filter((imageObject) => {
      if (imageObject.level === game.level) return true;
    });
    if (random(1) < 0.01) {
      this.prizes.push(new Prize(imageObject));
    }
    this.prizes.forEach(function (prize) {
      prize.drawPrize();
    });
    this.prizes = this.prizes.filter((prize) => {
      if (!prize.collision(this.player)) {
        return true;
      } else {
        this.points += 10;
        document.querySelector('.points').innerText = this.points;
      }
    });
  }
}
