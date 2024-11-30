export class Player {
  constructor() {
    this.x = 160;
    this.y = 80;
    this.width = 90;
    this.height = 50;
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    this.speed = 6;
    this.points = 0;
    this.distance = 0;
    this.energy = 100;
    this.bag = 5;
    this.gifts_distributed;
    this.gifts_thrown;
  }
  moves(game) {
    if (!game.pauza) {
      if (this.left) {
        this.x -= this.speed;
      } else if (this.right) {
        this.x += this.speed;
      } else if (this.up) {
        this.y -= this.speed;
      } else if (this.down) {
        this.y += this.speed;
      }
    }

    //Colisons with walls
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.x + this.width >= game.width) {
      this.x = game.width - this.width;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.y + this.height >= game.height) {
      this.y = game.height - this.height;
    }
  }
  increaseDistance(game) {
    setInterval(() => {
      if (game.start && !game.pauza) {
        this.distance++;
      }
    }, 100);
  }
  decreaseEnergy(game) {
    setInterval(() => {
      if (game.start && !game.pauza) {
        this.energy--;
      }
    }, 400);
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
